function myfun(){
document.getElementById("btn").addEventListener("click", signIn);
var regdUsers = JSON.parse(localStorage.getItem("userDatastore"));

function signIn() {
console.log("here")
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    console.log(email, pass)
     
        for (var i = 0; i < regdUsers.length; i++) {
            if (regdUsers[i].emailAddress == email && regdUsers[i].passWord == pass) {
                
               window.location.href = "index.html"
            }else{
                alert("please fill correct details")
            }
        
    }

} 
}
myfun()

export default myfun