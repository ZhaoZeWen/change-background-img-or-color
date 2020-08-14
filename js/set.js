var defaultColor = "#fff";
$('#set-color').colpick({
	colorScheme: 'light',
	color: 'ff8800',
	layout: 'hex',
	livePreview: false,
	flat: true,
	onChange: function (hsb, hex, rgb, el) {
		defaultColor = `#${hex}`;
		// 获取元素背景
		$('body').css('backgroundColor',defaultColor);
	},
})

// 设置关闭调色板弹窗
$(".close").click(function (e) {
	e.preventDefault();
	// 面板隐藏
	$("#set-back").hide();
});

// 基础操作面板可以移动拖拽
$(document).ready(function () {
	$(".box").bg_move({
		move: '.title',
		size: 6
	});
});

$(function () {
	cbpBGSlideshow.init();
});