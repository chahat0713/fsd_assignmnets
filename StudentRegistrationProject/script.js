// ----------- Form Validation with Live Messages -----------
document.getElementById("registrationForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Reset error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    let isValid = true;

    if(username === "") {
        document.getElementById("usernameError").innerText = "Username cannot be empty";
        isValid = false;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,3}$/;
    if(!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    if(!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
        isValid = false;
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if(!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 7 characters, include one capital letter, one digit, and one special character (&,$,#,@)";
        isValid = false;
    }

    if(password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    if(isValid){
        alert("Form submitted successfully!");
    }
});

// ----------- Live Validation While Typing -----------
document.getElementById("username").addEventListener("input", function(){
    if(this.value.trim() !== ""){
        document.getElementById("usernameError").innerText = "";
    }
});

document.getElementById("email").addEventListener("input", function(){
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,5}\.[a-zA-Z]{2,3}$/;
    if(emailRegex.test(this.value)){
        document.getElementById("emailError").innerText = "";
    }
});

document.getElementById("phone").addEventListener("input", function(){
    if(/^\d{10}$/.test(this.value)){
        document.getElementById("phoneError").innerText = "";
    }
});

document.getElementById("password").addEventListener("input", function(){
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if(passwordRegex.test(this.value)){
        document.getElementById("passwordError").innerText = "";
    }
});

document.getElementById("confirmPassword").addEventListener("input", function(){
    if(this.value === document.getElementById("password").value){
        document.getElementById("confirmPasswordError").innerText = "";
    }
});

// ----------- Image Upload from Computer -----------
document.getElementById("uploadImage").addEventListener("change", function(event){
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("sampleImage").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// ----------- Hidden DOM Manipulations (no frontend section) -----------
document.getElementById("title").innerHTML = "🎓 Student Registration Form 🎓";
document.getElementById("title").style.color = "blue";

let dynamicText = document.getElementById("dynamicText");
let newNode = document.createTextNode("Welcome to the registration page!");
dynamicText.appendChild(newNode);
setTimeout(() => {
    dynamicText.removeChild(newNode);
}, 5000);

// ----------- jQuery Operations (hidden, still applied) -----------
$(document).ready(function(){
    $("#submitBtn").text("Submit Form");
    $("body").css("background-image", "url('https://via.placeholder.com/800x600')");
    $("input").attr("placeholder", "Type here");

    $("#registrationForm").submit(function(){
        let username = $("#username").val();
        console.log("Username via jQuery: " + username);
    });
});
