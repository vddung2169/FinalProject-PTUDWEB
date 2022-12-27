async function verify() {
    try {
      const res = await fetch(hostname + "/verify", {
      method: "GET",
      headers: { jwtToken: sessionStorage.jwtToken }
    })

    const resJson = await res.json()

    if(resJson.isVerified){
      window.location.href = hostname + "/admin"
    }
    else{
      if(sessionStorage.jwtToken){
        sessionStorage.removeItem('jwtToken')
      }

    }
  

  } catch (error) {
      console.error(error.message + ' start.js')
      window.location.href = "http://localhost:3000/login"
  }

  
}

verify()