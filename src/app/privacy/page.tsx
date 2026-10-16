import Link from 'next/link';
import { Heart, ShieldCheck, Lock, EyeOff, Cpu, RefreshCw } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-color text-primary-black font-main">
      <nav className="sticky top-0 z-50 bg-primary-black text-white p-4 md:p-6 border-b-4 border-white flex justify-between items-center neo-card rounded-none">
         <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-3xl font-mono font-bold text-primary-green uppercase tracking-widest drop-shadow-[2px_2px_0_#ffffff]">
              Privacy Policy
            </h1>
         </div>
         <Link href="/">
           <button className="neo-button bg-white text-primary-black text-xs md:text-sm px-4 py-2 hover:bg-gray-100 shadow-[4px_4px_0_#ffffff] hover:shadow-[6px_6px_0_#ffffff] transition-all">
              RETURN TO HOME
           </button>
         </Link>
      </nav>

      <main className="max-w-4xl mx-auto space-y-10 p-6 md:p-12 pb-24">
         
         {/* Summary Banner */}
         <section className="neo-card bg-primary-green text-primary-black p-6 md:p-8 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-start gap-4">
               <ShieldCheck size={40} className="flex-shrink-0 mt-1" />
               <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Zero-Server & Local-Only Architecture</h2>
                  <p className="mt-2 text-base md:text-lg font-bold">
                     CertifyBulk is strictly a client-side application. Your certificate templates, recipient names, CSV files, and generated images NEVER leave your computer or browser.
                  </p>
               </div>
            </div>
         </section>

         {/* Section 1 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <Cpu className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">1. How Your Data is Processed</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  When you upload a certificate template image (PNG/JPG) or a spreadsheet (CSV) containing names and IDs, all processing is performed strictly inside your browser&apos;s local memory and through background Web Workers (using an isolated <code>OffscreenCanvas</code>).
               </p>
               <p>
                  No data is transmitted, uploaded, streamed, or synchronized to any external server or backend database.
               </p>
            </div>
         </section>

         {/* Section 2 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <EyeOff className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">2. Personal Information Collection</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  CertifyBulk does <strong>not</strong> collect, harvest, store, or sell any personal information:
               </p>
               <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li>No account registration or login is required.</li>
                  <li>No recipient names, email addresses, or identification numbers are logged or analyzed.</li>
                  <li>No certificate files or batch ZIP archives are stored remotely.</li>
               </ul>
            </div>
         </section>

         {/* Section 3 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <Lock className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">3. Local Storage & Offline Cache</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  As a Progressive Web App (PWA) and Windows Store Application, CertifyBulk uses standard browser Service Workers (Workbox) to cache static application assets (HTML, CSS, JavaScript, icons) so the app can function completely offline without an active internet connection.
               </p>
               <p>
                  No private user data or files are stored in this static application cache.
               </p>
            </div>
         </section>

         {/* Section 4 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <RefreshCw className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">4. Third-Party Services</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  CertifyBulk interfaces with the following third-party resources solely for aesthetic and delivery purposes:
               </p>
               <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li>
                     <strong>Google Fonts</strong>: Used to fetch typography styles on demand when selecting custom fonts in the editor.
                  </li>
                  <li>
                     <strong>Zero External Analytics</strong>: No web analytics, cookies, tracking beacons, or telemetry services are active. The application operates entirely client-side.
                  </li>
               </ul>
            </div>
         </section>

         {/* Section 5 - Contact */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-3">5. Contact & Inquiries</h3>
            <div className="text-base md:text-lg leading-relaxed">
               <p>
                  If you have questions or feedback regarding this privacy policy or the application, please reach out via GitHub or through the developer&apos;s website:
               </p>
               <div className="mt-4 flex flex-wrap gap-4 font-mono text-sm font-bold">
                  <a 
                     href="https://github.com/theinfinox/certifyBulk" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-primary-black text-white px-4 py-2 border-2 border-primary-black shadow-[3px_3px_0_#00C853] hover:-translate-y-0.5 transition-all"
                  >
                     GitHub Repository
                  </a>
                  <a 
                     href="https://govindsr.me" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-primary-black text-white px-4 py-2 border-2 border-primary-black shadow-[3px_3px_0_#00C853] hover:-translate-y-0.5 transition-all"
                  >
                     Developer: Govind SR (@theinfinox)
                  </a>
               </div>
            </div>
         </section>

      </main>

      <footer className="w-full pb-8 text-center font-mono font-bold flex flex-wrap items-center justify-center gap-2 text-sm bg-bg-color z-10 relative">
         MADE WITH <Heart size={16} fill="currentColor" className="text-alert-red animate-pulse" /> BY 
         <a href="https://govindsr.me" target="_blank" rel="noopener noreferrer" className="bg-primary-black text-white px-2 py-1 mx-1 hover:-translate-y-1 shadow-[2px_2px_0px_#00C853] hover:shadow-[4px_4px_0px_#00C853] transition-all border-2 border-primary-black cursor-pointer">@theinfinox</a>
      </footer>
    </div>
  );
}

