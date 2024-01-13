/*- page-loader -*/
$(window).on('load',function(){
  setTimeout(function(){
  $('.page-loader').fadeOut('slow');
  $('body').removeClass('scroll-hidden');
  },14000);
});

/*- mobile menu -*/
let toggleBtn = document.querySelector('.menu-btn');
let navBar = document.querySelector('.header__col');
toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('close');
  navBar.classList.toggle('show');
});

/*- main-nav -*/
const menuTitles = document.querySelectorAll('.main-nav__in > li > a');

menuTitles.forEach((menuTitle) => {
	menuTitle.addEventListener('click', () => {
		if (menuTitle.classList.contains('open')) {
			menuTitle.classList.remove('open');
		} else {
			const menuTitlesWithIsOpen = document.querySelectorAll('.open');
			menuTitlesWithIsOpen.forEach((menuTitleWithIsOpen) => {
				menuTitleWithIsOpen.classList.remove('open');
			});
			menuTitle.classList.add('open');
		}
	});
});

/*- search -*/
let searchBtn = document.querySelector('.search .icon-search');
let searchBar = document.querySelector('.search__dropdown');
searchBtn.addEventListener('click', function () {
  searchBtn.classList.toggle('open');
  searchBar.classList.toggle('show');
});

/*- hero-nav -*/
var swiperNav = new Swiper('.hero-nav', {
  spaceBetween: 90,
	slidesPerView: 3,
	loop: true, 
	freeMode: true,
  watchSlidesProgress: true,
});

/*- hero-slider -*/
var swiperMain = new Swiper('.hero-slider', {
	loop: true,
	effect: 'fade',
	spaceBetween: 10,
  navigation: {
    prevEl: '.hero-slider .swiper-button-prev',
    nextEl: '.hero-slider .swiper-button-next',
  },   
  thumbs: {
    swiper: swiperNav,
  },
});

/*- down scroll -*/	
var $page = $('html, body');
	$('.down-link').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});

/*- counter -*/
var counted = 0;

$(window).scroll(function() {
  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter__number span').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    counted = 1;
  }
});

/*- brans-slider -*/
var swiper = new Swiper('.brans-slider', {
	autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidesPerView: 5,
  spaceBetween: 130,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 130,
    },
    680: {
      slidesPerView: 5,
  		spaceBetween: 50,
    },
    860: {
      slidesPerView: 5,
  		spaceBetween: 90,
    },
    1025: {
      slidesPerView: 5,
  		spaceBetween: 130,
    },
  }, 
});

/*- case -*/
function openCase(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('case__image');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('case__item');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
} 

/*- testimonials-slider -*/
var swiper = new Swiper('.testimonials-slider', {
	autoHeight: true,
	autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1000,
  spaceBetween: 20,
  navigation: {
    prevEl: '.testimonials-slider .swiper-button-prev',
    nextEl: '.testimonials-slider .swiper-button-next',
  },
});

/*- timer -*/
var countDownDate = new Date('Jan 1, 2025 00:00:00').getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = 'Happy New Year!';
  }
}, 1000);
