/* ===== STICKY HEADER ===== */
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 60);
});

/* ===== MENU OPEN/CLOSE WITH OVERLAY ===== */
const menuCheck  = document.getElementById('label-check');
const navOverlay = document.getElementById('navOverlay');

function closeMenu() {
    menuCheck.checked = false;
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuCheck.addEventListener('change', function () {
    if (this.checked) {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        closeMenu();
    }
});

// Close on overlay click
navOverlay.addEventListener('click', closeMenu);

// Close when a nav link is clicked
document.querySelectorAll('.navigation a').forEach(a => {
    a.addEventListener('click', closeMenu);
});

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navigation a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ===== TYPING ANIMATION ===== */
const typingEl = document.querySelector('.typing-text');
const rolesEN = ['Frontend Developer', 'UI/UX Enthusiast', 'Coding Instructor', 'React Developer'];
const rolesAR = ['مطوّر واجهات أمامية', 'مدرّب برمجة', 'مطوّر React', 'مصمم تجربة المستخدم'];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeRole() {
    const isAR = document.body.classList.contains('rtl');
    const roles = isAR ? rolesAR : rolesEN;
    const current = roles[roleIndex];
    if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex--);
    } else {
        typingEl.textContent = current.substring(0, charIndex++);
    }
    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }
    setTimeout(typeRole, speed);
}
typeRole();


