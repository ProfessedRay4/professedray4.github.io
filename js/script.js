const BODY = document.querySelector("body");
let AGE = 0;
let NABIZ = 5000;
var windowSize = {
    w: window.outerWidth,
    h: window.outerHeight,
    iw: window.innerWidth,
    ih: window.innerHeight
};
var myVar;

function showPage() {
    document.getElementById("loader").style.display = "block";

    // Set a delay before showing myDiv
    setTimeout(function() {
        // Hide the loader
        document.getElementById("loader").style.display = "none";

        // Show myDiv after the delay
        document.getElementById("myDiv").style.display = "block";
        $(".content").addClass("animate-bottom");
    }, 2000); // Adjust the delay time in milliseconds (e.g., 2000 milliseconds = 2 seconds)
}

function getRandomColor(brightness) {
    function randomChannel(brightness) {
        var r = 255 - brightness;
        var n = 0 | ((Math.random() * r) + brightness);
        var s = n.toString(16);
        return (s.length === 1) ? '0' + s : s;
    }

    var randomColor1 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness),
        randomColor2 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
    if (brightness === 25) {
        return randomColor2;
        // return 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+')'
    } else
        return randomColor1;

}

function cycleColors() {
    setInterval(function () {
        BODY.style.background = getRandomColor(20);
    }, 5000); // Change color every 1000 milliseconds
}

// Start cycling colors when the page loads
window.onload = cycleColors;

// document.querySelector(".footer").style.marginTop = (window.innerHeight/2) - 250 +"px";
console.log(window.innerHeight)


function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}


document.addEventListener('DOMContentLoaded', function () {
    function pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

//init object to store window properties
    window.addEventListener("resize", function () {
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
})

// loader
	$(window).load(function() {
		// Animate loader offscreen
        showPage()
	});
