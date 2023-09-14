const button = document.getElementById('random');

button.addEventListener('mouseover', () => {
  const randomX = Math.random() * (window.innerWidth - button.clientWidth);
  const randomY = Math.random() * (window.innerHeight - button.clientHeight);

  button.style.right = `${randomX}px`;
  button.style.bottom = `${randomY}px`;
});
