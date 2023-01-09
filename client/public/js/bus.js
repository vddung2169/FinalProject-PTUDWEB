const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});



const selectedRoute = () =>{
  

    const {tinhbatdau,tinhketthuc,date} = params

    
    if(tinhbatdau){
      const tbd = document.querySelector(`#tinhbatdau > option[value="${tinhbatdau}"]`)
      tbd.setAttribute('selected',true)
    }

    if(tinhketthuc){
      const tkt = document.querySelector(`#tinhketthuc > option[value="${tinhketthuc}"]`)
      tkt.setAttribute('selected',true)
    }

    if(date){
      document.querySelector('#date').value = date
    }
    
    // $("#tinhbatdau > option[value='" + tinhbatdau + "']").prop('selected', true)
    // $("#tinhketthuc > option[value='" + tinhketthuc + "']").prop('selected', true)

}









const instantSearch = (listname,inputname) => {
  const list = document.querySelectorAll(listname)
  console.log({list})
  list.forEach(item => {
          console.log(item)
          item.outerText.toLowerCase()
          .indexOf(document.getElementById(inputname)
          .value.toLowerCase()) > -1 ?  
              item.style.display = 'block' : item.style.display = 'none'});
}

const searchFilter = () => {

      const currentURL = new URL(window.location.href)

      const time = document.querySelector('input[name = "time"]:checked')
      if(time){
        currentURL.searchParams.set('tgkhoihanh', time.value)
      }
      const tennhaxe = document.querySelector('input[name = "tennhaxe"]:checked')
      if(tennhaxe){
        currentURL.searchParams.set('tennhaxe', tennhaxe.value)
      }
      const diemkhoihanh = document.querySelector('input[name = "diembatdau"]:checked')
      if(diemkhoihanh){
        currentURL.searchParams.set('diemkhoihanh', diemkhoihanh.value)
      }
      const diemketthuc = document.querySelector('input[name = "diemketthuc"]:checked')
      if(diemketthuc){
        currentURL.searchParams.set('diemketthuc', diemketthuc.value)
      }
      const maloaixe = document.querySelector('input[name = "maloaixe"]:checked')
      if(maloaixe){
        currentURL.searchParams.set('maloaixe', maloaixe.value)
      }

      currentURL.searchParams.set('giavenhonhat',slider.value)
      currentURL.searchParams.set('slot',slotNeed)
    
      currentURL.searchParams.set('search', 'true')
      window.location.href = currentURL
}

const clearFilter = () => {
      if(currentURL.searchParams.has('search')){
        currentURL.searchParams.delete('search')
      }
      window.location.href = currentURL
}
document.getElementById('clear-filter').addEventListener('click',clearFilter)
document.getElementById('apply-btn').addEventListener('click',searchFilter)

selectedRoute()


const pagination = document.querySelector('.pagination')


const addCSSPagination = () => {

  let {page} = params

  if(!page || page == 0) page = 1

  
  pagination.querySelectorAll('li').forEach(e => {
    e.classList.add('page-item')
  })
  pagination.querySelectorAll('a').forEach(e =>{
    e.classList.add('page-link')
  })
  
  const firstpage =  pagination.querySelector('li:first-child a')
  firstpage.setAttribute('href','?page=0')
  if(page == 1){
    firstpage.parentElement.classList.add('disabled')
  }

  pagination.querySelector(`a[href="?page=${page}"]`).parentElement.classList.add('active')
  
  const lastpagenumber = parseInt(pagination.querySelector('li:nth-last-child(2) a').innerHTML)
  if(page == lastpagenumber){
    pagination.querySelector('li:last-child a').parentElement.classList.add('disabled')
  }else{
    pagination.querySelector('li:last-child a').setAttribute('href',`?page=${lastpagenumber}`)
  }


}

addCSSPagination()