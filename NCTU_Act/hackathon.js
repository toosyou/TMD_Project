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
		  label.toggleClass('active highlight');
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
	
//Form animation
// Tip: avoid this ton of code using AniJS ;)

$('.Header_login_btn').click(function(){
	  // the animation starts
   console.log("yo");
  $('.Form_content').css('display', 'block');
  $('.Form_content').toggleClass('.is-visible');
  $('.form').css('display','block');
  $('.form').toggleClass('fadeInUp Form_animated');

  // do something when animation ends
  $('.form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   // trick to execute the animation again
	$(e.target).removeClass('fadeInUp Form_animated');

  });   
});
$('.Up_date').click(function(){
	  // the animation starts
   console.log("yo");
  $('.Up_content').css('display', 'block');
  $('.Up_content').toggleClass('.is-visible');
  $('.form').css('display','block');
  $('.form').toggleClass('fadeInUp Form_animated');

  // do something when animation ends
  $('.form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   // trick to execute the animation again
	$(e.target).removeClass('fadeInUp Form_animated');

  });   
});
$('.Form_close').click(function(){
	$('.Form_content').css('display','none');
	$('.Up_content').css('display','none');
});
	
	
	
	
$('.Form_close').click(function(){
	$('.Form_content').css('display','none');
	$('.Up_content').css('display','none');
});	
	
	
	
	
	/*--------  Show Info   ----------*/
$('.Box_info').click(function(){
	  // the animation starts
   console.log("yo");
  $('.Show_contain').css('display', 'block');
  $('.Show_contain').toggleClass('.is-visible');
  });   
});
var element = $('.Show_des');

// when mouseover execute the animation
element.mouseover(function(){
  
  // the animation starts
  element.addClass('fadeInRight Show_animated');
  
  // do something when animation ends
  element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
   
   // trick to execute the animation again
  });
  
});	
	
$('.fa-times').click(function(){
	$('.Show_contain').css('display','none');
});	

$('.Act-menu').click(function(){
	$('.Loading_contain').css('display','block');
	$('.Loading_contain').addClass('is-visible');
		var explode = function(){
		  $('.Loading_contain').removeClass('.is-visible');
		  $('.Loading_contain').css('display','none');
		};
		setTimeout(explode, 3000);
});	
