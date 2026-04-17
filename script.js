// ===========================
// MENU MOBILE
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// FORMULÁRIO DE CONTATO
// ===========================

const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validação básica
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Criar mailto link
        const mailtoLink = `mailto:contato@logicodem.com?subject=Contato de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail: ${encodeURIComponent(email)}`;
        
        // Abrir cliente de email
        window.location.href = mailtoLink;
        
        // Mostrar modal de sucesso
        showSuccessModal();
        
        // Limpar formulário
        contactForm.reset();
    });
}

function showSuccessModal() {
    successModal.classList.add('show');
    
    setTimeout(() => {
        successModal.classList.remove('show');
    }, 4000);
}

// Fechar modal ao clicar fora
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('show');
    }
});

// ===========================
// ANIMAÇÕES DE SCROLL
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.project-card, .feature-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===========================
// SMOOTH SCROLL PARA LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ===========================
// CONTADOR DE ESTATÍSTICAS
// ===========================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Animar contadores quando visíveis
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const h3 = entry.target.querySelector('h3');
            const text = h3.textContent.replace(/[^0-9]/g, '');
            animateCounter(h3, parseInt(text));
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ===========================
// EFEITOS DE HOVER NOS CARDS
// ===========================

document.querySelectorAll('.project-card, .feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// ATIVA LINK ATUAL NO MENU
// ===========================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// PRELOAD DE IMAGENS
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===========================
// DARK MODE (OPCIONAL)
// ===========================

// Descomente para adicionar suporte a dark mode
/*
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode');
}

prefersDarkScheme.addEventListener('change', (e) => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
*/

// ===========================
// ANALYTICS (OPCIONAL)
// ===========================

// Adicione seu código de analytics aqui (Google Analytics, etc)

console.log('LogiCodem - Site carregado com sucesso!');
