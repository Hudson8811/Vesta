$(document).ready(function () {
$('.search input').focus(function(){
    $(this).parent('.search').removeClass('search-full_value');
})

$('.search input').blur(function(){
    if($(this).val() != ''){
         $(this).parent('.search').addClass('search-full_value');
    } else{
        $(this).parent('.search').removeClass('search-full_value');
    }
})

$('.search-input-remove').click(function(e){
    e.preventDefault();
    $(this).parent('.search').removeClass('search-full_value');
    $(this).siblings('input').val('');
})

$('.slick').slick({
    infinity: true,
    dots: true,
    prevArrow: '<svg class="slick-arrow slick-arrow-prev" width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8142 13.9993L13.7793 1.35401C14.0736 1.04301 14.0736 0.544245 13.7793 0.233248C13.485 -0.0777493 13.0131 -0.0777493 12.7188 0.233248L0.220702 13.4418C-0.0735673 13.7528 -0.0735673 14.2516 0.220702 14.5626L12.7188 27.7653C12.8632 27.9179 13.0575 28 13.2463 28C13.4351 28 13.6294 27.9237 13.7737 27.7653C14.068 27.4543 14.068 26.9555 13.7737 26.6445L1.8142 13.9993Z" fill="black"/></svg>',    
    nextArrow: '<svg class="slick-arrow slick-arrow-next" width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1858 13.9993L0.220702 1.35401C-0.0735674 1.04301 -0.0735674 0.544245 0.220702 0.233248C0.514972 -0.0777493 0.986911 -0.0777493 1.28118 0.233248L13.7793 13.4418C14.0736 13.7528 14.0736 14.2516 13.7793 14.5626L1.28118 27.7653C1.13682 27.9179 0.942493 28 0.753716 28C0.56494 28 0.370611 27.9237 0.226253 27.7653C-0.0680161 27.4543 -0.0680161 26.9555 0.226253 26.6445L12.1858 13.9993Z" fill="black"/></svg>'
});

$('.header-catalog_btn').click(function(e){
    e.preventDefault();
    $('.desktop-slide_menu').toggleClass('desktop-slide_menu-active')
})

$('.footer-heading').click(function(){
    if($(window).width() < 1001){
        if(!$(this).siblings('.footer-item').hasClass('footer-item-active')){
            $('.footer-item').removeClass('footer-item-active')
            $('.footer-heading').removeClass('footer-heading-active')
            $(this).addClass('footer-heading-active')
            $(this).siblings('.footer-item').addClass('footer-item-active')
        } else{
            $('.footer-heading').removeClass('footer-heading-active')
            $('.footer-item').removeClass('footer-item-active')
        }
        
    } else{
        $('.footer-heading').removeClass('footer-heading-active')
        $(this).siblings('.footer-item').removeClass('footer-item-active')
    }
})

if($(window).width() > 1001){
    $('.footer-heading').removeClass('footer-heading-active')
    $('.footer-item').removeClass('footer-item-active')
}
$(window).resize(function(){
    if($(window).width() > 1001){
        $('.footer-heading').removeClass('footer-heading-active')
        $('.footer-item').removeClass('footer-item-active')
    }
})


$('.search-link').click(function(e){
    e.preventDefault()
    $('.search-mobile-wrap').addClass('search-mobile-wrap-active')
})

$('.search-mobile-close').click(function(e){
    e.preventDefault()
    $('.search-mobile-wrap').removeClass('search-mobile-wrap-active')
})

$('.mobile-catalog-btn').click(function(e){
    e.preventDefault()
    $(this).toggleClass('mobile-catalog-btn-active')
    $('.mobile-catalog').toggleClass('mobile-catalog-active')
    $('.back-menu-btn').addClass('back-menu-btn-active')
    $('.mobile-subcatalog-wrap').removeClass('mobile-subcatalog-active')  
    $('.mobile-subcatalog-item').removeClass('is-active')
    $('.mobile-sub-subcatalog-wrap').removeClass('mobile-sub-subcatalog-active') 
    $('.mobile-sub-subcatalog-item').removeClass('is-active')
})

$('.back-menu-btn').click(function(e){
    e.preventDefault()
    $(this).removeClass('back-menu-btn-active')
    $('.mobile-catalog-btn').removeClass('mobile-catalog-btn-active')
    $('.mobile-catalog').removeClass('mobile-catalog-active')
    $('.mobile-subcatalog-wrap').removeClass('mobile-subcatalog-active')  
    $('.mobile-subcatalog-item').removeClass('is-active')
    $('.mobile-sub-subcatalog-wrap').removeClass('mobile-sub-subcatalog-active') 
    $('.mobile-sub-subcatalog-item').removeClass('is-active')
})


$('.mobile-burger').click(function(e){
    e.preventDefault()
    $(this).toggleClass('mobile-burger-active')
    $('.mobile-menu-wrap').toggleClass('mobile-menu-wrap-active')
    $('.back-menu-btn').removeClass('back-menu-btn-active')
    $('.mobile-catalog').removeClass('mobile-catalog-active')
    $('.mobile-catalog-btn').removeClass('mobile-catalog-btn-active')
    $('.mobile-subcatalog-wrap').removeClass('mobile-subcatalog-active')  
    $('.mobile-subcatalog-item').removeClass('is-active')
    $('.mobile-sub-subcatalog-wrap').removeClass('mobile-sub-subcatalog-active') 
    $('.mobile-sub-subcatalog-item').removeClass('is-active')
})

$('.desktop-slide_menu-link').hover(function(e){
    e.preventDefault();
    const $this = $(this);
    const id = $this.data('id');
    if(!$this.hasClass('desktop-slide_menu-link-active')){
        $('.desktop-slide_menu-link').removeClass('desktop-slide_menu-link-active');
        $('.desktop-slide_content').removeClass('desktop-slide_content-active');
        $this.addClass('desktop-slide_menu-link-active');
        $(`.desktop-slide_content[data-id="${id}"]`).addClass('desktop-slide_content-active');
    }
});

$('.catalog-desktop-slide_menu-link').hover(function(e){
    e.preventDefault();
    const $this = $(this);
    const id = $this.data('id');
    if(!$this.hasClass('catalog-desktop-slide_menu-link-active')){
        $('.catalog-desktop-slide_menu-link').removeClass('desktop-slide_menu-link-active');
        $('.catalog-desktop-slide_content').removeClass('desktop-slide_content-active');
        $this.addClass('desktop-slide_menu-link-active');
        $(`.catalog-desktop-slide_content[data-id="${id}"]`).addClass('desktop-slide_content-active');
    }
});

$('.desktop-slide_content, .desktop-slide_menu').mouseleave(function(){
    $('.desktop-slide_menu-link').removeClass('desktop-slide_menu-link-active');
    $('.desktop-slide_content').removeClass('desktop-slide_content-active');
})

$('.desktop-slide_content, .catalog__menu').mouseleave(function(){
    $('.catalog-desktop-slide_menu-link').removeClass('desktop-slide_menu-link-active');
    $('.catalog-desktop-slide_content').removeClass('desktop-slide_content-active');
})

$('.filter-mobile').click(function(e){
    e.preventDefault();
    $('.catalog__panel').addClass('catalog__panel-active')
    $('.filter-mobile-close').addClass('filter-mobile-active')
    $('body').addClass('hidden')
})

$('.filter-back').click(function (e) {
    $('.catalog__panel').removeClass('catalog__panel-active')
    $('body').removeClass('hidden')

})

$('.slick-catalog').slick({
    infinity: true,
    dots: true,
    prevArrow: false,    
    nextArrow: false,
});

$('.card__product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-card'
  });


$('.slick-card').slick({
    infinity: true,
    dots: false,
    prevArrow: '<svg class="slick-arrow slick-arrow-prev" width="6" height="13" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8142 13.9993L13.7793 1.35401C14.0736 1.04301 14.0736 0.544245 13.7793 0.233248C13.485 -0.0777493 13.0131 -0.0777493 12.7188 0.233248L0.220702 13.4418C-0.0735673 13.7528 -0.0735673 14.2516 0.220702 14.5626L12.7188 27.7653C12.8632 27.9179 13.0575 28 13.2463 28C13.4351 28 13.6294 27.9237 13.7737 27.7653C14.068 27.4543 14.068 26.9555 13.7737 26.6445L1.8142 13.9993Z" fill="black"/></svg>',    
    nextArrow: '<svg class="slick-arrow slick-arrow-next" width="6" height="13" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1858 13.9993L0.220702 1.35401C-0.0735674 1.04301 -0.0735674 0.544245 0.220702 0.233248C0.514972 -0.0777493 0.986911 -0.0777493 1.28118 0.233248L13.7793 13.4418C14.0736 13.7528 14.0736 14.2516 13.7793 14.5626L1.28118 27.7653C1.13682 27.9179 0.942493 28 0.753716 28C0.56494 28 0.370611 27.9237 0.226253 27.7653C-0.0680161 27.4543 -0.0680161 26.9555 0.226253 26.6445L12.1858 13.9993Z" fill="black"/></svg>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card__product-slider',

});

$('.product-slick').slick({
    infinity: true,
    dots: false,
    prevArrow: '<div class="slick-arrow-prev-wrapper"><svg class="slick-arrow slick-arrow-prev" width="20" height="20" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8142 13.9993L13.7793 1.35401C14.0736 1.04301 14.0736 0.544245 13.7793 0.233248C13.485 -0.0777493 13.0131 -0.0777493 12.7188 0.233248L0.220702 13.4418C-0.0735673 13.7528 -0.0735673 14.2516 0.220702 14.5626L12.7188 27.7653C12.8632 27.9179 13.0575 28 13.2463 28C13.4351 28 13.6294 27.9237 13.7737 27.7653C14.068 27.4543 14.068 26.9555 13.7737 26.6445L1.8142 13.9993Z" fill="black"/></svg></div>',    
    nextArrow: '<div class="slick-arrow-next-wrapper"><svg class="slick-arrow slick-arrow-next" width="20" height="20" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1858 13.9993L0.220702 1.35401C-0.0735674 1.04301 -0.0735674 0.544245 0.220702 0.233248C0.514972 -0.0777493 0.986911 -0.0777493 1.28118 0.233248L13.7793 13.4418C14.0736 13.7528 14.0736 14.2516 13.7793 14.5626L1.28118 27.7653C1.13682 27.9179 0.942493 28 0.753716 28C0.56494 28 0.370611 27.9237 0.226253 27.7653C-0.0680161 27.4543 -0.0680161 26.9555 0.226253 26.6445L12.1858 13.9993Z" fill="black"/></svg></div>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,

    responsive: [
    {
        breakpoint: 1300,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        accessibility: true,

        }
    },
    {
        breakpoint: 1000,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        accessibility: true,

        }
    },
    {
        breakpoint: 700,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:true,
        accessibility: true,

        }
    }
    ]
        
});

