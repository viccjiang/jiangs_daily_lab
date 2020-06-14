// 網頁的主程式寫在這裡
// 啟動wow.js
new WOW().init();
// 綁定.ad-toggle-btn的點擊事件
$(".ad-toggle-btn").click(function () {
    // 當.ad-toggle-btn點擊後要做的事...
    // console.log("廣告按鈕被點了!");
    // 讓class="ad-box"切換active
    $(".ad-box").toggleClass("active");
    // $(".ad-box").css("color", "red");
});



// 綁定.navbar .nav-link 跟 #goBackBtn 的點擊事件
$(".navbar .nav-link, #goBackBtn").click(function () {
    console.log("點到了導覽列的按鈕");
    // 取得當下被點擊的按鈕
    console.log(this);
    // 取得滑動目標
    // 取得這個按鈕href的值存到變數target內
    // var 變數名稱 
    // 創建(宣告)一個變數
    var target = $(this).attr("href");
    console.log("移動目標:", target);
    // intro => #introSection
    // features => #featuresSection
    // 取得滑動目標的座標
    // 物件.屬性
    var position = $(target).offset().top;
    console.log("移動座標:", position);
    // 設定時間(毫秒)
    var duration = 500;
    // 取得導覽列高度
    var navbarHeight = $(".navbar").outerHeight();
    console.log("導覽列高度:", navbarHeight);
    // 先停止再執行動畫
    // .animate(物件{}, 時間)
    // 物件 => {屬性A: "值A", 屬性B: 1000}
    $("html,body").stop().animate({
        scrollTop: position - navbarHeight
    }, duration);
});

