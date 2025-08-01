ScrollReveal().reveal(".cardsc", {delay: 100, easing: "ease-in", interval: 100, scale: .1, reset: true})









let nums = document.querySelectorAll(".num");
let container = document.querySelector(".vision3");

let test = false; // when the function doesn't start

window.onscroll = () => {
    if (window.screenY = container.offsetTop) {
        if (!test) {
            nums.forEach((e) => {
                let start = 0;
                let end = e.dataset.num;
                
                let count = setInterval(() => {
                    start++;
                    e.textContent = start;
                    if (start == end) {
                        clearInterval(count);
                    }
                }, 2000 / end)
            })
        }
        test = true;
    }
}






var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay:{

    delay:2000,
    disableOnInteraction:false,
  }

});