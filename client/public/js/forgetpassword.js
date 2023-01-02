const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnSend = $('.btn-send');
const blockSendEmail = $('.send-email');
const blockSendEmailSuccess = $('.send-email-success');

btnSend.onclick = function() {
    blockSendEmail.classList.remove('active');
    blockSendEmailSuccess.classList.add('active');
    const btnResend = $('.btn-resend');
    btnResend.onclick = function() {
        blockSendEmail.classList.add('active');
        blockSendEmailSuccess.classList.remove('active');
    }
}