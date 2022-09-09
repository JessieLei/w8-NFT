"use strict";

$(function () {
  console.log("Hello Bootstrap5"); // 切換漢堡選單的樣式

  $(".ham-icon").click(function () {
    $(".ham-icon i").toggleClass("fa-xmark");
  });
}); // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋

$(".row").imagesLoaded().progress(function () {
  $(".row").masonry(); // 渲染整體畫面
}); // mobile搜尋框展開

$(".navbar-search").click(function () {
  $(".search-bar-open").toggleClass("d-none");
});
$(".search-bar-back").click(function () {
  $(".search-bar-open").toggleClass("d-none");
}); // index-swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  loop: true,
  freeMode: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: 1
    },
    992: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
//# sourceMappingURL=all.js.map
