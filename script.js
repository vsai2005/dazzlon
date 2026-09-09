const nav = `
<header><div class="container nav">
<a href="index.html" class="brand" aria-label="Dazzlon Home"><img src="assets/dazzlon-logo.png" alt="Dazzlon" class="brand-logo" width="159" height="38"><span class="tagline">COMPLEXITY. ENGINEERED.</span></a>
<nav class="navlinks"><a href="about.html">About</a><a href="services.html">Services</a><a href="industries.html">Industries</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a></nav>
<div class="nav-actions"><span class="search"></span><a class="btn" href="contact.html">Let's Talk <span>→</span></a><button class="menu" aria-label="Menu">☰</button></div>
</div></header>`;
const footer = `
<footer><div class="container"><div class="footer-grid">
<div><div class="footer-brand">DAZZLON</div><span class="tagline">COMPLEXITY. ENGINEERED.</span><p>A global technology consulting and engineering company helping organizations build a smarter, more connected tomorrow.</p><div class="social"><a href="#">in</a><a href="#">X</a><a href="#">▶</a><a href="#">◎</a></div></div>
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
function renderNavFooter(){
  const sNav = document.querySelector('#site-nav');
  const sFooter = document.querySelector('#site-footer');
  if(sNav) sNav.innerHTML = nav;
  if(sFooter) sFooter.innerHTML = footer;
  if(!document.querySelector('#floatingOptions')){
    document.body.insertAdjacentHTML('beforeend', floatingOptionsHtml);
  }
}
function techSlides(){return tech.map((t,i)=>`<article class="tech-slide ${i===0?'active':''}" data-index="${i}"><div class="tech-media" style="background-image:url('${t.img}')"></div><div class="tech-overlay"></div><div class="container tech-content"><div class="tech-copy"><div class="eyebrow tech-kicker">${t.kicker}</div><h2>${t.name}</h2><p>${t.desc}</p><a class="btn light" href="${t.url}">Read More <span>→</span></a></div></div></article>`).join('')}
function initTech(){const root=document.querySelector('.tech');if(!root)return;root.querySelector('.slides').innerHTML=techSlides();root.querySelector('.tech-tabs').innerHTML=tech.map((t,i)=>`<button class="tech-tab ${i===0?'active':''}" data-to="${i}">${String(i+1).padStart(2,'0')} &nbsp; ${t.name}</button>`).join('');let idx=0,timer;const slides=[...root.querySelectorAll('.tech-slide')],tabs=[...root.querySelectorAll('.tech-tab')],counter=root.querySelector('.tech-index');function show(n){idx=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===idx));tabs.forEach((b,i)=>b.classList.toggle('active',i===idx));counter.textContent=`${String(idx+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`}function reset(){clearInterval(timer);timer=setInterval(()=>show(idx+1),5000)}root.querySelector('.arrow.left').onclick=()=>{show(idx-1);reset()};root.querySelector('.arrow.right').onclick=()=>{show(idx+1);reset()};tabs.forEach(b=>b.onclick=()=>{show(Number(b.dataset.to));reset()});root.addEventListener('mouseenter',()=>clearInterval(timer));root.addEventListener('mouseleave',reset);show(0);reset()}
function initMobileMenu(){const b=document.querySelector('.menu');if(!b)return;b.addEventListener('click',()=>{const n=document.querySelector('.navlinks');if(n) n.classList.toggle('open')})}
function initMotionScroll(){
  const targets = document.querySelectorAll('.section, .cards, .partner-cards, .industry-grid, .about, .impact, .cta, .page-hero, .detail-grid, .page-cards, .contact-grid');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
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
