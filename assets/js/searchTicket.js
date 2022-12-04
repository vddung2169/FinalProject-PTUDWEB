const searchTicketBtn = $('.search__ticket-submit .btn-search__ticket')

const homePage = $('.home');

const ticketPage = $('.availableTicket-container');

const homeItem = document.querySelectorAll(".home__popular-item")

function showListRoute(e) {
    e.preventDefault()
    homePage.classList.add('disabled');
    ticketPage.classList.remove('disabled');
}


searchTicketBtn.onclick = showListRoute
homeItem.forEach(e => {
    e.onclick = showListRoute
})

