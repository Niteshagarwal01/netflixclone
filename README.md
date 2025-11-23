# Netflix Clone — Tutorial & Reference(Feature Build#1)

<img width="2816" height="1536" alt="Gemini_Generated_Image_3yl3uf3yl3uf3yl3" src="https://github.com/user-attachments/assets/05699ea9-6fa5-4d57-95f4-d2b6962caaa6" />

This is a small Netflix-style landing page clone (static frontend) that demonstrates common UI patterns: hero area, call-to-action, FAQ accordion, language dropdown, and a multi-step signup flow. The code is plain HTML/CSS/JavaScript and is designed as a learning project.

## 🚀 What you'll learn

- How to build interactive UI without frameworks (event listeners, DOM manipulation).
- Creating an FAQ accordion that allows only one open item at a time.
- Building a custom dropdown (language selector) and positioning it relative to a button.
- Handling form buttons and simple client-side navigation (signup flow).

## 🛠️ Tech Stack

- HTML5 (`index.html`)
- CSS3 (`style.css`) — responsive layout and component styles
- Plain JavaScript (`script.js`) — event-driven UI logic

## 📂 Important files

- `index.html` — Page structure, nav, hero, FAQ and footer.
- `style.css` — Styling rules, responsive breakpoints, and dropdown styles.
- `script.js` — All interactive behavior: FAQ collapse, language dropdown, button handlers, and signup step flow.

## Key UI snippets (verbatim from `script.js`)

Below are the important code snippets taken directly from `script.js`. Use them as reference or copy into your own projects.

1) FAQ accordion — allow only one active FAQ at a time:

```javascript
// FAQ dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqBoxes = document.querySelectorAll('.faqbox');
    
    faqBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // First close all other open FAQs
            faqBoxes.forEach(otherBox => {
                if (otherBox !== this && otherBox.classList.contains('active')) {
                    otherBox.classList.remove('active');
                }
            });
            
            // Toggle active class on the clicked FAQ
            this.classList.toggle('active');
        });
    });

    // ... other handlers follow (see next snippets)
```

2) Language dropdown creation and handling (creates a styled dropdown and positions it):

```javascript
    // Handle language button click
    const languageBtn = document.querySelector('nav .btn:not(.btn-red-sm)');
    if (languageBtn) {
        // Create language dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'language-dropdown';
        dropdown.style.display = 'none';
        dropdown.style.position = 'absolute';
        dropdown.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
        dropdown.style.color = 'white';
        dropdown.style.padding = '10px';
        dropdown.style.borderRadius = '4px';
        dropdown.style.marginTop = '5px';
        dropdown.style.zIndex = '100';

        // Add language options
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'hi', name: 'हिन्दी' },
            { code: 'ta', name: 'தமிழ்' },
            { code: 'te', name: 'తెలుగు' }
        ];

        languages.forEach(lang => {
            const option = document.createElement('div');
            option.textContent = lang.name;
            option.style.padding = '8px 12px';
            option.style.cursor = 'pointer';
            option.dataset.langCode = lang.code;
            
            option.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });
            
            option.addEventListener('mouseout', function() {
                this.style.backgroundColor = 'transparent';
            });
            
            option.addEventListener('click', function() {
                languageBtn.textContent = this.textContent;
                dropdown.style.display = 'none';
                // Here you could implement actual language change functionality
                document.documentElement.lang = this.dataset.langCode;
            });
            
            dropdown.appendChild(option);
        });

        document.body.appendChild(dropdown);

        languageBtn.addEventListener('click', function() {
            const btnRect = this.getBoundingClientRect();
            dropdown.style.top = (btnRect.bottom + window.scrollY) + 'px';
            dropdown.style.left = (btnRect.left + window.scrollX) + 'px';
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target !== languageBtn && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    }
```

3) Sign-in and Get Started button behaviors:

```javascript
    // Handle sign in button click
    const signInButton = document.querySelector('.btn-red-sm');
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Handle get started button click
    const getStartedButton = document.querySelector('.hero-buttons .btn-red');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            const email = document.querySelector('.hero-buttons input').value;
            if (email && email.includes('@')) {
                window.location.href = 'signup.html?email=' + encodeURIComponent(email);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    // Handle email form in FAQ section
    const emailFormButton = document.querySelector('.email-form .btn-red');
    if (emailFormButton) {
        emailFormButton.addEventListener('click', function() {
            const email = document.querySelector('.email-form input').value;
            if (email && email.includes('@')) {
                window.location.href = 'signup.html?email=' + encodeURIComponent(email);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
```

4) Signup multi-step flow (handles step buttons and transitions):

```javascript
    // For signup.html - handling the step process
    if (window.location.pathname.includes('signup.html')) {
        const stepButtons = {
            'plan-continue-btn': 'step-1',
            'registration-continue-btn': 'step-2',
            'payment-continue-btn': 'step-3',
            'start-membership-btn': 'step-4'
        };
        
        // Add event listeners to step buttons
        for (const [btnId, nextStep] of Object.entries(stepButtons)) {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // If this is the last step, go to browse page
                    if (nextStep === 'step-4') {
                        // Go to browse page after a short delay
                        setTimeout(() => {
                            window.location.href = 'browse.html';
                        }, 1000);
                    } else {
                        // Find current and next step elements
                        const currentStep = document.querySelector('.step.active');
                        const nextStepElement = document.querySelector(`.${nextStep}`);
                        
                        if (currentStep && nextStepElement) {
                            // Hide current step
                            currentStep.classList.remove('active');
                            // Show next step
                            nextStepElement.classList.add('active');
                            // Scroll to top
                            window.scrollTo(0, 0);
                        }
                    }
                });
            }
        }
    }
});
```

## How the page is structured (`index.html` highlights)

- The top `nav` contains a logo and two buttons:

```html
<nav>
    <span><img width="53" src="assets/images/logo.svg" alt=""></span>
    <div>
        <button class="btn">English</button>
        <button class="btn btn-red-sm">Sign In</button>
    </div>
</nav>
```

- The hero section includes an input and a call-to-action:

```html
<div class="hero-buttons">
    <input type="text" placeholder="Email Address">
    <button class="btn btn-red">Get Started &gt;</button>
</div>
```

The `script.js` file is included at the end of `index.html`:

```html
<script src="script.js"></script>
```

## Run locally

1. Ensure the folder structure is intact (particularly `assets/images/logo.svg` and the video/image URLs used in the HTML). The project uses external video/image URLs in `index.html` so those will load if you have internet access.
2. Open `index.html` in your browser.

In PowerShell you can open it directly with:

```powershell
Start-Process 'c:\Users\offic\Downloads\seriesprojects\netflixclone\main\index.html'
```

## Customization ideas

- Replace placeholder images and background (`assets/images/bg.jpg`) with your own artwork.
- Extend the language dropdown to actually translate text or switch localized files.
- Replace redirects (`login.html`, `signup.html`, `browse.html`) with real pages or routes.
- Improve accessibility: add ARIA attributes to FAQ buttons and keyboard handling for dropdowns.

## Notes & gotchas

- The project uses inline positioning for the language dropdown. If you move or redesign the nav, adjust the positioning logic.
- External media links (videos/images) are used in `index.html`; if you want an offline demo, replace them with local files under `assets/` and update the paths.
- Nothing in this project is server-powered; all navigation is client-side redirection (via `window.location.href`).

-----

Contributions and questions welcome — open issues or submit PRs to improve the tutorial, accessibility, or add a real signup flow.
