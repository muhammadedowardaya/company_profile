// sidenav------------------------------------------------
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slider-------------------------------------------------
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
  indicators: false,
  height:500,
  transition:900,
  interval:4000
});

// parallax-----------------------------------------------
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// carousel----------------------------------------------
const carousel = document.querySelectorAll('.carousel');
M.Carousel.init(carousel,{
  indicators :true,
  duration:250,
});

// Materialize--------------------------------------
const portfolio = document.querySelectorAll('.materialboxed');
M.Materialbox.init(portfolio);