let ticket = JSON.parse(window.localStorage.getItem('ticket')) || null
let saveClient = false
if(!ticket){
    ticket = JSON.parse(window.sessionStorage.getItem('ticket')) || null
    saveClient =true
}
const paymentPrice = document.getElementById('payment-price')
const clientInfor = document.getElementById('client-infor')
const start = document.getElementById('batdau')
const end  = document.getElementById('ketthuc')


const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const prepareTicket =async () => {
    if(ticket && !saveClient) {
        window.sessionStorage.setItem('ticket',JSON.stringify(ticket))
        window.localStorage.removeItem('ticket')
    }else if(!ticket){
        window.location.href = '/error'
    }

    const res = await fetch('/ticket/prepare',{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({machuyenxe : ticket.machuyenxe})
    })

    const resJson = await res.json()

    paymentPrice.childNodes[1].childNodes[3].innerHTML = numberWithCommas(ticket.totalPrice) + " đ"
    paymentPrice.childNodes[3].childNodes[3].innerHTML = numberWithCommas(ticket.pricePerSeat)+ " đ"
    paymentPrice.childNodes[5].childNodes[3].innerHTML = ticket.selectingSeats
    const slots = ticket.maghe.join(',')
    paymentPrice.childNodes[7].childNodes[3].innerHTML = slots

    clientInfor.childNodes[1].childNodes[3].innerHTML = ticket.fullname
    clientInfor.childNodes[3].childNodes[3].innerHTML = ticket.phone
    clientInfor.childNodes[5].childNodes[3].innerHTML = ticket.email
    clientInfor.childNodes[9].childNodes[3].innerHTML = ticket.note

    start.childNodes[0].nodeValue = resJson.tgkhoihanh
    start.childNodes[2].innerHTML = resJson.diachibatdau

    end.childNodes[0].nodeValue = resJson.tgketthuc
    end.childNodes[2].innerHTML = resJson.diachiketthuc

}

const removeTicket = () => {
    if(ticket){
        window.sessionStorage.removeItem('ticket')
    }
    window.location.href = '/bus'
}

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = (current_minutes < 10 ? "0" : "") + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            
            if(mins > 1){
                
                countdown(mins-1);           
                    
            }
        }
        if(current_minutes <= 0 && seconds <= 0 ){
        	removeTicket()
        }
    }
    tick();
}

countdown(5);

prepareTicket()

