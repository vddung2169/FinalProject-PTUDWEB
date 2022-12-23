const moment  =require('moment')


// timestart = tgkhoihanh
// timeend = tgketthuc
const caculateTimeBetween = (timestart,timeend) => {
    const begin = moment(timestart)
    const end = moment(timeend)
    const hours = end.diff(begin,'hours')

    return hours
}

module.exports = caculateTimeBetween