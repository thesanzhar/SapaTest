// Menu Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

var newsSwiper = new Swiper(".newsSwiper", {
  loop: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
  }
});

var usefulLinksSwiper = new Swiper(".usefulLinksSwiper", {
  loop: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  }
});

var header__lang = document.getElementById("header__lang");
var btns = header__lang.getElementsByClassName("header__lang_items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_lang");
  current[0].className = current[0].className.replace(" active_lang", "");
  this.className += " active_lang";
  });
}

var header__lang2 = document.getElementById("header__lang2");
var btns2 = header__lang2.getElementsByClassName("header__lang_items");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_lang2");
  current[0].className = current[0].className.replace(" active_lang2", "");
  this.className += " active_lang2";
  });
}

var profileTest__profile = document.getElementById("profileTest__profile_items");
var profileTest__profile_btns = profileTest__profile.getElementsByClassName("profileTest__profile_fields");
for (var i = 0; i < profileTest__profile_btns.length; i++) {
  profileTest__profile_btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_profile_item");
  current[0].className = current[0].className.replace(" active_profile_item", "");
  this.className += " active_profile_item";
  });
}

