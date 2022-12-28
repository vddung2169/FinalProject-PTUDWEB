
const selectedRoute = () =>{
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

    const {tinhbatdau,tinhketthuc} = params

    
      // TODO change to bus.js
    const tbd = document.querySelector(`#tinhbatdau > option[value="${tinhbatdau}"]`)
    tbd.setAttribute('selected',true)
    const tkt = document.querySelector(`#tinhketthuc > option[value="${tinhketthuc}"]`)
    tkt.setAttribute('selected',true)
    
    // $("#tinhbatdau > option[value='" + tinhbatdau + "']").prop('selected', true)
    // $("#tinhketthuc > option[value='" + tinhketthuc + "']").prop('selected', true)

}



selectedRoute()