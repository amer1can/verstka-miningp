const value = document.querySelector('#choose__item-title-price')
const slider = document.querySelector('.choose__item-slider input')

if (value && slider) {
    value.innerHTML = '$ ' + slider.value / 1000

    slider.addEventListener('input', () => {
        value.innerHTML = '$ ' + slider.value / 1000
    })

    const faqBtns = document.querySelectorAll('.faq__elem-btn')

    faqBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            // elem.classList.toggle('active')
            const panel = elem.parentNode.nextElementSibling
            // panel.classList.toggle('visible')
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })
}
