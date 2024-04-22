
$(document).ready(function(){
    $('.pros__img').on('mouseover', function(){
        var info = $(this).attr('pros__info');
        $('.pros__info').text(info);
        $('.pros__info').fadeIn();
    });

    $('.pros__info, .pros__info-3').on('mouseleave', function(){
        $('.pros__info, .pros__info-3').fadeOut();
    });

    $('.pros__img-2').on('mouseover', function(){
        var info = $(this).attr('pros__info-2');
        $('.pros__info-2').text(info);
        $('.pros__info-2').fadeIn();
    });

    $('.pros__info-2').on('mouseleave', function(){
        $('.pros__info-2').fadeOut();
    });

    $('.pros__img-3').on('mouseover', function(){
        var info = $(this).attr('pros__info-3');
        $('.pros__info-3').text(info);
        $('.pros__info-3').fadeIn();
    });

    $('.pros__info-3').on('mouseleave', function(){
        $('.pros__info-3').fadeOut().css("opacity", "1");
    });

    $('.pros__img-4').on('mouseover', function(){
        var info = $(this).attr('pros__info-4');
        $('.pros__info-4').text(info);
        $('.pros__info-4').fadeIn();
    });
    $('.pros__info-4').on('mouseleave', function(){
        $('.pros__info-4').fadeOut().css("opacity", "1");
    });

    $('.pros__img-5').on('mouseover', function(){
        var info = $(this).attr('pros__info-5');
        $('.pros__info-5').text(info);
        $('.pros__info-5').fadeIn();
    });
    $('.pros__info-5').on('mouseleave', function(){
        $('.pros__info-5').fadeOut().css("opacity", "1");
    });

    $('.pros__img-6').on('mouseover', function(){
        var info = $(this).attr('pros__info-6');
        $('.pros__info-6').text(info);
        $('.pros__info-6').fadeIn();
    });
    $('.pros__info-6').on('mouseleave', function(){
        $('.pros__info-6').fadeOut().css("opacity", "1");
    });

    $('.pros__img-7').on('mouseover', function(){
        var info = $(this).attr('pros__info-7');
        $('.pros__info-7').text(info);
        $('.pros__info-7').fadeIn();
    });
    $('.pros__info-7').on('mouseleave', function(){
        $('.pros__info-7').fadeOut().css("opacity", "1");
    });

    $('.pros__img-8').on('mouseover', function(){
        var info = $(this).attr('pros__info-8');
        $('.pros__info-8').text(info);
        $('.pros__info-8').fadeIn();
    });
    $('.pros__info-8').on('mouseleave', function(){
        $('.pros__info-8').fadeOut().css("opacity", "1");
    });

    $('.pros__img-9').on('mouseover', function(){
        var info = $(this).attr('pros__info-9');
        $('.pros__info-9').text(info);
        $('.pros__info-9').fadeIn();
    });
    $('.pros__info-9').on('mouseleave', function(){
        $('.pros__info-9').fadeOut().css("opacity", "1");
    });

    $('.pros__img-10').on('mouseover', function(){
        var info = $(this).attr('pros__info-10');
        $('.pros__info-10').text(info);
        $('.pros__info-10').fadeIn();
    });
    $('.pros__info-10').on('mouseleave', function(){
        $('.pros__info-10').fadeOut().css("opacity", "1");
    });

    $('.pros__img-11').on('mouseover', function(){
        var info = $(this).attr('pros__info-11');
        $('.pros__info-11').text(info);
        $('.pros__info-11').fadeIn();
    });
    $('.pros__info-11').on('mouseleave', function(){
        $('.pros__info-11').fadeOut().css("opacity", "1");
    });

    $('.pros__img-12').on('mouseover', function(){
        var info = $(this).attr('pros__info-12');
        $('.pros__info-12').text(info);
        $('.pros__info-12').fadeIn();
    });
    $('.pros__info-12').on('mouseleave', function(){
        $('.pros__info-12').fadeOut().css("opacity", "1");
    });

    $('.pros__img-13').on('mouseover', function(){
        var info = $(this).attr('pros__info-13');
        $('.pros__info-13').text(info);
        $('.pros__info-13').fadeIn();
    });
    $('.pros__info-13').on('mouseleave', function(){
        $('.pros__info-13').fadeOut().css("opacity", "1");
    });

    $('.pros__img-14').on('mouseover', function(){
        var info = $(this).attr('pros__info-14');
        $('.pros__info-14').text(info);
        $('.pros__info-14').fadeIn();
    });
    $('.pros__info-14').on('mouseleave', function(){
        $('.pros__info-14').fadeOut().css("opacity", "1");
    });

    $('.pros__img-15').on('mouseover', function(){
        var info = $(this).attr('pros__info-15');
        $('.pros__info-15').text(info);
        $('.pros__info-15').fadeIn();
    });
    $('.pros__info-15').on('mouseleave', function(){
        $('.pros__info-15').fadeOut().css("opacity", "1");
    });

    $('.pros__img-16').on('mouseover', function(){
        var info = $(this).attr('pros__info-10');
        $('.pros__info-16').text(info);
        $('.pros__info-16').fadeIn();
    });
    $('.pros__info-16').on('mouseleave', function(){
        $('.pros__info-16').fadeOut().css("opacity", "1");
    });

    $('.pros__img-17').on('mouseover', function(){
        var info = $(this).attr('pros__info-17');
        $('.pros__info-17').text(info);
        $('.pros__info-17').fadeIn();
    });
    $('.pros__info-17').on('mouseleave', function(){
        $('.pros__info-17').fadeOut().css("opacity", "1");
    });

    $('.pros__img-18').on('mouseover', function(){
        var info = $(this).attr('pros__info-18');
        $('.pros__info-18').text(info);
        $('.pros__info-18').fadeIn();
    });
    $('.pros__info-18').on('mouseleave', function(){
        $('.pros__info-18').fadeOut().css("opacity", "1");
    });

    $('.pros__img-19').on('mouseover', function(){
        var info = $(this).attr('pros__info-19');
        $('.pros__info-19').text(info);
        $('.pros__info-19').fadeIn();
    });
    $('.pros__info-19').on('mouseleave', function(){
        $('.pros__info-19').fadeOut().css("opacity", "1");
    });

    $(".pros__button").click(function() {
        $(".pros__opacity-first , .pros__opacity-second, .pros__opacity-third" ).css ('opacity', '1')
            $('.pros__hiden').toggle()
    });

    $('.info__left-consultation').on('click', function(){
        $('.modal').fadeIn(1400)
    });
    $('.modal__close').on('click', function(){
        $('.modal') .fadeOut(600)
    })
    $("#phone").mask("+7(999) 999-9999"); 

    $('.systems__carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        // prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 796,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            }
          }
        ]
    });

    $('.products__wrapper').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        // prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false
                }
              },
          
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            }
          }
        ]
    });

    $('.header__hamburger').on('click', function(){
        $(this).fadeOut();
        $('.header__close').css('display', 'block')
        $(".menu__active").fadeIn();                
    });
    $('.header__close').click(function() {
        $('.header__hamburger').fadeIn()
        $('.header__close').css('display', 'none')
        $('.menu__active').fadeOut()
    });
    function valideForms(form){
        $(form).validate({
            rules:{
                name:'required',
                phone:'required',
                email:{
                    required: true,
                    email: true,
                }
            },
            messages: {
                name:"Пожалуйста, введите имя",
                phone:"Пожалуйста, введите свой телефон",
                email:{
                    required: "Пожалуйста, введите email",
                    email:"Неправильно введен адрес",
                }
            }
        });
    };

    valideForms('#connect__form-forms');
    $('form').submit(function(e) {
        e.preventDefault();
        if(!$(this).valid()) {
            return;
        }   
        $.ajax({
            type: "POST",
            url: "php/to.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $( '.modal').fadeOut();
            $('.modal__completed-footer, .modal__completed').fadeIn();
            $('.modal').fadeOut(2000);
            $('.modal__completed, .modal__completed-footer').fadeOut(1800);
            $('form').trigger('reset');
        });
        return false;
    });     
});
