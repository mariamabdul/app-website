var $win = $(window);
var $wheel = $('.wheel');
var $road = $('.road');

$win.on('scroll', function (){
	//console.log($win.scrollTop());
	$wheel.css('transform', 'rotate('+ $win.scrollTop() / 5 +'deg)')

});

$('.road-section').waypoint(function (){
	$road.addClass('js-road-animate');
}, {offset: '60%'});
