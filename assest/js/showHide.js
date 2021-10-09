// search
const $$ = document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)

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


