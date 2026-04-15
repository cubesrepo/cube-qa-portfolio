/* =============================================================
   QA ENGINEER PORTFOLIO — JAVASCRIPT (v2)
   ✏️  Edit the PROJECT_DATA object below to update project info
   ============================================================= */

/* -----------------------------------------------------------
   PROJECT DATA
   ✏️  Replace values with your actual project info.
   For videoUrl, use a YouTube embed URL:
     "https://www.youtube.com/embed/YOUR_VIDEO_ID"
   Or Vimeo:
     "https://player.vimeo.com/video/YOUR_VIDEO_ID"
   ----------------------------------------------------------- */
const PROJECT_DATA = {



  /* --- PLAYWRIGHT PROJECTS -------------------------------- */
    1: {
      tag: "Healthcare",
      title: "Cura Healthcare",
      desc: `End-to-end Playwright automation for Cura Healthcare demo site.
    Covers login, appointment booking, healthcare program selection, and confirmation validation.
    Implements Page Object Model for maintainability and reusable test components.`,
      tools: ["Python", "Playwright", "pytest", "Page Object Model", "Git", "GitHub","Allure", "CI/CD"],
      videoUrl: "https://www.youtube.com/embed/IkpGEyvYPQk"
    },

    2: {
      tag: "E-Commerce",
      title: "SauceDemo",
      desc: `Automation suite for SauceDemo e-commerce platform.
    Covers login, product listing, add-to-cart, cart validation, checkout process, and order completion.
    Focuses on validating UI elements, pricing accuracy, and user flow stability.`,
      tools: ["Python", "Playwright", "pytest", "Page Object Model", "Git", "GitHub","Allure", "CI/CD"],
      videoUrl: "https://www.youtube.com/embed/p4rXLnwCTIk"
    },

    3: {
      tag: "Booking",
      title: "Adactin Hotel Booking",
      desc: `Automated testing of Adactin hotel booking application.
    Includes login, hotel search, room selection, booking form submission, and itinerary verification.
    Designed to simulate real user booking scenarios with stable selectors and assertions.`,
      tools: ["Python", "Playwright", "pytest", "Page Object Model", "Git", "GitHub","Allure", "CI/CD"],
      videoUrl: "https://www.youtube.com/embed/vJcDDDYqNgY"
    },

        4: {
          tag: "Booking",
          title: "BlazeDemo Flight Booking",
          desc: `Automated testing of BlazeDemo flight booking application.
        Includes flight search, selection, booking form submission, and confirmation verification.
        Built using Playwright with Page Object Model for maintainability and clean test structure.`,
          tools: ["Python", "Playwright", "pytest", "Page Object Model", "Git", "GitHub", "Allure", "CI/CD"],
          videoUrl: "https://www.youtube.com/embed/R8SVLcKcRkw"
        },
   /* --- SELENIUM PROJECTS ---------------------------------- */
    5: {
          tag: "E-Commerce",
          title: "BrowserStack",
          desc: `Automation suite for BrowserStack demo mobile e-commerce application.
        Covers product browsing, filtering, add-to-cart, and checkout process.
        Focuses on validating UI behavior and ensuring smooth user purchase flow.`,
          tools: ["Python", "Selenium WebDriver", "pytest", "Page Object Model", "Git", "GitHub", "Allure", "CI/CD"],
          videoUrl: "https://www.youtube.com/embed/GksfRfnCuec"
        },

    6: {
          tag: "HRM",
          title: "OrangeHRM",
          desc: `Automated testing of OrangeHRM system covering login, dashboard access,
        employee management, and admin functionalities.
        Designed with reusable test components and structured test cases.`,
          tools: ["Python", "Selenium WebDriver", "pytest", "Page Object Model", "Git", "GitHub", "Allure", "CI/CD"],
          videoUrl: "https://www.youtube.com/embed/kd75qWoCIsM"
        },

        7: {
              tag: "E-Commerce",
              title: "AutomationExercise",
              desc: `Automation framework for AutomationExercise e-commerce platform.
            Includes user registration, login, product browsing, add-to-cart, and checkout validation.
            Designed to simulate real user journeys and ensure stability of core shopping flows.`,
              tools: ["Python", "Selenium WebDriver", "pytest", "Page Object Model", "Git", "GitHub", "Allure", "CI/CD"],
              videoUrl: "https://www.youtube.com/embed/-AitUffKZ4o"
            },

        8: {
          tag: "E-Commerce",
          title: "OpenCartAwesomeQA",
          desc: `Automation framework for OpenCartAwesomeQA gadgets e-commerce platform.
        Includes login, product search, product details, add-to-cart, and checkout validation.
        Built to simulate real-world shopping behavior and ensure stability of core user flows.`,
          tools: ["Python", "Selenium WebDriver", "pytest", "Page Object Model", "Git", "GitHub", "Allure", "CI/CD"],
          videoUrl: "https://www.youtube.com/embed/0UJ-iHmyuuQ"
        },

  /* --- API PROJECTS --------------------------------------- */
//  7: {
//    tag: "Postman · Newman · REST",
//    title: "Banking API Test Collection",
//    desc: `Postman collection covering BPI REST API endpoints: OAuth2 token generation, account balance queries,
//transaction history, and fund transfer initiation. Newman CLI integration allows the collection to run
//in CI pipelines with HTML report output. Includes environment-specific variable sets for dev/staging/prod.`,
//    tools: ["Postman", "Newman", "REST API", "OAuth2", "JSON Schema", "GitHub Actions", "HTML Reporter"],
//    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ✏️ Replace
//  },
//  8: {
//    tag: "Python · requests · pytest",
//    title: "Automated API Regression",
//    desc: `Python-based API test framework using the requests library and pytest for comprehensive REST endpoint
//validation. Covers response status codes, response body schema validation (jsonschema), header checks,
//and latency assertions. Parameterized tests cover happy paths, edge cases, and error response scenarios.`,
//    tools: ["Python", "requests", "pytest", "jsonschema", "pytest-html", "Git", "Jira"],
//    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ✏️ Replace
//  },
//  9: {
//    tag: "Charles Proxy · API Mocking · Mobile",
//    title: "Mobile API Interception Tests",
//    desc: `Charles Proxy-based testing workflow for intercepting, inspecting, and modifying HTTP/HTTPS traffic
//from the BPI Mobile App. Used to validate error-state UI behaviors by injecting custom API responses
//(4xx/5xx), testing timeout handling, and verifying that the app gracefully handles malformed payloads.`,
//    tools: ["Charles Proxy", "iOS/Android Emulator", "SSL Proxying", "Breakpoints", "Rewrite Rules", "Map Local"],
//    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"  // ✏️ Replace
//  }
};

