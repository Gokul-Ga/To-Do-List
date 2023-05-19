
var error=document.getElementById('error1').value;
function login(username, password, callback) {
  // Perform login validation
  if (username === "admin" && password === "12345") {
    callback(null); // Login successful, no error
  } 
  else if (username === "" && password === "")
  callback("Fields cannot be empty !!");
  else {
    callback("Invalid Credentials!!"); // Login failed, return an error message
  }
}

document.getElementById('loginBtn').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  

  login(username, password, function(error) {
    if (error) {
      alert(error); // Show error message if login failed
    } else {
      // Redirect to the main page
      window.location.href = 'homepage.html';
    }
  });
});

// function login(callback){
//   var username=document.getElementById('username').value;
//   var password=document.getElementById('password').value;
//   var erru=document.getElementById('erroruser');
//   var errp=document.getElementById('errorpass');
//   if(username.value==''&&password.value==''){
//     alert('Invalid login credentials');
//   }
//   if(username.value==''){
//     erru.innerText='Cannot be empty'
//     erru.style.color='red';
//     erru.style.background='white';
//   }
//   else if(username.value!='admin'){
//     erru.innerText='Invalid Username'
//     erru.style.color='red';
//     erru.style.background='white';
//   }
//   else if(username.value==='admin'){
//     erru.innerText='Valid'
//     erru.style.color='Green';
//     erru.style.background='white';
//   }
//   if(password.value==''){
//     errp.innerText='Cannot be empty'
//     errp.style.color='red';
//     errp.style.background='white';
//   }
//   else if(password.value!=12345){
//     errp.innerText='Invalid Password'
//     errp.style.color='red';
//     errp.style.background='white';
//   }
//   else if(password.value==12345){
//     errp.innerText='Valid'
//     errp.style.color='green';
//     errp.style.background='white';
//   }
//   if(username.value=='admin'&&password.value==12345){
//     callback();
//   }
// }
// function todopage(){
//   window.location.href='homepage.html';
// }