const translations = {
    en: {
        'nav-home':'Home','nav-about':'About','nav-services':'Services','nav-projects':'Projects','nav-contact':'Contact',
        'hero-hello':'Hello, I\'m','hero-name':'MHD Zyad AL-Ftyan','hero-role-prefix':'And I\'m a','hero-role':'Frontend Developer',
        'hero-desc':'I specialize in building high-performance, responsive, and visually stunning web applications. With a focus on clean code and user-centric design, I help turn complex ideas into seamless digital experiences.',
        'btn-download-cv':'Download CV',
        'about-title-prefix':'About','about-title-span':'Me','about-subtitle':'Frontend Developer & Coding Instructor',
        'about-desc1':'I am a passionate Frontend Developer with over 3 years of experience in creating modern web interfaces. My journey started with a curiosity for how things work on the web, which evolved into a career dedicated to crafting exceptional user experiences.',
        'about-desc2':'Beyond coding, I am a Coding Instructor, sharing my knowledge with aspiring developers. I believe that teaching is the best way to master a craft, and I\'m dedicated to helping the next generation of coders succeed.',
        'btn-talk':'Let\'s Talk',
        'services-title-prefix':'What','services-title-span':'I Offer',
        'services-subtitle':'Professional front-end development & coding mentorship services',
        'service1-title':'Interactive Front-end','service1-desc':'Fully responsive, fast, modern websites built with HTML5, CSS3, JavaScript — pixel-perfect, cross-browser.',
        'service2-title':'1-on-1 Coding Tutoring','service2-desc':'Private sessions: from zero to real projects. Personalized roadmap, hands-on exercises & feedback.',
        'service3-title':'Code Review & Refactor','service3-desc':'Deep analysis of codebase, identifying bugs, performance issues, clean & maintainable solutions.',
        'service4-title':'Design to Code','service4-desc':'Convert Figma, PSD, XD into accurate, responsive, production-ready HTML/CSS/JS.',
        'service5-title':'Group Workshops','service5-desc':'Live intensive workshops covering React, Tailwind, Git, REST APIs, modern front-end tools.',
        'service6-title':'Performance Optimization','service6-desc':'Boost speed, achieve 90+ Lighthouse scores, improve Core Web Vitals for SEO & UX.',
        'service-request':'Request service',
        'projects-title-prefix':'Latest','projects-title-span':'Projects',
        'projects-subtitle':'Some of my front-end work — real-world apps and interactive designs',
        'project1-title':'Weather API App','project1-desc':'Real-time weather app using OpenWeather API. Shows forecasts, humidity, wind speed.',
        'project2-title':'FlowPath','project2-desc':'An intuitive project and task management application with smooth workflow features.',
        'project3-title':'Code Academy','project3-desc':'Arabic-first interactive platform teaching kids programming via courses, projects, and games.',
        'project4-title':'Training Center Management','project4-desc':'Full dashboard to manage institutes, courses, trainers, students, registrations and payments.',
        'project-live':'Live Demo',
        'contact-title-prefix':'Get In','contact-title-span':'Touch',
        'contact-subtitle':'Let\'s talk directly on WhatsApp — quick, easy, and personal.',
        'contact-phone':'Phone (Call)','contact-email':'Email',
        'whatsapp-card-title':'Chat with me directly',
        'whatsapp-card-desc':'Click the button below to start a conversation on WhatsApp. I usually reply within a few hours.',
        'whatsapp-btn-text':'Send WhatsApp Message',
        'whatsapp-qr-text':'👉 Or scan this QR code to chat instantly',
        'footer-copy':'Copyright © 2025 by Zyad | All Rights Reserved.'
    },
    ar: {
        'nav-home':'الرئيسية','nav-about':'عني','nav-services':'خدماتي','nav-projects':'مشاريعي','nav-contact':'تواصل',
        'hero-hello':'مرحباً، أنا','hero-name':'محمد زياد الفتيان','hero-role-prefix':'وأنا','hero-role':'مطوّر واجهات أمامية',
        'hero-desc':'متخصص في بناء تطبيقات ويب عالية الأداء وسريعة الاستجابة وجذابة بصرياً. أركّز على الكود النظيف والتصميم المحوري للمستخدم لتحويل الأفكار المعقدة إلى تجارب رقمية سلسة.',
        'btn-download-cv':'تحميل السيرة الذاتية',
        'about-title-prefix':'نبذة','about-title-span':'عني','about-subtitle':'مطوّر واجهات أمامية ومدرّب برمجة',
        'about-desc1':'أنا مطوّر واجهات أمامية شغوف بخبرة تزيد على 3 سنوات في إنشاء واجهات ويب حديثة. بدأت رحلتي بفضول لمعرفة كيفية عمل الويب، ثم تطوّر ذلك إلى مسيرة مهنية مكرّسة لصنع تجارب مستخدم استثنائية.',
        'about-desc2':'بالإضافة إلى البرمجة، أعمل مدرّباً للبرمجة، أشارك معرفتي مع المطورين الطموحين. أؤمن أن التدريس هو أفضل طريقة لإتقان الحرفة، وأنا ملتزم بمساعدة الجيل القادم من المبرمجين على النجاح.',
        'btn-talk':'لنتحدث',
        'services-title-prefix':'ما','services-title-span':'أقدّمه',
        'services-subtitle':'خدمات تطوير واجهات أمامية احترافية وإرشاد برمجي',
        'service1-title':'واجهات تفاعلية','service1-desc':'مواقع ويب متجاوبة وسريعة وحديثة مبنية بـ HTML5 وCSS3 وJavaScript.',
        'service2-title':'تدريس برمجة فردي','service2-desc':'جلسات خاصة: من الصفر إلى مشاريع حقيقية. خارطة طريق مخصصة وتمارين عملية.',
        'service3-title':'مراجعة وإعادة هيكلة الكود','service3-desc':'تحليل عميق للكود، تحديد الأخطاء ومشكلات الأداء وتقديم حلول نظيفة وقابلة للصيانة.',
        'service4-title':'تحويل التصميم إلى كود','service4-desc':'تحويل تصاميم Figma وPSD وXD إلى HTML/CSS/JS دقيق ومتجاوب وجاهز للإنتاج.',
        'service5-title':'ورش عمل جماعية','service5-desc':'ورش عمل مكثفة تغطي React وTailwind وGit وREST APIs وأدوات الواجهة الأمامية الحديثة.',
        'service6-title':'تحسين الأداء','service6-desc':'تعزيز السرعة والحصول على درجات 90+ في Lighthouse وتحسين Core Web Vitals.',
        'service-request':'طلب الخدمة',
        'projects-title-prefix':'أحدث','projects-title-span':'مشاريعي',
        'projects-subtitle':'بعض أعمالي في واجهات الويب — تطبيقات حقيقية وتصاميم تفاعلية',
        'project1-title':'تطبيق الطقس','project1-desc':'تطبيق طقس في الوقت الفعلي باستخدام OpenWeather API يعرض التوقعات والرطوبة وسرعة الرياح.',
        'project2-title':'FlowPath','project2-desc':'تطبيق إدارة مشاريع ومهام بديهي مع ميزات سير عمل سلسة.',
        'project3-title':'أكاديمية الكود','project3-desc':'منصة تعليمية تفاعلية باللغة العربية لتعليم الأطفال البرمجة.',
        'project4-title':'إدارة مركز التدريب','project4-desc':'لوحة تحكم متكاملة لإدارة المعاهد والدورات والمدربين والطلاب والمدفوعات.',
        'project-live':'عرض مباشر',
        'contact-title-prefix':'تواصل','contact-title-span':'معي',
        'contact-subtitle':'تحدّث معي مباشرة عبر واتساب — سريع وسهل وشخصي.',
        'contact-phone':'هاتف (اتصال)','contact-email':'البريد الإلكتروني',
        'whatsapp-card-title':'تحدّث معي مباشرة',
        'whatsapp-card-desc':'اضغط الزر أدناه لبدء محادثة على واتساب. أردّ عادةً في غضون ساعات قليلة.',
        'whatsapp-btn-text':'إرسال رسالة واتساب',
        'whatsapp-qr-text':'👉 أو امسح رمز QR للدردشة فوراً',
        'footer-copy':'حقوق النشر © 2025 بواسطة زياد | جميع الحقوق محفوظة.'
    }
};

const langToggle = document.getElementById('lang-checkbox');
langToggle.addEventListener('change', function() {
    const lang = this.checked ? 'ar' : 'en';
    document.body.classList.toggle('rtl', this.checked);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
});