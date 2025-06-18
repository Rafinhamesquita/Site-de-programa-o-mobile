document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('header nav a');
  const sections = document.querySelectorAll('section');

  // Suavizar clique nos links do menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      // Pequeno atraso para permitir fluidez da animação
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    });
  });

  // Atualizar destaque no menu conforme a rolagem
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150; // ativa antes de chegar ao topo
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        const currentId = section.getAttribute('id');
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
