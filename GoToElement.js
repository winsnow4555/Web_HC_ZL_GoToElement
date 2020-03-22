$("*").each(function () {
    $(this).click(function () { 
        // 目標屬性
        var target = $(this).attr("data-goto-target");

        // 如果 目標屬性 不等於 未定義資料
        if (target != undefined){
            // 時間屬性
            var duration = $(this).attr("data-goto-duration");
            //上方位子
            var top = $(target).offset().top;
            // 先停止所有動畫 再執行動畫({捲動上方：上方位置}，時間)
            $("html, body").stop().animate({scrollTop: top}, parseInt(duration));
                    
            // console.log("目標元素：" + target);
            // console.log("時間：" + duration);
        }
    });
});

// 當捲動滾輪時停止動畫
// jqon 事件：mousewheel 滑鼠滾動
$(window).on("mousewheel", function () {
    $("*").each(function () { 
        $(this).stop();
    });
});