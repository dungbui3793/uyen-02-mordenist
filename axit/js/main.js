$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });


    $(document).mouseup(function(e) {
        var container = $("#myNavbar");
        var container02 =  $("#nav-icon1");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 &&
            !container02.is(e.target) && container02.has(e.target).length === 0) {
            // container.removeClass("in");
            $('#nav-icon1').click();

        }

    });

});
