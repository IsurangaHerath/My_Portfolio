/**
 * Portfolio Website - Minimal JavaScript
 * Handles mobile menu toggle and contact form
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking a nav link
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // ========================================
    // Smooth Scrolling for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Contact Form Handler - Opens email client with pre-filled content
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Your email address
            const recipientEmail = 'navodyaisuranga10@gmail.com';
            
            // Subject line
            const subject = encodeURIComponent('Contact from Portfolio');
            
            // Body content - includes sender's name, email, and message
            const body = encodeURIComponent(
                'Hi, I would like to connect with you...\n\n' +
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n\n' +
                'Message:\n' + message
            );
            
            // Create mailto link
            const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Your email client should open with the pre-filled message. If it doesn\'t, please contact me directly at: ' + recipientEmail);
            
            // Reset form
            this.reset();
        });
    }

    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // ========================================
    // Profile Photo Interactive Zoom
    // ========================================
    const profilePhoto = document.querySelector('.profile-photo');
    
    if (profilePhoto) {
        profilePhoto.addEventListener('click', function() {
            // Toggle the 'zoomed' class on the profile photo
            this.classList.toggle('zoomed');
            
            // Toggle the 'photo-zoomed' class on the body for the overlay
            document.body.classList.toggle('photo-zoomed');
        });
        
        // Close zoom when clicking on the overlay (body)
        document.body.addEventListener('click', function(e) {
            if (document.body.classList.contains('photo-zoomed') && 
                !profilePhoto.contains(e.target)) {
                profilePhoto.classList.remove('zoomed');
                document.body.classList.remove('photo-zoomed');
            }
        });
    }
});
