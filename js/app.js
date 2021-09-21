
const toogleMenu = () => {
  let toggle = document.getElementById('navigation');
  
  if(toggle.style.display === 'none') {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
    
}