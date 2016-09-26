		function randomFromTo(from, to) {
		  return Math.floor(Math.random() * (to - from + 1) + from);
		}

		function moveRandom(obj) {
		  /* get container position and size
		   * -- access method : cPos.top and cPos.left */
		  var cPos = $('#container').offset();
		  var cHeight = $('#container').height();
		  var cWidth = $('#container').width();

		  // get box padding (assume all padding have same value)
		  var pad = parseInt($('#container').css('padding-top').replace('px', ''));

		  // get movable box size
		  var bHeight = obj.height();
		  var bWidth = obj.width();

		  // set maximum position
		  maxY = cPos.top + cHeight - bHeight - pad;
		  maxX = cPos.left + cWidth - bWidth - pad;

		  // set minimum position
		  minY = cPos.top + pad;
		  minX = cPos.left + pad;

		  // set new position			
		  newY = randomFromTo(minY, maxY);
		  newX = randomFromTo(minX, maxX);

		  obj.animate({
		    top: newY,
		    left: newX
		  }, 2000);
		}

		$('.piece').each(function() {
		  moveRandom($(this));
		});

		setInterval(function() {
		  $('.piece').each(function() {
		    moveRandom($(this));
		  });
		}, 3000);
$(document).ready(function() {
 (function fadeInDiv() {
     var divs = $('.piece');
     var elem = divs.eq(Math.floor(Math.random() * divs.length));
     if (!elem.is(':visible')) {
         elem.prev().remove();
         elem.animate({
             opacity: 1
         }, Math.floor(Math.random() * 2000), fadeInDiv);
     } else {

         elem.animate({
             opacity: (Math.random() * .8) + .2
         }, Math.floor(Math.random() * 2000), function () {
             elem.before('<img>');
             window.setTimeout(fadeInDiv);
             //fadeInDiv();
         });
     }
 })();});