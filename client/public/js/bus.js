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

  if(!page) page = 1


  pagination.querySelectorAll('li').forEach(e => {
    e.classList.add('page-item')
  })
  pagination.querySelectorAll('a').forEach(e =>{
    e.classList.add('page-link')
  })
  pagination.querySelector(`a[href="?page=${page}"]`).parentElement.classList.add('active')

}

addCSSPagination()