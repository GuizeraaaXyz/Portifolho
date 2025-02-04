// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

function toggleMenu() {
    const header_left = document.getElementById('header-left');
    const header_center = document.getElementById('header-center');
    const header_right = document.getElementById('header-right');

    const divs = [header_center, header_right];

    divs.forEach(div => {
        if(div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

}

function ComeceAgora() {
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
}

function depoimentos() {
    document.getElementById("depoimentos").scrollIntoView({ behavior: "smooth" });
}

// FAQ Accordion

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');

    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            // Alternar a visibilidade da resposta
            const resposta = this.nextElementSibling;
            resposta.classList.toggle('active');

            // Alternar a classe 'active' na pergunta para estilizar o ícone
            this.classList.toggle('active');
        });
    });
});

