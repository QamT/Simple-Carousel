let carousel = document.getElementsByClassName('carousel-imgs')[0],
    next = document.getElementById('next'),
    prev = document.getElementById('prev'),
    imgs = document.querySelectorAll('.carousel-imgs > img'),
    dots = document.getElementsByClassName('dot'),
    rightNav = document.getElementsByClassName('nav-right')[0],
    sideMenu = document.getElementById('side-menu'),
    currentImg = 0;

function nextImg() {
  currentImg++;
  if (currentImg > imgs.length - 1) {
    currentImg = 0;
  } 

  switchImg();
}

function prevImg() {
  currentImg--;
  if (currentImg < 0) {
    currentImg = imgs.length - 1;
  } 

  switchImg()
}

function switchImg() {
  carousel.style.left = `-${currentImg}00%`;

  Array.from(dots).forEach((el, i) => {
    if(i === currentImg) {
      el.classList.toggle('active');
    } else {
      el.classList.remove('active');
    }
  });
}

function toggleMenu() {
  rightNav.classList.toggle('collapsed');
}


next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);
next.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    nextImg();
  }
});
prev.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    prevImg();
  }
});
Array.from(dots).forEach((el, i) => el.addEventListener('click', () => {
  currentImg = i;
  switchImg();
}));
sideMenu.addEventListener('click', toggleMenu);
// document.addEventListener('click', (e) => {
//   if (links.classList.contains('collapsed')) {
//     toggleMenu();
//   }
// });

switchImg();


  //ask about better refactoring