$('.interior-slick').slick({
    infinity: true,
    dots: false,
    prevArrow: '<div class="slick-arrow-prev-wrapper"><svg class="slick-arrow slick-arrow-prev" width="20" height="20" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8142 13.9993L13.7793 1.35401C14.0736 1.04301 14.0736 0.544245 13.7793 0.233248C13.485 -0.0777493 13.0131 -0.0777493 12.7188 0.233248L0.220702 13.4418C-0.0735673 13.7528 -0.0735673 14.2516 0.220702 14.5626L12.7188 27.7653C12.8632 27.9179 13.0575 28 13.2463 28C13.4351 28 13.6294 27.9237 13.7737 27.7653C14.068 27.4543 14.068 26.9555 13.7737 26.6445L1.8142 13.9993Z" fill="black"/></svg></div>',    
    nextArrow: '<div class="slick-arrow-next-wrapper"><svg class="slick-arrow slick-arrow-next" width="20" height="20" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1858 13.9993L0.220702 1.35401C-0.0735674 1.04301 -0.0735674 0.544245 0.220702 0.233248C0.514972 -0.0777493 0.986911 -0.0777493 1.28118 0.233248L13.7793 13.4418C14.0736 13.7528 14.0736 14.2516 13.7793 14.5626L1.28118 27.7653C1.13682 27.9179 0.942493 28 0.753716 28C0.56494 28 0.370611 27.9237 0.226253 27.7653C-0.0680161 27.4543 -0.0680161 26.9555 0.226253 26.6445L12.1858 13.9993Z" fill="black"/></svg></div>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,

    responsive: [
    {
        breakpoint: 1300,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility: true,
        arrows: true,   
        }
    },
    {
        breakpoint: 1000,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        accessibility: true,
        variableWidth: true,
        arrows: true,   
        
        }
    },
    {
        breakpoint: 700,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true, 
        variableWidth: true,
        arrows: true,   
        adaptiveHeight: true,
        
        }
    }
    ]
        
});
// ('.desktop-slide_menu-link').click(function(e){
//     e.preventDefault()
//     $(this).toggleClass('desktop-slide_menu-link-active')
//     console.log(this)
//     // $('.mobile-menu-wrap').toggleClass('mobile-menu-wrap-active')
//     // $('.back-menu-btn').removeClass('back-menu-btn-active')
//     // $('.mobile-catalog').removeClass('mobile-catalog-active')
//     // $('.mobile-catalog-btn').removeClass('mobile-catalog-btn-active')
// })

$('.mobile-catalog-wrap .desktop-slide_menu-link').click(function(e){
    e.preventDefault();
    const $this = $(this);
    const id = $this.data('catalog');
    $('.mobile-subcatalog-wrap').addClass('mobile-subcatalog-active');
    $('.mobile-subcatalog-wrap .mobile-subcatalog-item').removeClass('is-active');
    $(`.mobile-subcatalog-wrap .mobile-subcatalog-item[data-catalog="${id}"]`).addClass('is-active');
    console.log(id)
});

$('.mobile-subcatalog-wrap .mobile-subcatalog-link').click(function(e){
    e.preventDefault();
    const $this = $(this);
    const id = $this.data('subcatalog');
    $('.mobile-sub-subcatalog-wrap').addClass('mobile-sub-subcatalog-active');
    $('.mobile-sub-subcatalog-wrap .mobile-sub-subcatalog-item').removeClass('is-active');
    $(`.mobile-sub-subcatalog-wrap .mobile-sub-subcatalog-item[data-subcatalog="${id}"]`).addClass('is-active');
    console.log(id)
});


});
