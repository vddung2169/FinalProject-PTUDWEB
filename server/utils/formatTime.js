const moment = require('moment')

const formatHours = (datetime) => {
    const hours = moment(datetime)
    return hours.format('HH:mm')
}

const formatTimeAdmin = (datetime) => {
    const date = moment(datetime)
    return date.format('YYYY-MM-DDTHH:mm')

}

module.exports = {
    formatHours,
    formatTimeAdmin
}