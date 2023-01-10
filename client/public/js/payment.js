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
const paymentBtn  =document.getElementById('payment-btn')
const modal = document.querySelector('.modal-wrap');
const overlay = document.querySelector('.modal__overlay');
const userEmail = document.getElementById('email-send')
const backTime = document.getElementById('time-to-back')
let disabledCountdown = false
const waitingModal = new bootstrap.Modal(document.getElementById("waiting-modal"), {});



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


    ticket.tgkhoihanh = resJson.tgkhoihanh
    ticket.from = resJson.diachibatdau
    ticket.tgketthuc = resJson.tgketthuc
    ticket.to = resJson.diachiketthuc
    ticket.tennhaxe = resJson.tennhaxe
    ticket.tenloaixe = resJson.tenloaixe

}

const removeTicket = async () => {
    if(ticket){
        window.sessionStorage.removeItem('ticket')
    }

    await fetch('/ticket/cancel',{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({mave : ticket.mave})
    })

    //const resJson = await res.json()

    


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
        if(current_minutes <= 0 && seconds <= 0 && !disabledCountdown){
        	setTimeout(() => {
                removeTicket()
            },1000)
        }
    }
    if(!disabledCountdown){
        tick();
    }
    
}


function counttimeback(second){
    timeLeft = second;

    function countdown() {
        timeLeft--;
        backTime.innerHTML = String( timeLeft );
        if (timeLeft > 0) {
            setTimeout(countdown, 1000);
        }else{
            setTimeout(() => {
                window.location.href = '/'
            }, 1000);
        }
    };

    setTimeout(countdown, 1000);
}

countdown(10);
prepareTicket()


document.querySelectorAll('input[type=radio]').forEach(btn => {
    btn.onclick = (e) => {
        paymentBtn.classList.remove('payment_activity-pay-disabled')
        paymentBtn.disabled = false
    }
})

var paymentActive = (clicked => {
    return async(e) => {
        if(!clicked){
            e.preventDefault()

            const paymentMethod = document.querySelector('input[name = "radio"]:checked')
            if(paymentMethod){
                clicked = true;
                document.getElementById('noti-body').innerHTML = `<div class="d-flex justify-content-center">
                                                                        <div class="spinner-border text-warning m-4" role="status">
                                                                        <span class="visually-hidden">Loading...</span>
                                                                                    </div>
                                                                                </div>
                                            <h5 class="text-center">Đang thực hiện thanh toán, vui lòng đợi giây lát</h5>`
                waitingModal.show()
            }else{
                waitingModal.show()
                return
            }
          

            try {
                const res = await fetch('/ticket/donepayment',{
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        detail : ticket
                    })
                })
            
                const resJson = await res.json()

                console.log({resJson})
                if(resJson){
                    disabledCountdown =true
                    userEmail.innerHTML = ticket.email
                    modal.classList.add("active");       
                    counttimeback(10)    
                }else {
                    confirm('thất bại')
                }


            } catch (error) {
                console.log(error.message)
            }
        }else{
            waitingModal.show()
        }
    }
})(false);



paymentBtn.onclick = async(e) =>{
   paymentActive(e)
}

