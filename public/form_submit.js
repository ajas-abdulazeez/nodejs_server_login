

validateForm = ()=> {
    let x = document.forms["form1"]["username"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
  }

// signup =()=>{

/*signin =()=>{
    document.getElementById("signin_button").classList.toggle("tablink_active");
    document.getElementById("signup_button").classList.toggle("tablink");
}*/

function navigation(evt, navig) {
    // Declare all variables

  if (navig==="signin")
  {
    document.getElementsByClassName("tablink")[0].setAttribute("name", "active")
    document.getElementsByClassName("tablink")[1].setAttribute("name","")

  }
else{
  document.getElementsByClassName("tablink")[1].setAttribute("name", "active")
  document.getElementsByClassName("tablink")[0].setAttribute("name","")

}

    var i, tabcontent, tablink;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace("tablink_active");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(navig).style.display = "flex";
    document.getElementById(navig).className.replace("tablink_active");
    evt.currentTarget.className.replace("tablink_active")
  }
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// 


