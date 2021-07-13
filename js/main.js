const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 뱃지 숨김
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 0.3초 단위로 실행 _.throttle로 제어
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // 배지 숨김
    // gsap 라이브러리 to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 나타남 (to top 버튼)
    gsap.to(toTopEl, .2, {
      x: 0
    });

  }else {
    // 배지 나타남
    gsap.to(badgeEl, 2, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨김 (to top 버튼)
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// 화면 최상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0 // 화면의 0픽셀 지점으로 화면이동
  });
})


// visual .fade-in 요소들을 순서대로 0.7초 간격으로 실행
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity : 1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 없으면 첫번째 이미지가 가운데부터 시작하기때문에 왼쪽 이미지 비어있음
  autoplay: {
    delay : 3000
  },
  pagination:{
    el : '.promotion .swiper-pagination', // 페이지,번호,요소 선택자
    clickable: true, // 클릭가능여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전슬라이드 보는기능 자동제공
    nextEl: '.promotion .swiper-next'  // 다음슬라이드 보는기능 자동제공
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay : true,
  loop: true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



const prevEl = document.querySelector('.notice .promotion', function (){
  new Swiper('.notice0line, .swiper-container', {
    direction : 'vertical',
    opacity: 0,
    slidesPerView : 5,
    loop: true
  })
})



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion /* 지속적으로 반대값으로 전환 */

  if(isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
})

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  // gsap 라이브러리 to(요소, 지속시간, 옵션)
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    { // 옵션
      y: size, // 픽셀단위
      repeat: -1,
      yoyo: true, // 재생된 animation 반대로 재생
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8        // 감시할 영역 지정
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();