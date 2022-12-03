const searchTicketBtn = $('.search__ticket-submit .btn-search__ticket')

const homePage = $('.home');

const ticketPage = $('.availableTicket-container');

searchTicketBtn.onclick = function() {
    homePage.classList.add('disabled');
    ticketPage.classList.remove('disabled');
}