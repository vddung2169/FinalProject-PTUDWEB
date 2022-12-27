const nameHome = document.getElementById('adminName')
const logoutBtn = document.getElementById('logout-btn')
const hostname = window.location.protocol + '//' + window.location.hostname +":3000"

async function getInfo() {
    try {
        const res = await fetch(hostname + "/admin/infor", {
        method: "POST",
        headers: { jwtToken: sessionStorage.jwtToken }
      })

      

      const resJson = await res.json()

      if(resJson === false){
        window.location.href = hostname + "/admin/login"
      }

      nameHome.innerHTML = resJson.tenquantri


    } catch (error) {
        console.error(error.message ?? error)
        window.location.href = "http://localhost:3000/admin/login"
    }
}

getInfo()

logoutBtn.addEventListener('click',async (e) =>{
    e.preventDefault()
    sessionStorage.removeItem('jwtToken')
    window.location.href = hostname + "/admin/login"
    // // TODO call api logout
    // const removeCookie = await fetch('http://localhost:3000/auth/google/logout')


    // const resJson = await removeCookie.json()
    // if(resJson === true){
    //     window.location.href = "http://localhost:3000/login"
    // }
    
})
