import './styles.scss';

const refs = {
  menuBtn: document.querySelector('.btnMenu'),
  modal: document.querySelector('.modal'),
  banner: document.querySelector('.banner'),
  burgerMenuImg: document.querySelector('.burgerMenuImg'),
  closeIcon: document.querySelector('.menuCloseIcon'),
};

refs.menuBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
  refs.modal.classList.toggle('isHidden');
  refs.banner.classList.toggle('darkBg');
  refs.burgerMenuImg.classList.toggle('isHidden');
  refs.closeIcon.classList.toggle('isHidden');
}
