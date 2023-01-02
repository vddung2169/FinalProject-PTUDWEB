const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const errorContent = $('.error_content');
const btnHome = $('.btn.btn-primary.button-72');

btnHome.onclick = () => {
    window.location.href = '/'
}