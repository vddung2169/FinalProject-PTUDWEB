const navbarAccount = document.getElementById('account')
const navbarRegister = document.getElementById('register')
const navbarLogin = document.getElementById('login')
const navbarAccountSetting = document.getElementById('accountSetting')

const checkIfAccount = () =>{
    const nameUser = navbarAccount.firstElementChild.innerHTML
    console.log(nameUser)
    if(nameUser){
        navbarLogin.style.display = "none"
        navbarRegister.style.display = "none"
        navbarAccount.firstElementChild.innerHTML = 'Welcome, ' + nameUser + ' !'
    }else{
        navbarAccount.style.display = 'none'
        navbarAccountSetting.style.display = 'none'
    }

}

checkIfAccount()
