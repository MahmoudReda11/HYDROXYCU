var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000, // وقت التأخير بين الشرائح بالمللي ثانية
        disableOnInteraction: false, // تعطيل التشغيل التلقائي عند التفاعل مع المستخدم (باستخدام الماوس)
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
    1200:{
      slidesPerView : 4,
    },
    800:{
      slidesPerView : 3,
      spaceBetween: 30,
    },
    500 :{
      slidesPerView : 1,
    },
    0 :{
      slidesPerView : 1,
      spaceBetween: 30,
    }
  }
});
