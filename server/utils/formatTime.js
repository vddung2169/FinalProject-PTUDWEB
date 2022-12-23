const moment = require('moment')

const formatHours = (datetime) => {
    const hours = moment(datetime)
    return hours.format('HH:mm')
}

module.exports = formatHours