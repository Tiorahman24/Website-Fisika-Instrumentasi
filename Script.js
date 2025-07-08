// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.program-card').forEach(card => {
    observer.observe(card);
});

// Add dynamic hover effects to course list items
document.querySelectorAll('.course-list li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(102, 126, 234, 0.1)';
        this.style.borderRadius = '10px';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.background = 'transparent';
        this.style.borderRadius = '0';
    });
});

// Photo upload functionality
document.getElementById('photoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePhoto = document.getElementById('profilePhoto');
            const profileInitials = document.getElementById('profileInitials');
            
            profilePhoto.src = e.target.result;
            profilePhoto.style.display = 'block';
            profileInitials.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});