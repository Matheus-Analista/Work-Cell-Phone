// ===== TODO ANTES DE ENVIAR: troque pelo número real (formato 55DDDNUMERO, só dígitos) =====
  const WHATSAPP_NUMBER = "5561XXXXXXXXX";
  const WHATSAPP_MSG = encodeURIComponent("Oi! Vi o site da Work Cell Phone e quero um orçamento.");
  document.querySelectorAll('.wa-link').forEach(el => {
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const menuToggle = document.querySelector('.menu-toggle');
  const desktopNav = document.querySelector('.desktop-nav');
  menuToggle.addEventListener('click', () => {
    const isOpen = desktopNav.style.display === 'flex';
    desktopNav.style.cssText = isOpen ? '' : 'display:flex;position:absolute;top:100%;left:0;right:0;flex-direction:column;background:#0a0a0c;padding:20px 24px;border-bottom:1px solid var(--line);gap:16px;';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));