const nav = `
<header><div class="container nav">
<a href="index.html" class="brand" aria-label="Dazzlon Home"><img src="assets/dazzlon-logo.png" alt="Dazzlon" class="brand-logo" width="200" height="48"><span class="tagline">COMPLEXITY. ENGINEERED.</span></a>
<nav class="navlinks"><a href="about.html">About</a><a href="services.html">Services</a><a href="industries.html">Industries</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a></nav>
<div class="nav-actions"><span class="search"></span><a class="btn" href="contact.html">Let's Talk <span>→</span></a><button class="menu" aria-label="Open Menu" aria-expanded="false">☰</button></div>
</div></header>`;
const footer = `
<footer><div class="container"><div class="footer-grid">
<div><div class="footer-brand">DAZZLON</div><span class="tagline">COMPLEXITY. ENGINEERED.</span><p>A global technology consulting and engineering company helping organizations build a smarter, more connected tomorrow.</p><div class="social"><a href="https://www.linkedin.com/company/dazzlon-computer-services-inc/" target="_blank" rel="noopener noreferrer" aria-label="Dazzlon LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:6px;"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z"/></svg>LinkedIn</a></div></div>
<div><h4>Quick Links</h4><div class="footer-links"><a href="about.html">About</a><a href="services.html">Services</a><a href="industries.html">Industries</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a></div></div>
<div><h4>Our Services</h4><div class="footer-links"><a href="service-ai.html">AI & Machine Learning</a><a href="service-cloud.html">Cloud</a><a href="service-data.html">Data & Analytics</a><a href="service-cybersecurity.html">Cybersecurity</a><a href="service-managed.html">Managed IT</a><a href="technology-erp.html">ERP</a></div></div>
<div><h4>Contact</h4><div class="footer-links"><span><strong>Global Office:</strong><br>6951 Virginia Parkway, Ste 216<br>McKinney, TX 75071, USA</span><span style="margin-top:8px;display:block;"><strong>Branch Office:</strong><br>75 Valley Stream Parkway, Ste 120<br>Malvern, PA 19355, USA</span><a href="mailto:contact@dazzlon.com">contact@dazzlon.com</a><a href="tel:+14693337066">+1 (469) 333-7066</a></div></div>
</div><div class="footer-bottom"><span>© 2026 Dazzlon. All rights reserved.</span><span>Privacy Policy &nbsp; | &nbsp; Terms of Service &nbsp; | &nbsp; Cookie Settings</span></div></div></footer>`;
const tech = [
 {name:'AI & Machine Learning',kicker:'OUR TECHNOLOGY FOCUS',desc:'We turn data into intelligence. Our AI/ML solutions help organizations automate, predict, and innovate for a smarter tomorrow.',img:'assets/ai-ml.jpg',url:'technology-ai.html'},
 {name:'Cloud',kicker:'OUR TECHNOLOGY FOCUS',desc:'Modernize infrastructure, scale with confidence, and create flexible digital foundations through cloud services built around your business.',img:'assets/cloud.jpg',url:'technology-cloud.html'},
 {name:'Data & Analytics',kicker:'OUR TECHNOLOGY FOCUS',desc:'Transform complex data into trusted insight, stronger decisions, and measurable business value across the enterprise.',img:'assets/data-analytics.jpg',url:'technology-data.html'},
 {name:'Cybersecurity',kicker:'OUR TECHNOLOGY FOCUS',desc:'Protect systems, networks, applications, identities, and data with layered security designed for an interconnected world.',img:'assets/cybersecurity.jpg',url:'technology-cybersecurity.html'},
 {name:'Managed IT',kicker:'OUR TECHNOLOGY FOCUS',desc:'Reliable, proactive IT management that keeps your business secure, connected, and running at peak performance.',img:'assets/technology.jpg',url:'technology-managed-it.html'},
 {name:'ERP',kicker:'OUR TECHNOLOGY FOCUS',desc:'Integrated enterprise systems that streamline operations, improve visibility, and enable smarter business decisions.',img:'assets/insight-intelligent.jpg',url:'technology-erp.html'}
];
const floatingOptionsHtml = `
<aside class="floating-options-right" id="floatingOptions" aria-label="Quick Options">
  <a href="contact.html" class="float-btn talk" aria-label="Let's Talk">
    <span class="float-icon">💬</span>
    <span class="float-tooltip">Let's Talk</span>
  </a>
  <div class="float-divider"></div>
  <a href="services.html" class="float-btn" aria-label="Services">
    <span class="float-icon">▥</span>
    <span class="float-tooltip">Services</span>
  </a>
  <a href="industries.html" class="float-btn" aria-label="Industries">
    <span class="float-icon">🏢</span>
    <span class="float-tooltip">Industries</span>
  </a>
  <button class="float-btn to-top" id="scrollTopBtn" aria-label="Back to Top">
    <span class="float-icon">↑</span>
    <span class="float-tooltip">Back to Top</span>
  </button>
</aside>`;
function highlightActiveNav(){
  const page = document.body.dataset.page || '';
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.navlinks a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if(!href) return;
    let isActive = false;
    if(href === path){
      isActive = true;
    } else if(href === 'services.html' && (page === 'services' || page.startsWith('service-') || page.startsWith('technology-'))){
      isActive = true;
    } else if(href === 'industries.html' && (page === 'industries' || page.startsWith('industry-'))){
      isActive = true;
    } else if(href === 'about.html' && page === 'about'){
      isActive = true;
    } else if(href === 'careers.html' && page === 'careers'){
      isActive = true;
    } else if(href === 'contact.html' && page === 'contact'){
      isActive = true;
    }
    link.classList.toggle('active', isActive);
  });
}
function renderNavFooter(){
  const sNav = document.querySelector('#site-nav');
  const sFooter = document.querySelector('#site-footer');
  if(sNav) sNav.innerHTML = nav;
  if(sFooter) sFooter.innerHTML = footer;
  if(!document.querySelector('#floatingOptions')){
    document.body.insertAdjacentHTML('beforeend', floatingOptionsHtml);
  }
  highlightActiveNav();
}
function techSlides(){return tech.map((t,i)=>`<article class="tech-slide ${i===0?'active':''}" data-index="${i}"><div class="tech-media" style="background-image:url('${t.img}')"></div><div class="tech-overlay"></div><div class="container tech-content"><div class="tech-copy"><div class="eyebrow tech-kicker">${t.kicker}</div><h2>${t.name}</h2><p>${t.desc}</p><a class="btn light" href="${t.url}">Read More <span>→</span></a></div></div></article>`).join('')}
function initTech(){const root=document.querySelector('.tech');if(!root)return;root.querySelector('.slides').innerHTML=techSlides();root.querySelector('.tech-tabs').innerHTML=tech.map((t,i)=>`<button class="tech-tab ${i===0?'active':''}" data-to="${i}">${String(i+1).padStart(2,'0')} &nbsp; ${t.name}</button>`).join('');let idx=0,timer;const slides=[...root.querySelectorAll('.tech-slide')],tabs=[...root.querySelectorAll('.tech-tab')],counter=root.querySelector('.tech-index');function show(n){idx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===idx));tabs.forEach((b,i)=>b.classList.toggle('active',i===idx));counter.textContent=`${String(idx+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`}function reset(){clearInterval(timer);timer=setInterval(()=>show(idx+1),5000)}root.querySelector('.arrow.left').onclick=()=>{show(idx-1);reset()};root.querySelector('.arrow.right').onclick=()=>{show(idx+1);reset()};tabs.forEach(b=>b.onclick=()=>{show(Number(b.dataset.to));reset()});root.addEventListener('mouseenter',()=>clearInterval(timer));root.addEventListener('mouseleave',reset);show(0);reset()}
function initMobileMenu(){
  if(window._mobileMenuInitialized) return;
  window._mobileMenuInitialized = true;

  function closeMobileNav(){
    const navLinks = document.querySelector('.navlinks');
    const menuBtn = document.querySelector('.menu');
    if(navLinks && navLinks.classList.contains('open')){
      navLinks.classList.remove('open');
    }
    if(menuBtn){
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open Menu');
      menuBtn.textContent = '☰';
    }
  }

  // Resilient event delegation on document so clicks work regardless of when or how often navbar re-renders
  document.addEventListener('click', (e) => {
    const menuBtn = e.target.closest('.menu');
    const navLinks = document.querySelector('.navlinks');
    const clickedInsideNav = e.target.closest('.navlinks');

    if(menuBtn){
      e.preventDefault();
      e.stopPropagation();
      const willOpen = navLinks ? !navLinks.classList.contains('open') : false;
      if(navLinks) navLinks.classList.toggle('open', willOpen);
      menuBtn.classList.toggle('open', willOpen);
      menuBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', willOpen ? 'Close Menu' : 'Open Menu');
      menuBtn.textContent = willOpen ? '✕' : '☰';
      return;
    }

    if(clickedInsideNav && e.target.closest('a')){
      closeMobileNav();
      return;
    }

    if(!clickedInsideNav){
      closeMobileNav();
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      closeMobileNav();
    }
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
      closeMobileNav();
    }
  });
}
window.initMobileMenu = initMobileMenu;
window.highlightActiveNav = highlightActiveNav;
function initMotionScroll(){
  const targets = document.querySelectorAll('.section, .cards, .partner-cards, .industry-grid, .about, .impact, .cta, .page-hero, .detail-grid, .page-cards, .contact-grid, .capabilities-grid, .methodology-grid, .value-grid, .related-grid, .tech-cluster-grid, .service-intro-grid');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 60px 0px' });
    targets.forEach(el => observer.observe(el));
  } else {
    targets.forEach(el => el.classList.add('revealed'));
  }

  const floatOptions = document.getElementById('floatingOptions');
  const header = document.querySelector('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function onScroll(){
    const y = window.scrollY || (document.documentElement ? document.documentElement.scrollTop : 0);
    if (y > 220) {
      if (floatOptions) floatOptions.classList.add('visible');
      if (header) header.classList.add('scrolled');
    } else {
      if (floatOptions) floatOptions.classList.remove('visible');
      if (header) header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
document.addEventListener('DOMContentLoaded',()=>{renderNavFooter();initTech();initMobileMenu();initMotionScroll()});
initMobileMenu();
