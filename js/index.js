const toogleMenu = () => {
  let toggle = document.getElementById('navigation');
  
  if(toggle.style.display === 'none') {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
    
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}