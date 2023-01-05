const dataController = require('./getDataController')
const accountDataController = require('./getAccountDataController')

const renderBus = async(req, res) => {
    try {

        const { tinhbatdau, tinhketthuc,date,sort,tennhaxe } = req.query
        let page = req.query.page || 1
        if(page == 0){
            page = 1
        } 

        
        

        const chuyenxe = await dataController.getAllChuyenxeBySearch(tinhbatdau, tinhketthuc,date,sort,tennhaxe,page)

        const tinhthanh = await dataController.getAllTinhthanh()

        const count = chuyenxe[0].full_count
        res.locals.pagination = {
            page,
            limit : 6,
            totalRows : count
        }

        
        res.render('bus', { chuyenxe, tinhthanh })

    } catch (error) {
        console.log(error.message)
        res.render('notfound404',{error: "500: " + error.message})
      
    }
}

const renderIndex = async(req, res) => {
    try {

        
        const id = req.user
        const accountType = req.accountType

        let user = {
            tenkhachhang : ""
        }
        if(id){
            if(accountType === 'system'){
                const data  = await accountDataController.getAnAccountByID(id)
                user = data[0]
            }else if(accountType === 'google'){
                const data  = await accountDataController.getAnGoogleAccount(null,id)
                user = data[0]
            }
        }

        

        const tinhthanh = await dataController.getAllTinhthanh()

        const tuyenduongtop = await dataController.getAllTuyenduongtop()


        res.render('index', { tuyenduongtop, tinhthanh,user })

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}


module.exports = {
    renderBus,
    renderIndex
}