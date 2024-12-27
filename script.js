let userName = "Juned69";
let passWord =  "Juned6969"
let userpath = document.getElementById('Username');
let passpath = document.getElementById('password');
let Loginbtn = document.getElementById('submit');
let result = document.getElementById('result');
Loginbtn.addEventListener('click',()=>{
    if (userpath.value == userName && passpath.value == passWord){
        
        result.innerHTML = "Password is Correct"
        window.open('https://junaid-exc.github.io/Jeni/')
        
    
    }else{
   
     result.innerHTML = "Password is Incorrect Try Again Later"
     
    }
    

})
