
document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav-burger").classList.add("active");
  document.querySelector('body').classList.add("lock");
  document.querySelector(".header__burger").classList.add("none")

})
document.querySelector(".header__btn-close").addEventListener("click", function() {
  document.querySelector(".header__nav-burger").classList.remove("active");
  document.querySelector(".header__burger").classList.remove("none")
  document.querySelector('body').classList.remove("lock");

})

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#burger').addEventListener('click', function () {
//     document.querySelector('#menu').classList.toggle('is-active')
//   })
// })
