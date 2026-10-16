import Link from 'next/link';
import { Heart, ShieldCheck, Lock, EyeOff, Cpu, RefreshCw, UserCheck, Coffee } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-color text-primary-black font-main">
      <nav className="sticky top-0 z-50 bg-primary-black text-white p-4 md:p-6 border-b-4 border-white flex justify-between items-center neo-card rounded-none">
         <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl font-mono font-bold text-primary-green uppercase tracking-widest drop-shadow-[2px_2px_0_#ffffff]">
              Privacy Policy
            </h1>
            <span className="font-mono text-[10px] md:text-xs text-gray-400 uppercase mt-0.5">
              Effective &amp; Last Updated: October 2026
            </span>
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
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Zero-Server &amp; Local-Only Architecture</h2>
                  <p className="mt-2 text-base md:text-lg font-bold">
                     CertifyBulk operates strictly as a client-side utility. Your certificate templates, recipient spreadsheets (CSV), and generated certificate images never leave your local machine or browser.
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
                  When you upload a certificate template image (PNG/JPEG) or a spreadsheet (CSV) containing names, dates, and certificate IDs, all data manipulation, layout rendering, and ZIP compression occur strictly inside your browser&apos;s volatile RAM and through background Web Workers (utilizing an <code>OffscreenCanvas</code>).
               </p>
               <p>
                  No user files, recipient records, or exported archives are transmitted, uploaded, streamed, or synchronized to any external server, cloud backend, or remote database.
               </p>
            </div>
         </section>

         {/* Section 2 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <EyeOff className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">2. Zero Personal Information Collected</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  CertifyBulk does <strong>not</strong> collect, harvest, store, or sell any personal data:
               </p>
               <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><strong>No Account Required</strong>: You never need to sign up, provide an email address, or log in.</li>
                  <li><strong>No Data Harvesting</strong>: Names, email addresses, scores, or identifiers inside your CSV are never inspected, logged, or retained by us.</li>
                  <li><strong>No Analytics Tracking</strong>: We do not track user identities, session recordings, or device fingerprints.</li>
                  <li><strong>No Remote File Storage</strong>: All generated certificates and ZIP archives exist only in your browser until downloaded or dismissed.</li>
               </ul>
            </div>
         </section>

         {/* Section 3 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <Lock className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">3. Offline Caching &amp; Storage</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  CertifyBulk is engineered as an installable Progressive Web App (PWA). Here is how local browser storage is utilized:
               </p>
               <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><strong>Static Assets Cache Only</strong>: Service Workers (Workbox) cache static application code (HTML, CSS, JavaScript, and app icons) solely to allow the app to launch and function completely offline without an internet connection.</li>
                  <li><strong>Zero Persistent User Data</strong>: Your uploaded images, CSV data, and certificate fields are never stored in browser <code>localStorage</code>, <code>sessionStorage</code>, or <code>IndexedDB</code>. Refreshing the browser or clicking &quot;CLEAR ALL&quot; instantly wipes all data from memory.</li>
                  <li><strong>Zero Cookies</strong>: CertifyBulk does not set or read any HTTP cookies or tracking tokens.</li>
               </ul>
            </div>
         </section>

         {/* Section 4 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <RefreshCw className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">4. External Network Connections</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-4">
               <p>
                  To provide dynamic typography and helpful tutorials, the application interfaces with the following external resources:
               </p>
               <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li>
                     <strong>Google Fonts</strong>: When you select or preview a custom font in the editor, your browser retrieves the requested stylesheet and font file from Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>). No personal data or certificate contents are transmitted during font requests.
                  </li>
                  <li>
                     <strong>Tutorial Video Embed</strong>: The walkthrough on the Guides page is embedded using YouTube&apos;s privacy-enhanced mode (<code>youtube-nocookie.com</code>), which prevents tracking cookies from being placed on your browser unless you choose to play the video.
                  </li>
                  <li>
                     <strong>Static CDN Delivery</strong>: When loading the web application, standard, non-identifying HTTP delivery request headers (such as IP addresses and User-Agent) are processed by static CDN infrastructure solely to serve the web files securely.
                  </li>
               </ul>
               <p className="font-bold border-l-4 border-primary-green pl-3 text-sm">
                  We run zero third-party telemetry, zero analytics scripts, and zero advertising networks.
               </p>
            </div>
         </section>

         {/* Section 5 */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
               <UserCheck className="text-primary-green bg-black p-1.5 rounded-sm" size={32} />
               <h3 className="text-xl md:text-2xl font-black uppercase">5. User Rights &amp; Data Sovereignty (GDPR &amp; CCPA)</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-3">
               <p>
                  Because CertifyBulk does not collect, transmit, or store any personal data on remote servers:
               </p>
               <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li>You retain 100% sovereignty and ownership over all uploaded data and generated outputs.</li>
                  <li>There is no remote personal data to access, rectify, export, or delete under GDPR, CCPA, or other data privacy frameworks.</li>
                  <li>You can erase all in-memory data at any moment simply by closing the browser tab or clicking the &quot;CLEAR ALL&quot; button in the editor.</li>
               </ul>
            </div>
         </section>

         {/* Section 6 - Contact */}
         <section className="neo-card bg-white p-6 md:p-10 border-4 border-primary-black shadow-[6px_6px_0_#0d0d0d]">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-3">6. Open Source &amp; Contact</h3>
            <div className="text-base md:text-lg leading-relaxed">
               <p>
                  CertifyBulk is an open-source project. You can audit the complete source code, verify these privacy claims directly, or reach out with inquiries:
               </p>
               <div className="mt-4 flex flex-wrap gap-4 font-mono text-sm font-bold">
                  <a 
                     href="https://github.com/theinfinox/cerifyBulk" 
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
         <span className="text-gray-500">|</span>
         <a 
           href="https://buymeacoffee.com/theinfinox" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="bg-yellow-400 text-primary-black px-2 py-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_#0d0d0d] hover:shadow-[3px_3px_0px_#0d0d0d] transition-all border-2 border-primary-black flex items-center gap-1.5 cursor-pointer text-xs uppercase"
         >
           <Coffee size={13} /> Buy Me a Coffee
         </a>
      </footer>
    </div>
  );
}
