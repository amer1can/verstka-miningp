import "./import/modules";
import "./import/components";


// SIGN-IN
const signIn = document.querySelector('#sign-in')
const signInBtn = document.querySelector('.header__sign-btn')
const closeSignInBtn = signIn.querySelector('.sign-in__close')

signInBtn.addEventListener('click', ()=> {
    signIn.classList.add('visible')
    document.body.classList.add('sign')
})

closeSignInBtn.addEventListener('click', ()=> {
    signIn.classList.remove('visible')
    document.body.classList.remove('sign')
})

// CREATE ACCOUNT
const createAcc = document.querySelector('#create-acc')
const createAccBtn = document.querySelector('.sign-in__create-link')
const closeCreateAccBtn = createAcc.querySelector('.create-acc__close')
const goBack = createAcc.querySelector('.create-acc__back')

createAccBtn.addEventListener('click', ()=> {
    signIn.classList.remove('visible')
    document.body.classList.remove('sign')
    createAcc.classList.add('visible')
    document.body.classList.add('create')
})

closeCreateAccBtn.addEventListener('click', ()=> {
    createAcc.classList.remove('visible')
    document.body.classList.remove('create')
})

goBack.addEventListener('click', ()=> {
    createAcc.classList.remove('visible')
    document.body.classList.remove('create')
    signIn.classList.add('visible')
    document.body.classList.add('sign')
})
