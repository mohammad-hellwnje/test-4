var typed = new Typed(".type", {
    strings: ["DeveLoper", "FreeLancer", "Designer"],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  });




  let bars = document.querySelector(".bars")
  let navMenu = document.querySelector(".navMenu")
  bars.addEventListener("click", ()=> {
    bars.classList.toggle("active1")
    navMenu.classList.toggle("active1")
  })
//////////////////////////////////////////////////////////////
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > window.innerHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
///////////////////////////////////////////////////////////
const skillsSection = document.querySelector("#skill-section")

const progressBars = document.querySelectorAll(' .progress-bar')

function showProgress() {
  progressBars.forEach( progressbar => {
    const value = progressbar.dataset.progress;
    progressbar.style.opacity = "1" ;
    progressbar.style.width = `${value}%` ;
    // console.log(value)
  })

}
function hideProgress (){
  progressBars.forEach( p => {
    p.style.opacity = "0" ;
    p.style.width = "0%" ;
  })
}



window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight  ;

  if (sectionPos <   screenPos) {
    showProgress()
  }
  else {
    hideProgress ()
  }
})
/////////////////////////////////////


let testSlider =document.querySelectorAll('.test-item')
let dots = document.querySelectorAll('.dot')
var counter = 0
function switchTest(currentTest) {
  currentTest.classList.add('active')
  var testId = currentTest.getAttribute('attr')
  if (testId > counter) {
    testSlider[counter].style.animation = 'next1 0.5s ease-in forwards'
    counter = testId
    testSlider[counter].style.animation = 'next2 0.5s ease-in forwards'
  }
  else if (testId == counter) {
    return
  }
  else {
    testSlider[counter].style.animation = 'prev1 0.5s ease-in forwards'
    counter = testId
    testSlider[counter].style.animation = 'prev2 0.5s ease-in forwards'
  }
  indicators ()
}
function indicators () {
  for (let i = 0 ; i < dots.length; i++) {
    dots[i].classList = dots[i].className.replace(' active', '')
  }
  dots[counter].className += ' active'
}
function slideNext () {
  testSlider[counter].style.animation = 'next1 0.5s ease-in forwards'
  if (counter >= testSlider.length - 1) {
    counter = 0
  }
  else {
    counter++
  }
  testSlider[counter].style.animation = 'next2 0.5s ease-in forwards'
  indicators ()
}
function autoSliding () {
  deleteInterval = setInterval(timer,3000)
  function timer () {
    slideNext()
    indicators ()
  }
}
autoSliding()

const container = document.querySelector('.indicators')
container.addEventListener('mouseover', pause);
function pause () {
  clearInterval( deleteInterval)
}

container.addEventListener('mouseout', autoSliding)
///////////////////////////////////////////////////////////////////


let nums = document.querySelectorAll (".nums .num")
let section = document.querySelector (".counter")
let started = false



window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 450 ) {
    if (!started) {
      nums.forEach((num) => startCount(num))
    }
    started = true
  }
}


function startCount (el) {
  let goal = el.dataset.goal;
  let count = setInterval (()=> {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / goal)
}