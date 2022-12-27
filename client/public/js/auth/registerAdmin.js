const registerForm = document.getElementById('registerForm')
const errorMessage = document.getElementById('errorMessage')
const hostname = window.location.protocol + '//' +window.location.hostname + ":3000"

const registerSubmit = async e =>{
    e.preventDefault()

    try{
        const payload = new URLSearchParams(new FormData(registerForm))

        const res = await fetch(hostname + '/auth/register',
            {
                method : 'POST',
                body : payload
            }
        )

        const resJson = await res.json()

        if(resJson.token){
            sessionStorage.setItem('jwtToken',resJson.token)

            window.location.href = hostname + "/admin";
        }
        else{
            
            errorMessage.innerHTML = resJson

        }
    } catch(error){
        console.error(error.message)
        //res.status(400).json('error')
    }
}

registerForm.addEventListener('submit',registerSubmit)