function SignUp(){

    let form = document.getElementById('form')


    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        //saving values locally

        localStorage.setItem('username',username)
        localStorage.setItem('password',password)

        alert("Your data is stored in local storage")
    })
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon i");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  