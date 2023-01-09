const modal = document.querySelector('.modal-wrap');
const overlay = document.querySelector('.modal__overlay');
const nameField = document.getElementById('name')
const commentField = document.getElementById('info-form__note')
const rateForm = document.getElementById('rating-form')
const sendBtn = document.getElementById('sendRating')

let MANHANXE = ''


overlay.onclick=() => modal.classList.remove("active");
const renderRateBus = (e,manhaxe) => {
    e.preventDefault()
    try {
        MANHANXE = manhaxe
        modal.classList.add("active");
        nameField.value = ''
        var ele = document.getElementsByName("rate");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        commentField.value = ''
        
    } catch (error) {
        console.log(error.message + " at rateBus")
    }
}


const rateBus = async(e) => {
    e.preventDefault()
    if(!rateForm.reportValidity()){
        return
    }

    try {
        const rateStar = document.querySelector('input[name = "rate"]:checked').value
        const rating = {
            manhaxe : MANHANXE,
            fullname : nameField.value,
            score : rateStar.rateStar,
            comment : commentField.value
        }

        const res = await fetch('/rating',{
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(rating)
        })

        const resJson = await res.json()

        if(resJson){
            confirm('đánh giá thành công')
        }else{
            confirm('đánh giá thất bại')
        }

        
    } catch (error) {
        console.log(error.message + " at rateBus")
    }

}

sendBtn.addEventListener('click',rateBus)




