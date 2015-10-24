$(document).ready(function () {
    var ActMenu = $('.Act-menu');

    if (ActMenu.length > 0) {

        ActMenu.each(function () {
            var accordion = $(this);
            //detect change in the input[type="checkbox"] value
            accordion.on('change', 'input[type="checkbox"]', function () {
                var checkbox = $(this);
                console.log(checkbox.prop('checked'));
                ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }


});
