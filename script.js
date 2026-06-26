const yearElement = document.getElementById('year');
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

if (yearElement) {
  yearElement.textContent = `© ${year} Lançamento — pronto para GitHub Pages`;
}

const heroText = document.querySelector('.hero-text');
if (heroText) {
  heroText.textContent = `Uma apresentação profissional para divulgar o lançamento do seu app devocional. Recursos exclusivos, design moderno e lançamento preparado para GitHub. Hoje é ${day}/${month}/${year}.`;
}
