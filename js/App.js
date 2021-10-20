$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        }
        else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    $(function(){
        $('#fileupload').change(function(event){
            var x=URL.createObjectURL(event.target.files[0]);
            
            console.log(event);
            $('#upload-img1').attr('src',x);
       
        })
    });

    //progress bars
    $("#s1").click(function () {
        $(".fa-star").css("color","black");
          $(".star1").addClass("rating-star");
 
     });
    // $("#s1").click(function () {
    //    $(".fa-star").css("color","black");
    //      $("#s1").css({ "color": "yellow" });

    // });
    $("#s2").click(function () {
        $(".fa-star").css("color","black");
        $("#s1,#s2").css({ "color": "yellow" });

    });
    $("#s3").click(function () {
        $(".fa-star").css("color","black");
        $("#s1,#s2,#s3").css({ "color": "yellow" });

    });
    $("#s4").click(function () {
        $(".fa-star").css("color","black");
        $("#s1,#s2,#s3,#s4").css({ "color": "yellow" });

    });
    $("#s5").click(function(){
        $(".fa-star").css("color","black");
        $("#s1,#s2,#s3,#s4,#s5").css({"color":"yellow"});
    });

    $("#s6").click(function () {
        $(".fa-star").css("color","black");
        var star=$("#s6").css({ "color": "yellow" });

    });
    $("#s7").click(function () {
        $(".fa-star").css("color","black");
        $("#s7,#s6").css({ "color": "yellow" });

    });
    $("#s8").click(function () {
        $(".fa-star").css("color","black");
        $("#s6,#s7,#s8").css({ "color": "yellow" });

    });
    $("#s9").click(function () {
        $(".fa-star").css("color","black");
        $("#s6,#s7,#s8,#s9").css({ "color": "yellow" });

    });
    $("#s10").click(function(){
        $(".fa-star").css("color","black");
        $("#s6,#s7,#s8,#s9,#s10").css({"color":"yellow"});
    });
});
