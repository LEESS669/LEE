// script.js

// 滾動動畫效果：當頁面滾動時，顯示景點
document.addEventListener("scroll", function () {
    const spots = document.querySelectorAll(".spot");
    spots.forEach((spot) => {
        const spotPosition = spot.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (spotPosition < screenPosition) {
            spot.classList.add("visible");
        }
    });
});

// 表單提交的簡單提示
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("感謝您的留言，我們會盡快回覆您！");
});
