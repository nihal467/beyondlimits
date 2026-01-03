// Translation system with external JSON files
let translations = {};
let currentLang = 'en'; // Default to English

// Load translation file
async function loadTranslation(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load ${lang}.json`);
        }
        const data = await response.json();
        translations[lang] = data;
        return data;
    } catch (error) {
        console.error(`Error loading translation for ${lang}:`, error);
        // Fallback to English if translation fails
        if (lang !== 'en') {
            return loadTranslation('en');
        }
        return null;
    }
}

// Set language and update UI
async function setLanguage(lang) {
    console.log('Setting language to:', lang);
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Load translation if not already loaded
    if (!translations[lang]) {
        console.log('Loading translation for:', lang);
        await loadTranslation(lang);
    }
    
    console.log('Available translations:', Object.keys(translations));
    console.log('Current translation data:', translations[lang]);
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Found', elements.length, 'elements to translate');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation?.[k];
        }
        
        if (translation) {
            element.textContent = translation;
        } else {
            console.warn('Missing translation for key:', key);
        }
    });
    
    // Update dropdown selected value
    const dropdown = document.getElementById('languageSelect');
    if (dropdown) {
        dropdown.value = lang;
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    console.log('Language set successfully to:', lang);
}

// Initialize language system on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Load all translations
    await Promise.all([
        loadTranslation('en'),
        loadTranslation('hi'),
        loadTranslation('ta'),
        loadTranslation('ml')
    ]);
    
    // Check if user has a saved preference, otherwise default to English
    const savedLang = localStorage.getItem('preferredLanguage');
    currentLang = savedLang || 'en';
    
    // Set initial language
    await setLanguage(currentLang);
    
    // Add change listener to dropdown
    const dropdown = document.getElementById('languageSelect');
    console.log('Dropdown element:', dropdown);
    if (dropdown) {
        dropdown.addEventListener('change', async (e) => {
            console.log('Dropdown changed!');
            console.log('Language changed to:', e.target.value);
            await setLanguage(e.target.value);
        });
        console.log('Dropdown listener attached successfully');
    } else {
        console.error('Language dropdown not found!');
    }
});

// Mobile Menu Toggle (needs to wait for DOM)
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Smooth scroll enhancement (optional - already handled by CSS, but adds offset for sticky nav)
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }
        
        lastScroll = currentScroll;
    });
});
