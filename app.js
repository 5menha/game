// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
        color: { value: '#6a11cb' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Modal Functions
function showDownloadModal() {
    document.getElementById('downloadModal').style.display = 'flex';
    gtag('event', 'modal_opened', {
        'event_category': 'engagement',
        'event_label': 'download_modal'
    });
}

function hideModal() {
    const modal = document.getElementById('downloadModal');
    const btn = modal.querySelector('.download-btn');
    
    // إعادة تعيين حالة الزر
    btn.innerHTML = `متابعة <i class="fas fa-check"></i>`;
    btn.disabled = false;
    
    modal.style.display = 'none';
}

function startDownload() {
    const btn = document.querySelector('#downloadModal .download-btn');
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> جاري التحميل...`;
    btn.disabled = true;
    
    gtag('event', 'download_started', {
        'event_category': 'engagement',
        'event_label': 'apk_download'
    });
    
    setTimeout(() => {
        // إعادة التعيين قبل التوجيه
        hideModal();
        window.location.href = 'https://github.com/Joe2G/5menha/releases/download/v1.0.0/5menha.apk';
    }, 1000);
}
// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('downloadModal');
    if (event.target === modal) {
        hideModal();
    }
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.info-section').forEach((el) => observer.observe(el));
