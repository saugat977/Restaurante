$(document).ready(function () {
    //displaying tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //displaying login modal
    $('#loginBtn').click( function () {
        $('#loginModal').modal();
    });

    // displaying reserve table modal
    $('#reserveBtn').click( function () {
        $('#reserveModal').modal();
    });
    
    // closing modal
    $('.closeModal').click( function () {
        $('.modal').modal('hide');
    })

    // carousel
    $('#mycarousel').carousel({interval:2000})
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
   
});

       
       
