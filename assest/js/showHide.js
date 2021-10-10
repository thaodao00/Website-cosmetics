const $$ = document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)

//Modal show hide account
const modalAccount = $('.modal-account')
const iconUser = $('.login-link')
const authForms = $$('.auth-form')
const registerForm = $('.register-form')
const  loginForm = $('.login-form')
const loginFormBtn = $('.login-from__btn')
const registerFormBtn = $('.register-from__btn')
const backBtn= $$('.auth-form__controls-back')
const btnLoginMobile = $('.btn-login')
const navMobile = $('.nav-mobile')
const navBtnMobile = $('.nav-link')
function showAccount(){
    modalAccount.classList.add('modal-account__open')
}
function hideAccount(){
    modalAccount.classList.remove('modal-account__open')
}
btnLoginMobile.addEventListener('click',function (){
    showAccount()
})
iconUser.addEventListener('click', showAccount)
modalAccount.addEventListener('click',hideAccount)
for(const authForm of authForms){
    authForm.addEventListener('click', function (e){
        e.stopPropagation()
    })
}
loginFormBtn.addEventListener('click', function (){
    loginForm.style.display="block"
    registerForm.style.display="none"

})
registerFormBtn.addEventListener('click', function (){
    registerForm.style.display="block"
    loginForm.style.display="none"

})
for(const btn of backBtn){
    btn.addEventListener('click', hideAccount)
}

//modal show hide search
const iconSearch = $('.search-link')
const modal =  $('.modal')
const iconClose = $('.modal__icon-close')
const inputSearch = $('.modal__input')
const searchHistory = $('.modal__history')

function showSearch () {
    modal.classList.add('modal__open')
}
function hideSearch () {
    modal.classList.remove('modal__open')
}

iconSearch.addEventListener('click', showSearch)
iconClose.addEventListener('click', hideSearch)
modal.addEventListener('click',hideSearch)
inputSearch.addEventListener('click',function(event){
    // ngừng việc nổi bọt
    event.stopPropagation()
})
searchHistory.addEventListener('click',function(event){
    // ngừng việc nổi bọt
    event.stopPropagation()
})


