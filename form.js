/*beginning of new*/
const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

//console.log(sign_in_btn);



//validation
// function create_account(){  
//     var n=document.getElementById("n1").value;  
//     var e=document.getElementById("e1").value;  
//     var p=document.getElementById("p1").value;  
//     //var cp=document.getElementById("p2").value;  
//     //Code for password validation  
//              var letters = /^[A-Za-z]+$/;  
//              var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
//     //other validations required code  
//     if(n==''||e==''||p==''||cp==''){  
//         alert("Enter each details correctly");  
//         } 
//     else if(!letters.test(n))  
//             {  
//                 alert('Name is incorrect must contain alphabets only');  
//             }  
//     else if (!email_val.test(e))  
//             {  
//                 alert('Invalid email format please enter valid email id');  
//             }  
//     // else if(p!=cp)  
//     // {  
//     // alert("Passwords not matching");  
//     // }  
//     else if(document.getElementById("p1").value.length > 12)  
//     {  
//     alert("Password maximum length is 12");  
//     }  
//     else if(document.getElementById("p1").value.length < 6)  
//     {  
//     alert("Password minimum length is 6");  
//     }  
//     else{  
//     alert("Your account has been created successfully...");  
//     window.location="./form.html";  
//     }  
//     } 
      
function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validatePassword();

	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}

function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
}

function validateEmail() {
	var email = valueOf("email");
	
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";	
}



function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
    
 