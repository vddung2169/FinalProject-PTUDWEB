//const loginForm = document.getElementById('createForm')
//const errorMessage = document.getElementById('errorMessage')
const hostname = window.location.protocol + '//' + window.location.hostname + ":3000"

const submitForm = async (e,to) => {
    e.preventDefault()

    try{
        const payload = new URLSearchParams(new FormData(e.target))

        const res = await fetch(hostname + to,
            {
                method : 'POST',
                body : payload,
                headers: { jwtToken: sessionStorage.jwtToken }
            }
        )
    } catch(error){
        console.error(error.message)
        
    }

}


