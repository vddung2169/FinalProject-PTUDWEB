var all_empty_seats = $$('.empty_seat');

const quantity = $('.seat-form__footer .seat-form__quantity');
const price = $('.seat-form__footer .seat-form__price');

var selectingSeats = 0;
var totalPrice = 0;

function chonghe1(e, maghe, giatien) {
    console.log({ maghe });
    console.log({ giatien });
    console.log(e.target.src)
    if (e.target.src == "http://127.0.0.1:5500/client/public/img/empty_seat.png") {
        e.target.src = "http://127.0.0.1:5500/client/public/img/choice_seat.png"
        selectingSeats++;
        totalPrice += giatien;
    } else if (e.target.src == "http://127.0.0.1:5500/client/public/img/choice_seat.png") {
        e.target.src = "http://127.0.0.1:5500/client/public/img/empty_seat.png";
        selectingSeats--;
        totalPrice -= giatien;
    }
    quantity.innerHTML = selectingSeats;
    price.innerHTML = totalPrice;
}