const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const pass_word ="hello123"
const user_name ="hello123"
app.use(express.json());
var fs = require('fs');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})


app.post('/post', function (req, res) {  
    // Prepare output in JSON format  
     
    console.log(req.body);  
    console.log("okay test success")
    if (req.body.username !== user_name || req.body.password !== pass_word )
    {
        console.log("login failed using : Wrong username or Password")
        response = {  
         message:"login failed",
         value:1
        };    
    }
    else{
        console.log("login successfull")
        response = {  
            message:"login success",
            value:0
        }; 
    }
    console.log(response.message)
    res.end(JSON.stringify(response));  

 })  

 app.post('/signup', function (req, res) {  
  // Prepare output in JSON format  
   
  console.log(req.body);  
  console.log("okay fetch success")
  response = {  
    message:"Account created successfully"
      };    
    
  
  console.log("Open file!");

  let user = {
    username:req.body.username,
    email:req.body.email,
    phone:req.body.phone,
    password:req.body.password,
  }
  console.log(req.headers["user-agent"])
  

fs.appendFile('users.txt', JSON.stringify(user), function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
res.end(JSON.stringify(response));  

})  




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})