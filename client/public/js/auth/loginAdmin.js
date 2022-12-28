const loginForm = document.getElementById('loginForm')
const errorMessage = document.getElementById('errorMessage')
const hostname = window.location.protocol + '//' + window.location.hostname + ":3000"

const loginSubmit = async (e) => {
    e.preventDefault()

    try{
        const payload = new URLSearchParams(new FormData(loginForm))

        const res = await fetch(hostname + '/auth/login',
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
            // ! Display register fail

            //console.error(resJson)
            errorMessage.innerHTML = resJson
            
        }
    } catch(error){
        console.error(error.message)
        
    }

}


loginForm.addEventListener('submit',loginSubmit)