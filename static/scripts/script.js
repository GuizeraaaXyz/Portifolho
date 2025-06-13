window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const main = document.querySelector("main");

  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      main.style.display = "block";
    }, 800); // esperar o fade-out terminar
  }, 1500); // tempo que a intro aparece (em ms)
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggleIcon = item.querySelector(".toggle-icon");

    question.addEventListener("click", () => {
      // Fecha todas as outras respostas
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = "0";
          otherItem.querySelector(".toggle-icon").textContent = "+";
        }
      });

      // Alterna o item atual
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        toggleIcon.textContent = "-";
      } else {
        answer.style.maxHeight = "0";
        toggleIcon.textContent = "+";
      }
    });
  });
});

// Validação do Formulário
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos!');
    }
    
    // Validação básica de e-mail
    if (email && !email.includes('@')) {
        e.preventDefault();
        alert('Por favor, insira um e-mail válido!');
    }
});