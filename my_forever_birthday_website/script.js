const letter = document.getElementById('letter');
document.getElementById('openLetter').addEventListener('click', () => {
  letter.classList.add('show');
  letter.setAttribute('aria-hidden', 'false');
  letter.scrollIntoView({behavior: 'smooth', block: 'start'});
  makeHearts(18);
});
document.getElementById('closeLetter').addEventListener('click', () => {
  letter.classList.remove('show');
  letter.setAttribute('aria-hidden', 'true');
  document.getElementById('memories').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('surpriseButton').addEventListener('click', () => {
  const message = document.getElementById('surpriseMessage');
  message.innerHTML = '<strong>My Forever, 🥹❤️</strong><br>May God protect you, guide your steps, bless the work of your hands, and fill your life with genuine happiness. May your dreams grow, your worries become lighter, and your smile never lose its sparkle. You deserve beautiful things and a love that makes you feel safe, valued, and appreciated. Happy birthday, my queen! 🎂😘♥️<br><br><em>With love, Your Hubby.</em>';
  message.classList.add('show');
  makeHearts(30);
});
function makeHearts(count) {
  const symbols = ['❤️','💖','💕','💗','💘','✨'];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (18 + Math.random() * 22) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 2.5) + 's';
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 6000);
  }
}
