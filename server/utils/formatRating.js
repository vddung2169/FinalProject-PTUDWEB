const formatRating = (rating) => {
    return (Math.round(rating * 100) / 100).toFixed(1);
}

module.exports = formatRating