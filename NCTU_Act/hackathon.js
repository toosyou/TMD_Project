jQuery(document).ready(function(){
	var ActMenu = $('.Act-menu');

	if( ActMenu.length > 0 ) {
		
		ActMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
	$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'focus') {
		if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'keyup') {
      if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('active highlight');
			}
    }

});
	// Tip: avoid this ton of code using AniJS ;)

	$('.Header_login').click(function(){
		  // the animation starts
	   console.log("yo");
	  $('.form').css('display','block');
	  $('.form').toggleClass('fadeInUp Form_animated');

	  // do something when animation ends
	  $('.form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

	   // trick to execute the animation again
		$(e.target).removeClass('fadeInUp Form_animated');

	  });   
	});
	
});
