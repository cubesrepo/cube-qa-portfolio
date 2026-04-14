/* =============================================================
   QA ENGINEER PORTFOLIO — JAVASCRIPT
   ✏️  Edit the PROJECT_DATA object below to update project info
   ============================================================= */

/* -----------------------------------------------------------
   PROJECT DATA
   ✏️  Replace the values below with your actual project info.
   For videoUrl, use a YouTube embed URL like:
     "https://www.youtube.com/embed/YOUR_VIDEO_ID"
   Or a Vimeo embed URL:
     "https://player.vimeo.com/video/YOUR_VIDEO_ID"
   ----------------------------------------------------------- */
const PROJECT_DATA = {
  1: {
    tag: "Selenium · Python · pytest",
    title: "Web App Regression Suite",
    desc: `A comprehensive end-to-end regression automation framework built with Selenium WebDriver and pytest, 
    following the Page Object Model pattern. The suite covers critical banking portal flows including fund transfers, 
    account management, and bill payments. Integrated with Jenkins for CI/CD pipeline execution and Allure for 
    detailed test reporting.`,
    tools: ["Python", "Selenium WebDriver", "pytest", "Page Object Model", "Jenkins", "Allure Reports", "Git", "GitHub"],
    // ✏️ Replace with your YouTube or Vimeo embed URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  2: {
    tag: "Selenium · pytest · Jira",
    title: "Login & Auth Flow Tests",
    desc: `Automated test suite covering all user authentication scenarios: standard login, failed login edge cases, 
    session timeout handling, two-factor authentication (2FA) flows, and device registration bypass. 
    Built with reusable fixtures and custom pytest markers for environment-specific test execution.`,
    tools: ["Python", "Selenium", "pytest", "pytest-fixtures", "Jira", "Git", "Charles Proxy"],
    // ✏️ Replace with your YouTube or Vimeo embed URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  3: {
    tag: "Playwright · Python · POM",
    title: "Mobile Banking E2E Tests",
    desc: `Playwright-based end-to-end test automation for the BPI Mobile App's investments module, covering 
    the BPI Trade feature: live stock search, stock detail screens, buy/sell CTAs, and portfolio views. 
    Implements robust selectors, network request interception, and screenshot capture on failure.`,
    tools: ["Python", "Playwright", "pytest", "Page Object Model", "Git", "GitHub Actions", "Postman"],
    // ✏️ Replace with your YouTube or Vimeo embed URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  4: {
    tag: "Playwright · pytest · CI/CD",
    title: "Registration & Onboarding Tests",
    desc: `Full onboarding flow automation covering new user registration, KYC document submission, OTP verification, 
    and first-login experience. Includes parameterized test data for different user segments and 
    cross-browser execution via GitHub Actions. Cloudflare bot-detection handled with playwright-stealth patches.`,
    tools: ["Python", "Playwright", "pytest", "playwright-stealth", "GitHub Actions", "Allure", "Jira"],
    // ✏️ Replace with your YouTube or Vimeo embed URL
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
};

/* -----------------------------------------------------------
   NAVIGATION — sticky + active link highlight
   ----------------------------------------------------------- */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Add shadow when scrolled
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Highlight active nav link based on scroll position
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
const navToggle    = document.getElementById('navToggle');
const navLinksEl   = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

// Close mobile nav on link click
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
const modal      = document.getElementById('projectModal');
const closeBtn   = document.getElementById('modalClose');
const modalVideo = document.getElementById('modalVideo');
const modalTag   = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc  = document.getElementById('modalDesc');
const modalTools = document.getElementById('modalTools');

// Open modal when a project card is clicked
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id      = card.dataset.project;
    const project = PROJECT_DATA[id];
    if (!project) return;

    // Populate modal content
    modalTag.textContent       = project.tag;
    modalTitle.textContent     = project.title;
    modalDesc.textContent      = project.desc;
    modalVideo.src             = project.videoUrl;

    // Render tool tags
    modalTools.innerHTML = project.tools
      .map(t => `<span class="modal-tool-tag">${t}</span>`)
      .join('');

    // Open with animation
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  // Stop video by clearing src after animation
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
// Add .fade-up class to all animatable elements
const animatableSelectors = [
  '.hero-content',
  '.about-grid',
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

// IntersectionObserver to trigger animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger animation for siblings
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
   SMOOTH SCROLL — for anchor links
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
