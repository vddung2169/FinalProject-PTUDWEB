// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// Filter



const filterBtn = $('.availableTicket-header-choose__filter')
const filter = $('.filter-wrap')
const filterBody = $('.filter__body')
const closeFilter = $('.filter__header i')

filterBtn.onclick = function() {
    filter.classList.add('active')
}
closeFilter.onclick = function() {
    filter.classList.remove('active')
}
filter.onclick = function() {
    filter.classList.remove('active')
}
filterBody.onclick = function(event) { event.stopPropagation(); }

const upBtn = $('.filter__departureNumberOfSeat--choose .up');
const downBtn = $('.filter__departureNumberOfSeat--choose .down');

upBtn.onclick = function() {
    const quantity = $('.filter__departureNumberOfSeat--choose .quantity');
    var currentSlot = parseInt(quantity.innerText);
    currentSlot++;
    quantity.innerHTML = currentSlot;
}

downBtn.onclick = function() {
    const quantity = $('.filter__departureNumberOfSeat--choose .quantity');
    var currentSlot = parseInt(quantity.innerText);
    if (currentSlot > 0) {
        currentSlot--;
    }
    quantity.innerText = currentSlot;
}