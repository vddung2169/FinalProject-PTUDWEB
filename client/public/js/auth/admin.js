const adminNameSaved = window.localStorage.getItem('admin') || null
const adminDisplayname = document.getElementById('adminName')
const logoutBtn =document.getElementById('logout-btn')

const adminName = adminDisplayname.innerHTML

if(!adminName){
  adminDisplayname.innerHTML = adminNameSaved
}else{
  window.localStorage.setItem('admin',adminName)
}

logoutBtn.addEventListener('click',async (e) =>{
  e.preventDefault()
  
  localStorage.removeItem('admin')
  window.location.href = hostname + "/admin/login"
  
})