/* -----------------------------------------------------------
   NAVIGATION — sticky + active link highlight
   ----------------------------------------------------------- */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* -----------------------------------------------------------
   MOBILE NAV TOGGLE
   ----------------------------------------------------------- */
const navToggle  = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

/* -----------------------------------------------------------
   PROJECT MODAL
   ----------------------------------------------------------- */
const backdrop   = document.getElementById('modalBackdrop');
const closeBtn   = document.getElementById('modalClose');
const modalVideo = document.getElementById('modalVideo');
const modalTag   = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc  = document.getElementById('modalDesc');
const modalTools = document.getElementById('modalTools');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id      = card.dataset.project;
    const project = PROJECT_DATA[id];
    if (!project) return;

    modalTag.textContent   = project.tag;
    modalTitle.textContent = project.title;
    modalDesc.textContent  = project.desc;
    modalVideo.src         = project.videoUrl;

    modalTools.innerHTML = project.tools
      .map(t => `<span class="modal-tool-tag">${t}</span>`)
      .join('');

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalVideo.src = ''; }, 350);
}

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* -----------------------------------------------------------
   SCROLL FADE-IN ANIMATION
   ----------------------------------------------------------- */
const animatableSelectors = [
  '.hero-left',
  '.hero-right',
  '.project-category',
  '.skills-tools-grid',
  '.cert-item',
  '.contact-grid',
  '.section-title',
  '.section-label'
];

animatableSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.classList.add('fade-up');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.fade-up')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* -----------------------------------------------------------
   SMOOTH SCROLL
   ----------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 64;
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
