const backBtn = $('.modal__header-form.active .btn-back');
const nextBtn = $('.modal__header-form.active .btn-continue');
const modalBody = $('.modal__body');
const modal = $('.modal-wrap');
const btnNext = $('.seat-form__footer .btn-continue');
const buyTicketBtns = $$('.ticket-wrap-buy .ticket-buy');
const paymentBtn = document.getElementById('payment-btn')
const fullname = document.getElementById('namebuy')
const phone = document.getElementById('phonebuy')
const email = document.getElementById('emailbuy')
const note = document.getElementById('notebuy')
const ticketform = document.getElementById('ticketform')
const infoHeaders = $$('.seat-form__step');
const infoContainers = $$('.modal__container-form');
const hostname = window.location.hostname === 'localhost' ? window.location.protocol + '//' + window.location.hostname + ":3000" : window.location.protocol + '//' + window.location.hostname


const loadingBus = '<div class="d-flex justify-content-center loading-disbled" id="loading"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>'
const busbody = document.querySelector('.seat-form__seat-place table tbody')
const locationStart = document.getElementById('location-start')
const locationStartDetail = document.getElementById('location-start-detail')
const locationEnd = document.getElementById('location-end')
const locationEndDetail = document.getElementById('location-end-detail')


const quantity = $('.seat-form__footer .seat-form__quantity');
const price = $('.seat-form__footer .seat-form__price');

// const hostname = window.location.protocol + '//' + window.location.hostname +":3000"

var selectingSeats = 0;
var totalPrice = 0;

var ul = $('.userSelectedSeat .selected-list');

var listTickets = []; //Chuỗi chứa ghế

let busID = ''
let pricePerSeat = 0
const ticketForm = document.getElementById('ticket-form')

let user = JSON.parse(window.sessionStorage.getItem('user')) || null


const getInforUser = async() => {
    
    try {
        if(user)return
        
        const data = await fetch('/getinfor',{
            method : 'GET'
        })

        user = await data.json()

       

        if(user) {
            fullname.value = user.tenkhachhang
            email.value = user.email
            phone.value = user.sodienthoai
            window.sessionStorage.setItem('user',JSON.stringify(user))
        }

    } catch (error) {
        console.log(error.message + " at getInforUser")
    }
}

getInforUser()



function reset() {
    $('.seat-form__step.seat-form__step--active').classList.remove('seat-form__step--active');
    $('.modal__container-form.active').classList.remove('active');
    infoHeaders[0].classList.add('seat-form__step--active');
    infoContainers[0].classList.add('active');
    modal.classList.remove('active')
    btnNext.style.display = 'block'
    paymentBtn.style.display = 'none'
    // selectingSeats = 0
    // totalPrice = 0
    // listTickets.length = 0
    quantity.innerHTML = selectingSeats;
    price.innerHTML = totalPrice;
}

modal.onclick = () => {
    reset()
}

modalBody.onclick = function(event) {
    event.stopPropagation();
}

// backBtn.onclick = function() {
//     for (var i = 0; i < infoHeaders.length; i++) {

//     }
// }




$('.seat-form__step.seat-form__step--active').classList.remove('seat-form__step--active');
$('.modal__container-form.active').classList.remove('active');
infoHeaders[0].classList.add('seat-form__step--active');
infoContainers[0].classList.add('active');

// console.log(infoHeaders)
infoHeaders.forEach((infoHeader, index) => {
    const infoContainer = infoContainers[index];
    infoHeader.onclick = function() {
        if(index == 2){
            btnNext.style.display = 'none'
            paymentBtn.style.display = 'block'
        }else{
            btnNext.style.display = 'block'
            paymentBtn.style.display = 'none'
        }
        $('.seat-form__step.seat-form__step--active').classList.remove('seat-form__step--active');
        $('.modal__container-form.active').classList.remove('active');
        this.classList.add('seat-form__step--active');
        infoContainer.classList.add('active');
    }
})

function indexInClass(node) {
    var num = 0;
    for (var i = 0; i < infoHeaders.length; i++) {
        if (infoHeaders[i] === node) {
            return num;
        }
        num++;
    }
    return -1;
}


btnNext.onclick = function() {
    const currentHeading = $('.seat-form__step.seat-form__step--active');

    var indexCurrent = indexInClass(currentHeading);

    if (indexCurrent < 2) {
        indexCurrent++;
    } else {
        indexCurrent = 0;
    }

    if(indexCurrent == 2){
        btnNext.style.display = 'none'
        paymentBtn.style.display = 'block'
    }else{
        btnNext.style.display = 'block'
        paymentBtn.style.display = 'none'
    }

    currentHeading.classList.remove('seat-form__step--active');
    $('.modal__container-form.active').classList.remove('active');

    infoHeaders[indexCurrent].classList.add('seat-form__step--active');
    infoContainers[indexCurrent].classList.add('active');
}


// buyTicketBtns.forEach((buyTicketBtn, index) => {
//     buyTicketBtn.onclick = function() {
//         modal.classList.add('active');
//     }
// })

class Seat{
    constructor(type,price,maghe){
        if(type === 'driver'){
            this.inner = '<div class="coach-row__seat"><img class="driver-seat" src=" /img/volant.png" alt=""></div>'
        }else if(type === 'notsale'){
            this.inner = ' <div class="coach-row__seat"><img class="notsale_seat" src=" /img/notsale_seat.png" alt=""></div>'
        }else{
            this.inner = 
            `<div class="coach-row__seat" onclick="chonghe1(event, '${maghe}', ${price})">
                <img class="empty_seat" src=" /img/empty_seat.png" alt="">
            </div>`
        }
        this.html = 
        `<td>
            ${this.inner}
        </td>`
    }

}

