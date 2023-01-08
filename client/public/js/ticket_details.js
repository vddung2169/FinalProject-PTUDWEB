var all_empty_seats = $$('.empty_seat');

// const quantity = $('.seat-form__footer .seat-form__quantity');
// const price = $('.seat-form__footer .seat-form__price');

var selectingSeats = 0;
var totalPrice = 0;

var ul = $('.userSelectedSeat .selected-list');
console.log(ul);

var listTickets = []; //Chuỗi chứa ghế

function chonghe1(e, maghe, giatien) {
    if (e.target.src == "http://127.0.0.1:5500/client/public/img/empty_seat.png") {
        e.target.src = "http://127.0.0.1:5500/client/public/img/choice_seat.png"
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
    } else if (e.target.src == "http://127.0.0.1:5500/client/public/img/choice_seat.png") {
        e.target.src = "http://127.0.0.1:5500/client/public/img/empty_seat.png";
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
}