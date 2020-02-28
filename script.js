//Scroll down button
$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate({ scrollTop: $("#intro").offset().top }, "slow");
    return false;
  });
});

//Overlay menu
function openNav() {
  document.getElementById("myNav").style.width = "60%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Display range value
var sliders = document.getElementsByClassName("slider");
var outputs = document.getElementsByClassName("value");
Array.from(sliders).forEach(slider => {
  var output = slider.parentElement.children[2];
  slider.oninput = function() {
    output.innerHTML = this.value;
  };
});

//Back to top button
var myBtn = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Dark mode toggle
function darkToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

if (location.href.includes("index")) {
  $(document).ready(function() {
    $(".photo-carousel").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear"
    });
  });
}

const sendFeedback = () => {
  alert("Thanks for the feedback!");
};
