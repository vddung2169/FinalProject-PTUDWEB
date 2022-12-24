
const selectedRoute = () =>{
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

    const {tinhbatdau,tinhketthuc} = params

    console.log({tinhbatdau})
      // TODO change to bus.js
    const test = document.querySelector(`.search__ticket-choose > option[value="${tinhbatdau}"]`)

    test.setAttribute('selected',true)
    console.log(test)
    // $("#tinhbatdau > option[value='" + tinhbatdau + "']").prop('selected', true)
    // $("#tinhketthuc > option[value='" + tinhketthuc + "']").prop('selected', true)

}



selectedRoute()