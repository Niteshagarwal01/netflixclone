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