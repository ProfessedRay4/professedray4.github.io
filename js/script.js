const BODY = document.querySelector("body");
let AGE = 0;
let NABIZ = 2000;
var windowSize = {
  w: window.outerWidth,
  h: window.outerHeight,
  iw: window.innerWidth,
  ih: window.innerHeight
};
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var randomWidth = () => {
  let x = 0;
  if (detectMob()) {
    //    x = getRndInteger(65,85);
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value",  " ");
      document.querySelector(".btn-stop").style.opacity = "0";

    x = getRndInteger(5, AGE);
    document.querySelector(".container-box").style.paddingBottom = x/2+"%";
    document.querySelector(".container-box").setAttribute("data-value",  x+"%");
    // clearInterval(interval);
    NABIZ = 1000;
  } else {
    x = getRndInteger(30, 70);
    document.querySelector(".container-box").style.width = x + "%";
    document.querySelector(".container-box").setAttribute("data-value", x+ "%");

  }
};

var getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomWidth();

var interval = setInterval(() => {
  randomWidth();
}, NABIZ);

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor(brightness) {
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length===1) ? '0'+s : s;
  }
  var randomColor1 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness),
      randomColor2 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  if(brightness === 50){
    return randomColor2;
    // return 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+')'
  }else
    return randomColor1;

}

function cycleColors() {
    setInterval(function() {
      BODY.style.background = getRandomColor(98);
    }, 1000); // Change color every 1000 milliseconds (1 second)
  }

  // Start cycling colors when the page loads
  window.onload = cycleColors;

document.querySelector("#date_").innerHTML =(new Date()).getFullYear();
// document.querySelector(".footer").style.marginTop = (window.innerHeight/2) - 250 +"px";
console.log(window.innerHeight)


function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}


var calculateAge = ()=>{
  let age_year = document.querySelector('#meInTheWorld .years');
  let birth_date = new Date('July 22, 2008');
  let years;
  setInterval(function(){
    var current_date = new Date();
    AGE = current_date.getFullYear() - birth_date.getFullYear();
    age_year.innerHTML = pad(AGE);
  },1000);

}

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

calculateAge();

//init object to store window properties
window.addEventListener("resize", function() {
  if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
    windowSize.w = window.outerWidth; // update object with current window properties
    windowSize.h = window.outerHeight;
    windowSize.iw = window.innerWidth;
    windowSize.ih = window.innerHeight;
    BODY.style.background = getRandomColor(98);

  }
  //if the window doesn't resize but the content inside does by + or - 5%
  else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw ||
      window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
    windowSize.iw = window.innerWidth;
    BODY.style.background = getRandomColor(98);

  }
}, false)

