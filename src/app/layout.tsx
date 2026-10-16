import type { Metadata, Viewport } from "next";
import { SplashScreen } from "../components/SplashScreen";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  title: "CertifyBulk | High-Res Bulk Certificate Generator",
  description: "A lightning-fast, entirely client-side PWA for generating mass high-resolution certificates locally using dynamic CSV data mappings. Engineered with Neo-Brutalist aesthetics.",
  keywords: "bulk certificate generator, CSV to certificates, PWA, client-side exporter, automate certificates, generate dynamic images, neo-brutalism, React canvas editor, high resolution",
  authors: [{ name: "Govind SR", url: "https://govindsr.me" }],
  creator: "Govind SR (@theinfinox)",
  openGraph: {
    title: "CertifyBulk | High-Res Bulk Generator",
    description: "Map your CSV data directly onto High-Res templates and instantly export ZIP bundles right in your browser.",
    siteName: "CertifyBulk PWA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CertifyBulk | Mass Certificate Engine",
    description: "Generate 100s of crisp certificates entirely offline securely in your browser.",
    creator: "@theinfinox"
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div 
          id="global-loader-container"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
             __html: `
               <div id="global-loader" style="position: fixed; inset: 0; z-index: 9999; background-color: #f8f9fa; color: #0d0d0d; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);">
                  <div style="display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 28rem; padding: 0 2rem;">
                    
                    <h1 style="font-size: 4rem; font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -2px; line-height: 1; color: #00C853; text-transform: uppercase; margin-bottom: 3rem; text-align: center; text-shadow: 6px 6px 0px #0d0d0d, -2px -2px 0px #0d0d0d, 2px -2px 0px #0d0d0d, -2px 2px 0px #0d0d0d, 2px 2px 0px #0d0d0d; animation: floatLoader 2s ease-in-out infinite;">
                      Certify<br/>Bulk
                    </h1>
                    
                    <div style="width: 100%; height: 3rem; border: 3px solid #0d0d0d; background-color: #ffffff; box-shadow: 8px 8px 0px #0d0d0d; border-radius: 12px; position: relative; margin-bottom: 2rem; overflow: hidden;">
                      <div id="global-loader-bar" style="position: absolute; top: -3px; left: -3px; bottom: -3px; background-color: #00C853; width: 0%; border-right: 3px solid #0d0d0d; transition: width 0.15s ease-out;"></div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; width: 100%; font-family: 'Courier New', Courier, monospace; font-size: 1.5rem; font-weight: bold; color: #0d0d0d;">
                      <span id="global-loader-text">LOADING<span id="loader-dots">...</span></span>
                      <span id="global-loader-percent">0%</span>
                    </div>
                  </div>
                  
                  <style>
                    @keyframes floatLoader {
                      0%, 100% { transform: translateY(0) scale(1) rotate(-1deg); }
                      50% { transform: translateY(-15px) scale(1.02) rotate(1deg); }
                    }
                  </style>
               </div>
               <script>
                  (function() {
                    var container = document.getElementById('global-loader-container');
                    var bar = document.getElementById('global-loader-bar');
                    var pct = document.getElementById('global-loader-percent');
                    var txt = document.getElementById('global-loader-text');
                    var dots = document.getElementById('loader-dots');
                    var loader = document.getElementById('global-loader');
                    var progress = 0;
                    var dotCount = 0;
                    var finished = false;
                    
                    var dotInterval = setInterval(function() {
                       dotCount = (dotCount + 1) % 4;
                       var d = '';
                       for(var i=0; i<dotCount; i++) d += '.';
                       if(dots) dots.innerText = d;
                    }, 400);

                    function dismiss() {
                       if (finished) return;
                       finished = true;
                       clearInterval(interval);
                       clearInterval(dotInterval);
                       if (bar) bar.style.width = '100%';
                       if (pct) pct.innerText = '100%';
                       if (txt) txt.innerHTML = 'READY<span id="loader-dots"></span>';
                       setTimeout(function() {
                         if (loader) loader.style.transform = 'translateY(-100%)';
                         setTimeout(function() {
                            if (container) container.style.display = 'none';
                         }, 600);
                       }, 300);
                    }

                    var interval = setInterval(function() {
                       if (progress < 90) {
                          progress += Math.random() * 5 + 1;
                       }
                       if (progress > 90) progress = 90;
                       
                       if (bar) bar.style.width = Math.floor(progress) + '%';
                       if (pct) pct.innerText = Math.floor(progress) + '%';
                       
                       if (window.__certify_hydrated) {
                          dismiss();
                       }
                    }, 50);

                    setTimeout(dismiss, 2500);
                  })();
               </script>
             `
          }}
        />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
