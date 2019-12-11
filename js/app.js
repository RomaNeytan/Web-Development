$(function(){
    // Fixed header

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffsize = $(window).scrollTop();
        CheckScroll(introH,scrolloffsize);

    $(window).on("scroll resize", function(){
        scrolloffsize = $(this).scrollTop();
        CheckScroll(introH,scrolloffsize);
    });

    function CheckScroll(introH,scrolloffset){
        if(scrolloffsize>introH){
            header.addClass("fixed");
        }

        else{
            header.removeClass("fixed");
        }
    }

    // Data Smooth

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let scrollId = $(this).data("scroll"),
            scrolloffset = $(scrollId).offset().top;

        $("#header-menu").removeClass("active");
        $("#burger").removeClass("active");

        $("html,body").animate({
            scrollTop: scrolloffset - 80
        },700);
    });

    // Burger and transform

    $("#burger").on("click", function(event){
        event.preventDefault();

        $("#header-menu").toggleClass("active");
        $(this).toggleClass("active");
    });

    // Slick Slider

    $(".team-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        fade:false,
        arrows:false,
        dots:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });

    // Filter Block

    $("[data-filter]").on("click", function(event){
        event.preventDefault();

        let currentF = $(this).data("filter");

        if(currentF == "All"){
            $("[data-cat]").removeClass("hide");
        }

        else{
            $("[data-cat]").each(function(){
                let currentC = $(this).data("cat");

                if(currentC != currentF){
                    $(this).addClass("hide");
                }
                else{
                    $(this).removeClass("hide");
                }
            });
        }
    });
});