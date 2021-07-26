const post=()=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText);
         if (JSON.parse(this.responseText).value ===1)
            { document.getElementById("validity").style.color="red";
            }else{ document.getElementById("validity").style.color="rgb(33, 255, 4);";
                  }
         document.getElementById("validity").innerText=JSON.parse(this.responseText).message;
        }
      };

    const data={
      username:document.getElementsByName("username")[0].value,
      password:document.getElementsByName("password")[0].value
    }
    xhttp.open("POST", "/post", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
 
}


const signup=()=>{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
       document.getElementById("accountcreation_status").innerText=JSON.parse(this.responseText).message;
      }
    };
  
  const data={
    email:document.getElementsByName("email")[0].value,
    phone:document.getElementsByName("phone")[0].value,
    username:document.getElementsByName("username")[1].value,
    password:document.getElementsByName("password")[1].value
    
  }
  xhttp.open("POST", "/signup", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(data));
  console.log("signup form data collected successfully !")
  
}

//timer function
/*
let current_time=0;

const timer_fn =()=>{
  current_time++;
  if(current_time===5)
  {
    clearInterval(timer);
  }
  document.getElementById("timer").innerText=current_time;
}

const timer = setInterval(timer_fn,1000) ;
*/

//time out function
setTimeout(()=>{
  document.getElementById("time").style.display="none";
},3000);
  
//another function
let myPromise = new Promise((resolve,reject)=>{
  if(false){
      resolve("data feched");
  }else{
      reject("data not feched");
  }
});

myPromise.then((out)=>{
  console.log(out);
}).catch((out)=>{
  console.log(out);
})
