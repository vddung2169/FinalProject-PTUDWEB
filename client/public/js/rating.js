const rateBtn = document.querySelectorAll('.btn-rate');
const modal = document.querySelector('.modal-wrap');
const overlay = document.querySelector('.modal__overlay');
overlay.onclick=() => modal.classList.remove("active");
Array.from(rateBtn).forEach(btn => {
    btn.onclick=() => {
        modal.classList.add("active");
    }
})