class CoachRow {
    constructor(){
        this.seats = []
        this.open = '<tr class="coach-row">'
        this.close = '</tr>'
    }

    addSeat(seat){
        this.seats.push(seat)
    }

    html(){
        let inner = ''
        this.seats.forEach(e => {
            inner += e.html
        })
        return this.open + inner + this.close
    }
}





const renderBuyTicketModal = async (e,machuyenxe,maloaixe,mabatdau,maketthuc,tgkhoihanh,tgketthuc) => {
    e.preventDefault()
    // TODO 1: get data ghedat,ghexe
    
    selectingSeats = 0
    totalPrice = 0
    listTickets.length = 0
    ul.innerHTML = ''
    busbody.innerHTML = loadingBus
    modal.classList.add('active');
    

    const data = await fetch('/data/seat',{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify({
            machuyenxe : machuyenxe,
            maloaixe : maloaixe,
            mabatdau: mabatdau,
            maketthuc : maketthuc
        })
    })

    const {ghedat,ghexe,diachi}  = await data.json()

    
    const sold = new Map(ghedat.map(ghe => [ghe.maghe,ghe.maghe]))
    let diachibatdau
    let diachiketthuc

    

    if(diachi[0].madiachi == mabatdau){
        diachibatdau = diachi[0],
        diachiketthuc = diachi[1]
    }else{
        diachibatdau = diachi[1],
        diachiketthuc = diachi[0]
    }

    //TODO 2: render seat
    let coachRows = []
    let firstRow = new CoachRow()
    firstRow.addSeat(new Seat('driver'))
    // todo 2.1: add two first seat

   for (let index = 0; index < 2; index++) {
    if(sold.has(ghexe[index].maghe)){
        firstRow.addSeat(new Seat('notsale'))
    }else{
        firstRow.addSeat(new Seat('sale',ghexe[index].giaghe,ghexe[index].maghe))
    }
   }

   coachRows.push(firstRow.html())

    // todo 2.2: start at i = 2
    // row = new CoachRow  2 3  4 => coachRows.push()
    // 5 => row = new CoachRow 5 6 7=> coachRows.push
    // 8 => row = newCoachRow
    //   coachRows.push
    let row = new CoachRow()
    for (let index = 2; index < ghexe.length; index++) {
        if(index == 5 || index == 8){
            row = new CoachRow()
        }
        
        if(sold.has(ghexe[index].maghe)){
            row.addSeat(new Seat('notsale'))
        }else{
            row.addSeat(new Seat('sale',ghexe[index].giaghe,ghexe[index].maghe))
        }

        if(index == 4 || index == 7){
            coachRows.push(row.html())
        }

    }
    coachRows.push(row.html())
    busbody.innerHTML = ''
    coachRows.forEach(e =>{
        busbody.innerHTML += e
    })

    locationStart.childNodes[0].nodeValue = tgkhoihanh + ' <br>'
    locationStart.childNodes[1].innerHTML = diachibatdau.tendiachi
    locationStartDetail.innerHTML = diachibatdau.diachicuthe

    locationEnd.childNodes[0].nodeValue = tgketthuc + ' <br>'
    locationEnd.childNodes[1].innerHTML = diachiketthuc.tendiachi
    locationEndDetail.innerHTML = diachiketthuc.diachicuthe
    quantity.innerHTML = selectingSeats;
    price.innerHTML = totalPrice;

    busID = machuyenxe
}

function chonghe1(e, maghe, giatien) {
  
    if (e.target.src == hostname + "/img/empty_seat.png") {
        e.target.src = hostname + "/img/choice_seat.png"
        selectingSeats++;
        totalPrice += giatien;

        listTickets.push(`${maghe}`)
        var textInner = "";
        if (listTickets.length) {
            textInner += "Danh sách ghế đã chọn:&nbsp"
        }
        listTickets.forEach(function(ticket, index) {
            textInner += `<li class="selected-item">${ticket}</li>`
        })
        ul.innerHTML = textInner;
    } else if (e.target.src == hostname + "/img/choice_seat.png") {
        e.target.src = hostname + "/img/empty_seat.png";
        selectingSeats--;
        totalPrice -= giatien;
        var index = listTickets.indexOf(maghe);
        if (index >= -1) {
            listTickets.splice(index, 1);
        }
        var textInner = "";
        if (listTickets.length) {
            textInner += "Danh sách ghế đã chọn:&nbsp"
        }
        listTickets.forEach(function(ticket, index) {
            textInner += `<li class="selected-item">${ticket}</li>`
        })
        ul.innerHTML = textInner;
    }
    quantity.innerHTML = selectingSeats;
    price.innerHTML = totalPrice;
    pricePerSeat = giatien
}

const buyticket = async (e) => {
    try {
            //TODO 1: 

        // ! Kiểm tra machuyenxe, fullname, email, phone, maghe

        if(!ticketForm.reportValidity()){
            return
        }


        const ticketdetail = {
            machuyenxe : busID,
            maghe : listTickets,
            fullname : fullname.value,
            email: email.value,
            phone : phone.value,
            note : note.value,
            totalPrice : totalPrice,
            pricePerSeat : pricePerSeat,
            selectingSeats : selectingSeats
        }

        if(user){
            ticketdetail.makhachhang = user.makhachhang
        }

        const maveRaw = await fetch('/ticket/newticket',{
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(ticketdetail)
        })

        const mave = await maveRaw.json()

        if(!mave){
           confirm("Ghế đặt đã được chọn!")
           reset()
        }else{
            ticketdetail.mave = mave

            window.localStorage.setItem('ticket',JSON.stringify(ticketdetail))

            window.location.href = '/payment'
        }

    

     
    } catch (error) {
        console.log(error.message)
    }


}

paymentBtn.addEventListener('click',buyticket)