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