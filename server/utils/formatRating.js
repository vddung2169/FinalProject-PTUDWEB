const formatRating = (rating) => {
    return (Math.round(rating * 100) / 100).toFixed(1);
}

const formatRatingStar = (rating) => {
    let ratingStar = ""
    const point = Math.floor(rating);
    const remainderPoint = (rating) % 1;

    for (let index = 0; index < point; index++) {
        ratingStar += ' <i class="fa-solid fa-star"></i>'
    }

    if(remainderPoint > 0.5){
        ratingStar += '<i class="fa-regular fa-star-half-stroke"></i>'
    }

    return ratingStar

}

module.exports = {
    formatRating,
    formatRatingStar
}