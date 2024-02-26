let patharr = window.location.pathname.split("/");
patharr.splice(-1);
let path = patharr.join("/");
let host = window.location.protocol + "//" + window.location.host + path;
let redirectValue = document.getElementById("redDir").value;
document.getElementById("redDir").value = `${host}/thanks.html`;






const name = document.getElementById('text')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []

  if (password.value.length < 11) {
    messages.push('رقم الهاتف غير صحيح !')
  }

  if (password.value.length > 11) {
    messages.push('رقم الهاتف غير صحيح !')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})



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
    600 :{
      slidesPerView : 2,
    },
    0 :{
      slidesPerView : 1,
      spaceBetween: 30,
    }
  }
});
