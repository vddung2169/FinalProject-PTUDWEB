var all_empty_seats = $$('.empty_seat');

const quantity = $('.seat-form__footer .seat-form__quantity');
const price = $('.seat-form__footer .seat-form__price');

// const hostname = window.location.protocol + '//' + window.location.hostname +":3000"

var selectingSeats = 0;
var totalPrice = 0;

var ul = $('.userSelectedSeat .selected-list');
console.log(ul);

var listTickets = []; //Chuỗi chứa ghế

function chonghe1(e, maghe, giatien) {
  
    if (e.target.src == hostname + "/img/empty_seat.png") {
        e.target.src = hostname + "/img/choice_seat.png"
        selectingSeats++;
        totalPrice += giatien;

        listTickets.push(`${maghe}`)
        var textInner = "";
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
        listTickets.forEach(function(ticket, index) {
            textInner += `<li class="selected-item">${ticket}</li>`
        })
        ul.innerHTML = textInner;
    }
    quantity.innerHTML = selectingSeats;
    price.innerHTML = totalPrice;
}