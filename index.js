const ToggleButton =document.querySelector('.toggle')
const NavList =document.querySelector('#navlist')



ToggleButton.addEventListener('click',()=>{
  if(NavList.style.display == "flex"){
    NavList.style.display = "none";
  }
  else{
    NavList.style.display = "flex";
  }
});

