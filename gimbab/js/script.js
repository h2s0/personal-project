//JavaScript


$(".sub").hide();

$(".h-left>li").mouseover(function(){
    $(this).children(".sub").stop().slideDown()
})

$(".h-left>li").mouseout(function(){
    $(".sub").stop().slideUp()
})

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    autoplay:{
        delay:3000,
        loop: true,
    },
  
    // Navigation arrows
    navigation: {

      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
      clickable:true,

    },
  

  });



  const swiper2 = new Swiper('.swiper2', {
    autoplay:{
      delay:4000,
      loop:true,
    },

    slidesPerView:5,
    spaceBetween:50,

    pagination:{
      el:'.swiper2 .swiper-pagination',
      clickable:true,
    }


  });




$(".popup_bg").show();

  $(".p_btn").click(function(){
    $(".popup_bg").hide();
  })