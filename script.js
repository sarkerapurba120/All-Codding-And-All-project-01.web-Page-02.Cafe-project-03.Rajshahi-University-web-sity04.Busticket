// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`ধন্যবাদ! ${email} ঠিকানায় আমাদের নিউজলেটার সাবস্ক্রাইব করার জন্য।`);
    this.reset();
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
    this.reset();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (for future implementation)
function toggleMobileMenu() {
    const nav = document.querySelector('header nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Add Bengali Font
const link = document.createElement('link');
link.href = 'https://fonts.maateen.me/solaiman-lipi/font.css';
link.rel = 'stylesheet';
document.head.appendChild(link);