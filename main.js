const menuBtn = document.querySelector('#togglebar');
console.log(menuBtn);
const navLinks = document.querySelector('.flex-ul');
console.log(navLinks);

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  let menuBtnIcon = document.querySelector('#togglebar i');

  if (navLinks.classList.contains('open')) {
    menuBtnIcon.classList.remove('fa-bars');
    menuBtnIcon.classList.add('fa-times');
  } else {
    menuBtnIcon.classList.remove('fa-times');
    menuBtnIcon.classList.add('fa-bars');
  }
});
