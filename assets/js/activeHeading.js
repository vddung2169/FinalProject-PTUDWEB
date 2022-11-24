const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.ticket__information-details-heading-item');

const tabActive = $('.ticket__information-details-heading-item.active');

const line = $('.ticket__information-details-heading .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    tab.onclick = function() {
        $('.ticket__information-details-heading-item.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
    }
})