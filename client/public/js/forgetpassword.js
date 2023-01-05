const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnSend = $('.btn-send');
const blockSendEmail = $('.send-email');
const blockSendEmailSuccess = $('.send-email-success');
const forgotForm = document.getElementById('forgotForm')

// btnSend.onclick = function() {
//     blockSendEmail.classList.remove('active');
//     blockSendEmailSuccess.classList.add('active');
//     const btnResend = $('.btn-resend');
//     btnResend.onclick = function() {
//         blockSendEmail.classList.add('active');
//         blockSendEmailSuccess.classList.remove('active');
//     }
// }

const btnResend = $('.btn-resend');
btnResend.onclick = function() {
    blockSendEmail.classList.add('active');
    blockSendEmailSuccess.classList.remove('active');
}
const forgotSubmit = async(e) => {
    e.preventDefault()

    try{
        const payload = new URLSearchParams(new FormData(forgotForm))

        const res = await fetch('/auth/forgot',
            {
                method : 'POST',
                body : payload
            }
        )

        const resJson = await res.json()

        if(resJson === true){
            blockSendEmail.classList.remove('active');
            blockSendEmailSuccess.classList.add('active');
        }
        else{
          // TODO SHOW ERROR MAIL
            
        }
    } catch(error){
        console.error(error.message)
        
    }
}

forgotForm.addEventListener('submit',forgotSubmit)