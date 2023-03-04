const changeMode = document.getElementById('change-mode-btn');
const searchBox = document.querySelector('.search-box');
const todoBtnBorder = document.querySelector('.todoBtn-border');
const addBtn = document.querySelector('.add');
const todoInput = document.querySelector('.todoInput');

const title = document.querySelector('.body-title')

// 주,야간 모드
function handleNightMode() {
    document.body.classList.toggle('night');

    if(document.body.className === 'night') {
        paintDark()
        localStorage.setItem('DARK_MODE', 'Y');
    }else {
        paintDay()
        localStorage.setItem('DARK_MODE', 'N')
    }
};

changeMode.addEventListener('click', handleNightMode);

if(localStorage.getItem('DARK_MODE') === 'Y') {
    paintDark()
}else {
    paintDay()
}

function paintDark() {
    document.body.classList.add('night');
    changeMode.className = 'night-icon'
    changeMode.innerHTML = '<span class="material-symbols-outlined">clear_day</span>'
    searchBox.className = 'night-search-box'
    todoInput.className = 'nightTodoInput'
    todoBtnBorder.className = 'night-todoBtn-border'
    addBtn.className = 'material-symbols-outlined night-add'
    title.className = 'night-body-title'
}

function paintDay() {
    changeMode.className = 'day-icon'
    changeMode.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
    searchBox.className = 'search-box'
    todoInput.className = 'todoInput'
    todoBtnBorder.className ='todoBtn-border'
    addBtn.className = 'material-symbols-outlined add'
    title.className = 'body-title'
}