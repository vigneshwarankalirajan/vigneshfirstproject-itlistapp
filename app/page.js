
import HeroCarousel from "../components/HeroCarousel";


export default function Home() {
  return (
    <div className="font-sans">

     <header className="w-full font-sans">
      {/* 1. TOP UTILITY BAR (Contact & Support) */}
      <div className="flex justify-end items-center space-x-6 px-10 py-2 text-[13px] text-gray-700 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <span className="text-orange-500 text-lg">🔧</span> 
          <a href="#" className="hover:underline">Support Centre</a>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-orange-500 text-lg">📧</span>
          <a href="mailto:info@bits.com" className="hover:underline">info@bits.com</a>
        </div>
        <div>Sales <span className="font-semibold text-gray-800 text-sm">0000 000 0000</span></div>
        <div>Service Desk <span className="font-semibold text-gray-800 text-sm">0000 000 0000</span></div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="flex justify-between items-center px-10 py-4 shadow-sm bg-white">
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          {/* Replace with your actual logo image path */}
          <div className="w-12 h-12 bg-[#003B5C] rounded-full flex items-center justify-center overflow-hidden">
             <span className="text-white text-[8px] text-center px-1">CITY ICON</span>
          </div>
          <div className="flex flex-col leading-tight border-l-2 border-gray-300 pl-3">
            <span className="text-3xl font-black tracking-tighter text-[#E87722]">BITS</span>
            <span className="text-[12px] font-bold text-[#003B5C] tracking-widest uppercase">
              Brisbane Information<br/>Technology Solutions
            </span>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
       <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-[14px] sm:text-[15px] font-semibold text-gray-600">
  <a href="#" className="text-[#E87722] hover:text-orange-600 transition-colors">IT Services</a>
  <a href="#" className="hover:text-[#E87722] transition-colors">Technology Solutions</a>
  <a href="#" className="hover:text-[#E87722] transition-colors">Our Specialisms</a>
  <a href="#" className="hover:text-[#E87722] transition-colors">Resource Centre</a>
  <a href="#" className="hover:text-[#E87722] transition-colors">About BITS</a>
</nav>
      </div>
    </header>
  

      {/* HERO SECTION */}
      {/* <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">SMART IT SOLUTIONS</h2>
        <p className="mb-6">Modern technology for your business</p>
        <button className="bg-orange-500 px-6 py-2 rounded">Technology Solutions</button>
      </section> */}
{/* HERO */}
<HeroCarousel />


{/* SERVICE */}
      
      <section className="py-16 bg-gray-100 text-center"> 
  
  
  <h2 className="text-3xl font-bold text-gray-800">OUR SERVICES</h2>
  <p className="text-gray-500 tracking-widest mt-2 mb-10">
    YEARS OF EXPERTISE
  </p>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">

    {/* Service 1 */}
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
        🔧
      </div>
      <h3 className="font-semibold mb-2">IT SERVICES</h3>
      <p className="text-sm text-gray-500">
        IT Support<br/>IT Consultancy<br/>IT Performance<br/>IT Projects
      </p>
    </div>

    {/* Service 2 */}
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
        ⚙️
      </div>
      <h3 className="font-semibold mb-2">TECHNOLOGY SOLUTIONS</h3>
      <p className="text-sm text-gray-500">
        Virtualisation<br/>Disaster Recovery<br/>Communications<br/>Cloud Computing
      </p>
    </div>

    {/* Service 3 */}
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
        📄
      </div>
      <h3 className="font-semibold mb-2">OUR SPECIALISMS</h3>
      <p className="text-sm text-gray-500">
        Private Equity<br/>Not for Profit<br/>Schools & Education<br/>Recruitment
      </p>
    </div>

    {/* Service 4 */}
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
        👥
      </div>
      <h3 className="font-semibold mb-2">RESOURCE CENTER</h3>
      <p className="text-sm text-gray-500">
        Blog<br/>Case Studies<br/>Testimonials<br/>Videos
      </p>
    </div>

  </div>
</section>

     <section className="bg-[#003B5C] text-white py-16 text-center">
  {/* Heading */}
  <h2 className="text-3xl font-bold tracking-widest">FEATURED WORK</h2>
  <p className="text-xs tracking-[0.3em] mb-12 opacity-80 uppercase">
    We take pride in our work
  </p>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto">
    {/* Item 1 */}
    <div className="text-left">
      <div className="overflow-hidden mb-4">
        <img src="/work1.jpg" className="w-full h-52 object-cover" alt="Work 1" />
      </div>
      <h3 className="font-bold text-lg tracking-tight">NAME TEXT</h3>
      <p className="text-sm text-cyan-400 font-medium">Technology Solutions</p>
    </div>

    {/* Item 2 */}
    <div className="text-left">
      <div className="overflow-hidden mb-4">
        <img src="/work2.jpg" className="w-full h-52 object-cover" alt="Work 2" />
      </div>
      <h3 className="font-bold text-lg tracking-tight">NAME TEXT</h3>
      <p className="text-sm text-cyan-400 font-medium">Technology Solutions</p>
    </div>

    {/* Item 3 */}
    <div className="text-left">
      <div className="overflow-hidden mb-4">
        <img src="/work3.jpg" className="w-full h-52 object-cover" alt="Work 3" />
      </div>
      <h3 className="font-bold text-lg tracking-tight">NAME TEXT</h3>
      <p className="text-sm text-cyan-400 font-medium">Technology Solutions</p>
    </div>
  </div>

  {/* Button */}
  <button className="mt-14 bg-[#E87722] hover:bg-orange-600 transition-colors px-10 py-3 text-sm font-bold uppercase tracking-wider">
    View Portfolio
  </button>
</section>
      {/* TESTIMONIAL */}
      <section className="relative py-20 text-center px-6 bg-white overflow-hidden">
  {/* 1. WORLD MAP BACKGROUND (Use a light SVG or Image) */}
  <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
     <img src="/world-map-dots.png" alt="Map Background" className="w-full h-full object-contain scale-110" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto">
    {/* 2. HEADINGS */}
    <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">WHAT OUR CLIENTS ARE SAYING</h3>
    <p className="text-xs tracking-[0.4em] text-gray-500 mt-2 mb-12 uppercase font-medium">
      DON'T JUST TAKE OUR WORD
    </p>

    {/* 3. TESTIMONIAL TEXT */}
    <div className="max-w-3xl mx-auto mb-16 relative">
      <span className="absolute -top-4 -left-6 text-gray-300 text-6xl font-serif">“</span>
      <p className="text-gray-600 leading-relaxed italic text-lg px-8">
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum. ”
      </p>
    </div>

    {/* 4. AVATAR CAROUSEL & NAVIGATION */}
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {/* Left Arrow */}
      <button className="text-gray-400 hover:text-gray-800 transition-colors text-2xl">
        &lt; 
      </button>

      {/* Avatars */}
      <div className="flex items-center gap-3 sm:gap-6">
        <img src="/user1.jpg" className="w-12 h-12 rounded-full grayscale opacity-60 border-2 border-transparent" alt="" />
        <img src="/user2.jpg" className="w-14 h-14 rounded-full grayscale opacity-60 border-2 border-transparent" alt="" />
        
        {/* Active/Large Center Avatar */}
        <div className="relative p-1 border-2 border-gray-300 rounded-full">
          <img src="/active-user.jpg" className="w-20 h-20 rounded-full border-4 border-white shadow-lg" alt="Active" />
        </div>

        <img src="/user3.jpg" className="w-14 h-14 rounded-full grayscale opacity-60 border-2 border-transparent" alt="" />
        <img src="/user4.jpg" className="w-12 h-12 rounded-full grayscale opacity-60 border-2 border-transparent" alt="" />
      </div>

      {/* Right Arrow */}
      <button className="text-gray-400 hover:text-gray-800 transition-colors text-2xl">
        &gt;
      </button>
    </div>

    {/* 5. DOT INDICATORS */}
    <div className="flex justify-center gap-2 mt-8">
      <div className="w-2 h-2 rounded-full border border-gray-400 bg-transparent"></div>
      <div className="w-2 h-2 rounded-full border border-gray-400 bg-transparent"></div>
      <div className="w-2 h-2 rounded-full bg-[#003B5C]"></div>
      <div className="w-2 h-2 rounded-full border border-gray-400 bg-transparent"></div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">WE CAN HELP BUILD YOUR PROJECT!</h3>
        <button className="border px-6 py-2">Contact Us</button>
      </section>

      <footer className="w-full bg-white pt-12">
  {/* MAIN FOOTER CONTENT */}
  <div className="max-w-7xl mx-auto px-10 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
    
    {/* 1. ADDRESS */}
    <div>
      <h4 className="text-xs font-bold tracking-widest text-gray-800 mb-6 uppercase">Address</h4>
      <address className="not-italic text-[13px] leading-relaxed text-gray-500">
        42 Morningview Lane<br />
        New York, NY 10011
      </address>
    </div>

    {/* 2. PHONE */}
    <div>
      <h4 className="text-xs font-bold tracking-widest text-gray-800 mb-6 uppercase">Phone</h4>
      <p className="text-[13px] text-gray-500">000-000-0000</p>
    </div>

    {/* 3. EMAIL */}
    <div>
      <h4 className="text-xs font-bold tracking-widest text-gray-800 mb-6 uppercase">Email</h4>
      <a href="mailto:info@bits.com" className="text-[13px] text-gray-500 hover:text-[#E87722]">
        info@bits.com
      </a>
    </div>

    {/* 4. SOCIAL MEDIA */}
    <div>
      <h4 className="text-xs font-bold tracking-widest text-gray-800 mb-6 uppercase">Follow Us On</h4>
      <div className="flex gap-2">
        {/* Replace text with Icons (Lucide or FontAwesome) */}
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs cursor-pointer hover:bg-[#E87722] transition-colors">f</div>
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs cursor-pointer hover:bg-[#E87722] transition-colors">t</div>
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs cursor-pointer hover:bg-[#E87722] transition-colors">g+</div>
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs cursor-pointer hover:bg-[#E87722] transition-colors">in</div>
      </div>
    </div>
  </div>

  {/* BOTTOM COPYRIGHT BAR */}
  <div className="bg-gray-500 py-4 text-center">
    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-200">
      © 2014 BITS All Rights Reserved. Developed by <span className="font-bold text-white">IMPRESSIVE SOLUTIONS</span>
    </p>
  </div>
</footer>

    </div>
  );
}


