"use client";

import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Text, Transformer, Line, Rect } from "react-konva";
import Konva from "konva";
import useImage from "use-image";
import { useCertifyStore, Field } from "../store/useCertifyStore";

interface FieldNodeProps {
  field: Field;
  isSelected: boolean;
  scale: number;
  onSelect: () => void;
  onChange: (newAttrs: Partial<Field>) => void;
}

const FieldNode: React.FC<FieldNodeProps> = ({ field, isSelected, scale, onSelect, onChange }) => {
  const textRef = useRef<Konva.Text | null>(null);
  const trRef = useRef<Konva.Transformer | null>(null);
  const { templateDimensions } = useCertifyStore();

  useEffect(() => {
    if (isSelected && trRef.current && textRef.current) {
      trRef.current.nodes([textRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  useEffect(() => {
    if (field.fontFamily) {
      const sanitized = field.fontFamily.replace(/["']/g, '');
      document.fonts.load(`16px "${sanitized}"`).then(() => {
        textRef.current?.getLayer()?.batchDraw();
      }).catch((err) => {
        console.warn("CanvasEditor font load error:", err);
      });
    }
  }, [field.fontFamily]);

  const effectiveX = (field.autoCenterHorizontal && templateDimensions) ? (templateDimensions.width / 2 - field.width / 2) : field.x;
  const effectiveY = (field.autoCenterVertical && templateDimensions) ? (templateDimensions.height / 2 - field.height / 2) : field.y;

  const konvaAlign = field.align;
  const konvaVerticalAlign = field.verticalAlign;

  const fontStyle = `${field.isItalic ? 'italic ' : ''}${field.isBold ? 'bold' : 'normal'}`;
  const fontFamily = field.fontFamily || '"Courier New", Courier, monospace';
  const displayText = field.mappedColumn ? `[${field.mappedColumn}]` : (field.staticText || 'Certificate');

  return (
    <>
      <Text
        ref={textRef}
        text={displayText}
        x={effectiveX}
        y={effectiveY}
        width={field.width}
        height={field.height}
        fontSize={field.fontSize}
        fill={field.color}
        align={konvaAlign}
        verticalAlign={konvaVerticalAlign}
        draggable
        dragBoundFunc={(pos) => {
           return {
             x: field.autoCenterHorizontal ? effectiveX * scale : pos.x,
             y: field.autoCenterVertical ? effectiveY * scale : pos.y
           };
        }}
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onChange({
            x: field.autoCenterHorizontal ? effectiveX : e.target.x(),
            y: field.autoCenterVertical ? effectiveY : e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = textRef.current;
          if (!node) return;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // Reset scale and apply to width/height to keep font size stable on resize
          node.scaleX(1);
          node.scaleY(1);

          onChange({
            x: node.x(),
            y: node.y(),
            width: Math.max(50, node.width() * scaleX),
            height: Math.max(20, node.height() * scaleY),
          });
        }}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
      />
      {!isSelected && (
        <Rect
          x={effectiveX}
          y={effectiveY}
          width={field.width}
          height={field.height}
          stroke="rgba(0,0,0,0.3)"
          strokeWidth={1.5 / scale}
          dash={[5 / scale, 5 / scale]}
          listening={false}
        />
      )}
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 50 || newBox.height < 20) {
              return oldBox;
            }
            return newBox;
          }}
          enabledAnchors={[
            'top-left', 'top-center', 'top-right',
            'middle-right', 'middle-left',
            'bottom-left', 'bottom-center', 'bottom-right'
          ]}
        />
      )}
    </>
  );
};

export const CanvasEditor: React.FC = () => {
  const { templateImage, fields, updateField, selectedFieldId, setSelectedField, gridLevel, gridColor } = useCertifyStore();
  const [image] = useImage(templateImage || "");

  // Responsive stage state
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 });
  const [scale, setScale] = useState(1);

  // Load selected fonts dynamically
  useEffect(() => {
    const families = new Set(fields.map(f => f.fontFamily).filter(Boolean));
    families.forEach(family => {
      const linkId = `font-${family.replace(/\s+/g, '-')}`;
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/\s+/g, '+')}:ital,wght@0,400;0,700;1,400;1,700&display=swap`;
        document.head.appendChild(link);
      }
    });
  }, [fields]);

  useEffect(() => {
    const checkSize = () => {
      if (containerRef.current && image) {
        const containerW = containerRef.current.clientWidth;
        const containerH = containerRef.current.clientHeight;
        
        const scaleX = containerW / image.width;
        const scaleY = containerH / image.height;
        
        // 5% padding so it never touches the absolute edges
        const actualScale = Math.min(1, Math.min(scaleX, scaleY) * 0.95); 
        setScale(actualScale);
        
        setStageSize({
          width: image.width * actualScale,
          height: image.height * actualScale,
        });
      }
    };
    
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [image]);

  const checkDeselect = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    const stage = e.target.getStage();
    const isBgImage = 'name' in e.target && typeof (e.target as Konva.Node).name === 'function' && (e.target as Konva.Node).name() === 'bg-image';
    const clickedOnEmpty = e.target === stage || isBgImage;
    if (clickedOnEmpty) {
      setSelectedField(null);
    }
  };

  const renderGrid = () => {
    if (gridLevel === 'off' || !image) return null;
    
    const lines = [];
    const w = image.width;
    const h = image.height;
    
    const stroke = gridColor === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)';
    const grStroke = gridColor === 'light' ? 'rgba(0, 255, 128, 0.7)' : 'rgba(0, 200, 83, 0.4)';
    const strokeWidth = 2 / scale;

    if (['low', 'medium', 'high'].includes(gridLevel)) {
      lines.push(<Line key="c-v" points={[w/2, 0, w/2, h]} stroke={stroke} strokeWidth={strokeWidth} dash={[10/scale, 5/scale]} listening={false} />);
      lines.push(<Line key="c-h" points={[0, h/2, w, h/2]} stroke={stroke} strokeWidth={strokeWidth} dash={[10/scale, 5/scale]} listening={false} />);
      lines.push(<Line key="gr-v1" points={[w*0.382, 0, w*0.382, h]} stroke={grStroke} strokeWidth={strokeWidth} listening={false} />);
      lines.push(<Line key="gr-v2" points={[w*0.618, 0, w*0.618, h]} stroke={grStroke} strokeWidth={strokeWidth} listening={false} />);
      lines.push(<Line key="gr-h1" points={[0, h*0.382, w, h*0.382]} stroke={grStroke} strokeWidth={strokeWidth} listening={false} />);
      lines.push(<Line key="gr-h2" points={[0, h*0.618, w, h*0.618]} stroke={grStroke} strokeWidth={strokeWidth} listening={false} />);
    }

    if (['medium', 'high'].includes(gridLevel)) {
      lines.push(<Line key="q-v1" points={[w*0.25, 0, w*0.25, h]} stroke={stroke} strokeWidth={strokeWidth} opacity={0.3} listening={false} />);
      lines.push(<Line key="q-v2" points={[w*0.75, 0, w*0.75, h]} stroke={stroke} strokeWidth={strokeWidth} opacity={0.3} listening={false} />);
      lines.push(<Line key="q-h1" points={[0, h*0.25, w, h*0.25]} stroke={stroke} strokeWidth={strokeWidth} opacity={0.3} listening={false} />);
      lines.push(<Line key="q-h2" points={[0, h*0.75, w, h*0.75]} stroke={stroke} strokeWidth={strokeWidth} opacity={0.3} listening={false} />);
    }

    if (gridLevel === 'high') {
      for (let i = 1; i < 10; i++) {
        if (i === 5) continue; 
        lines.push(<Line key={`h10-v${i}`} points={[w*(i/10), 0, w*(i/10), h]} stroke={stroke} strokeWidth={strokeWidth} opacity={0.15} listening={false} />);
        lines.push(<Line key={`h10-h${i}`} points={[0, h*(i/10), w, h*(i/10)]} stroke={stroke} strokeWidth={strokeWidth} opacity={0.15} listening={false} />);
      }
    }

    return lines;
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-transparent" ref={containerRef}>
      {!templateImage ? (
        <div className="py-20 px-10 text-center font-mono font-bold text-gray-400 uppercase neo-card border-dashed">
          No Template Loaded
        </div>
      ) : (
        <div className="border-3 border-primary-black shadow-neo-base bg-white" style={{ width: stageSize.width + 6, height: stageSize.height + 6, overflow: 'hidden' }}>
          <Stage
            width={stageSize.width}
            height={stageSize.height}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
            scaleX={scale}
            scaleY={scale}
          >
            <Layer>
              {image && (
                <KonvaImage
                  image={image}
                  name="bg-image"
                  width={image.width}
                  height={image.height}
                />
              )}
              
              {renderGrid()}
              
              {fields.map((field) => (
                <FieldNode
                  key={field.id}
                  field={field}
                  scale={scale}
                  isSelected={field.id === selectedFieldId}
                  onSelect={() => setSelectedField(field.id)}
                  onChange={(newAttrs) => updateField(field.id, newAttrs)}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      )}
    </div>
  );
};
