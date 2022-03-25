const signIn = document.querySelector('#sign-in')
const signInBtn = document.querySelector('.header__sign-btn')
const closeBtn = document.querySelector('.sign-in__close')

signInBtn.addEventListener('click', ()=> {
    signIn.classList.add('visible')
    document.body.classList.add('sign')
})

closeBtn.addEventListener('click', ()=> {
    signIn.classList.remove('visible')
    document.body.classList.remove('sign')
})
