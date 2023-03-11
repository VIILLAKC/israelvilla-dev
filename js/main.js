const aiButton = document.querySelector('#ai-button');
const aiInfo = document.querySelector('#ai-info');

aiButton.addEventListener('click', () => {
  aiInfo.classList.toggle('hidden');
  if (aiInfo.classList.contains('hidden')) {
    aiButton.innerText = 'Ver más';
    aiInfo.style.height = '0';
  } else {
    aiButton.innerText = 'Ver menos';
    aiInfo.style.height = aiInfo.scrollHeight + 'px';
  }
});


gsap.from('.section', {
  opacity: 0,
  y: 100,
  stagger: 0.3,
  duration: 1
});
