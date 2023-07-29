function login(){

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

