$(function(){
	var array = ['screenshot_126370.png', 'screenshot_597684.png', 'screenshot_893463.png'];

	var index = parseInt(Math.random() * array.length);

	$('#parallax').css('background', 'url(backgrounds/' + array[index] + ')');
});
