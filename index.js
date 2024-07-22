const dinosaur = document.querySelector('.dinosaur');
const block = document.querySelector('.block');

window.addEventListener('click', function() {
  dinosaur.classList.add('dino-jump');
  setTimeout(function() {
    dinosaur.classList.remove('dino-jump');
  }, 500);
});

setInterval(function() {
  const dinosaurBottom = parseFloat(getComputedStyle(dinosaur).getPropertyValue('bottom'));
  const blockLeft = parseFloat(getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft / 37.5 < 0.5 && blockLeft / 37.5 > -0.5 && dinosaurBottom / 37.5 <= 0.5) {
    alert("游戏结束！");
  }
}, 10);

