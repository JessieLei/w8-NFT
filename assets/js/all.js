"use strict";

$(function () {
  console.log("Hello Bootstrap5"); // 切換漢堡選單的樣式

  $(".ham-icon").click(function () {
    $(".ham-icon i").toggleClass("fa-xmark");
  });
}); // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋

$(".row").imagesLoaded().progress(function () {
  $(".row").masonry(); // 渲染整體畫面
});
//# sourceMappingURL=all.js.map
