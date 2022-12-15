const backBtn = $('.modal__header-form.active .btn-back');
const nextBtn = $('.modal__header-form.active .btn-continue');
const modalBody = $('.modal__body');
const modal = $('.modal-wrap');
const buyTicketBtns = $$('.ticket-wrap-buy .ticket-buy');

buyTicketBtns.forEach((buyTicketBtn, index) => {
    buyTicketBtn.onclick = function() {
        modal.classList.add('active');
    }
})

modal.onclick = function() {
    modal.classList.remove('active')
}
modalBody.onclick = function(event) { event.stopPropagation(); }

// backBtn.onclick = function() {
//     for (var i = 0; i < infoHeaders.length; i++) {

//     }
// }

const infoHeaders = $$('.seat-form__step');
const infoContainers = $$('.modal__container-form');
// console.log(infoHeaders)
infoHeaders.forEach((infoHeader, index) => {
    const infoContainer = infoContainers[index];
    infoHeader.onclick = function() {
        $('.seat-form__step.seat-form__step--active').classList.remove('seat-form__step--active');
        $('.modal__container-form.active').classList.remove('active');
        this.classList.add('seat-form__step--active');
        infoContainer.classList.add('active');
    }
})