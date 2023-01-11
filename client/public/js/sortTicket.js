const asc = $('.availableTicket__sort-list.asc');
const desc = $('.availableTicket__sort-list.desc');


// When click "Giá tăng dần"
asc.onclick = function() {
    try {
        const currentURL = new URL(window.location.href)

        
       
        currentURL.searchParams.set('sort', 'asc')
        currentURL.searchParams.set('search', 'true')
        window.location.href = currentURL
    } catch (error) {
        console.log(error.message)
    }

}

// When click "Giá giảm dần"
desc.onclick = function() {
    try {
        const currentURL = new URL(window.location.href)

        currentURL.searchParams.set('sort', 'desc')
        currentURL.searchParams.set('search', 'true')
        window.location.href = currentURL

    } catch (error) {
        console.log(error.message)
    }
}