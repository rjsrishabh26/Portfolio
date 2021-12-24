let body= document.querySelector(".body");

var person = document.querySelectorAll(".person");
person.forEach(person => person.addEventListener('mouseover', flipcard));       
function flipcard(){
    this.classList.toggle("flip");
}
person.forEach(person => person.addEventListener('mouseout', flipcard));       
function flipcard(){
    this.classList.toggle("flip");
}
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

if ($(".text-slider").length == 1) {
              
    var typed_strings = 
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: ['<span>a Student Developer</span>', '<span>an Avid Learner, always hustling to get better</span>','<span>Solution Orient Undergrad</span>'],
        smartBackspace: true,
        typeSpeed: 30,
        backSpeed: 25,
        backDelay: 1000,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
}

