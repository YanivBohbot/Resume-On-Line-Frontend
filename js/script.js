
/********function for scrolling  with scrolspy****************/


$(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top -20 }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})

//
// // Add scrollspy to <body>
// $('body').scrollspy({target: ".navbar", offset: 50});
//
// // Add smooth scrolling on all links inside the navbar
// $("#navbar a,footer a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//
//         // Prevent default anchor click behavior
//         event.preventDefault();
//
//         // Store hash
//         var hash = this.hash;
//
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800, function(){
//
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;
//         });
//
//     } // End if
//

/*************************** Contact Form  ******************************************************************************************************/

 $('#contact-form').submit(function(e) {
     
     
       e.preventDefault();
       $('.comments').empty();
       var postdata = $('#contact-form').serialize();
     

       $.ajax({
           type: 'POST',
           url: 'php/contact.php',
           data: postdata,
           dataType: 'json',
           success: function(result) {

               if(result.isSuccess)
               {
                   $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                   $('#contact-form')[0].reset();
               }
               else
               {
                   $('#firstname + .comments').html(result.firstnameError);
                   $('#name + .comments').html(result.nameError);
                   $('#email + .comments').html(result.emailError);
                   $('#phone + .comments').html(result.phoneError);
                   $('#message + .comments').html(resut.messageError);
               }
           }
       });

});




//*********************** functions  for progress skills ****************************************************************************************************/
$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_1")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text("JAVA  "+ "  " + progressed + "% ");

        if (progressed >= 85)

            clearInterval(interval);

    }, 200);

});


$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_2")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text("PYTHON  "+ "  " + progressed + "% ");

        if (progressed >= 80)

            clearInterval(interval);

    }, 200);


});


$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_3")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text(" C/C++  "+ "  " + progressed + "% ");

        if (progressed >= 80)

            clearInterval(interval);

    }, 200);


});

$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_4")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text("ElasticSearch / Kibana "+ "  " + progressed + "% ");

        if (progressed >= 70)

            clearInterval(interval);

    }, 200);


});
$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_5")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text(" Html/Css/Boostrap 4"+ "      " + progressed + "% ");

        if (progressed >= 65)

            clearInterval(interval);

    }, 200);


});
$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_6")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text("React.JS/Node.JS "+ "  " + progressed + "% ");

        if (progressed >= 50)

            clearInterval(interval);

    }, 200);

   /**************************************************************************************************************************************/
/**CArouuuusel time lapse*/
    $('.carousel').carousel({
        interval: 1900
    })





    /**************************************************************************************************************************************/


    
});














