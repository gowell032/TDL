const changeMode = document.getElementById('change-mode-btn');
const searchBox = document.querySelector('.search-box');
const todoBtnBorder = document.querySelector('.todoBtn-border');
const addBtn = document.querySelector('.add');

const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const items = document.querySelector('.items');

const container = document.getElementById('container');
const userNameForm = document.getElementById('username-form');
const userNameInput = document.querySelector('#username-form input');
const userNameBtn = document.querySelector('#username-form button');
const userNames = document.getElementById('user-name');

const TODOS_KEY = 'todos';
const todosArr = [];

// 주,야간 모드
function handleNightMode() {
    document.body.classList.toggle('night');

// toggle로 바꾸자
    if(changeMode.className === 'day-icon') {
        changeMode.className = 'night-icon'
        changeMode.innerHTML = '<span class="material-symbols-outlined">clear_day</span>'
    }else {
        changeMode.className = 'day-icon'
        changeMode.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
    }

    if(searchBox.className === 'search-box') {
        searchBox.className = 'night-search-box'
    }else {
        searchBox.className = 'search-box'
    }

    if(todoInput.className === 'todoInput') {
        todoInput.className = 'nightTodoInput'
    }else {
        todoInput.className = 'todoInput'
    }

    if(todoBtnBorder.className === 'todoBtn-border') {
        todoBtnBorder.className = 'night-todoBtn-border'
    }else {
        todoBtnBorder.className ='todoBtn-border'
    }

    if(addBtn.className === 'material-symbols-outlined add') {
        addBtn.className = 'material-symbols-outlined night-add'
    }else {
        addBtn.className = 'material-symbols-outlined add'
    }
};

changeMode.addEventListener('click', handleNightMode);

function paintTodos(todos) {
    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    const itemText = document.createElement('span');
    itemText.innerText = todos;

    const itemDel = document.createElement('button');

    // day,night에 따른 setAttribute 조건부로 주기
    const bodyClassName = document.body.className
    
    bodyClassName === 'night' ? 
    itemDel.setAttribute('class', 'night-itemDel') : itemDel.setAttribute('class', 'itemDel')

    itemDel.innerHTML = '<span class="material-symbols-outlined">do_not_disturb_on</span>';
    itemDel.addEventListener('click', ()=> {
        items.removeChild(item);
    });

    changeMode.addEventListener('click', ()=>{
        const bodyClassName = document.body.className

        bodyClassName === 'night' ? 
        itemDel.className = 'night-itemDel' : itemDel.className = 'itemDel'
    })

    item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);
};

function saveTodos() {
    localStorage.setItem('TODOS_KEY', JSON.stringify(todosArr));
}

// local storage 추가
function onAdd() {
    event.preventDefault();
    const todos = todoInput.value;
    todosArr.push(todos);
    todoInput.value = '';

    paintTodos(todos);
    saveTodos();
};

// local storage에 저장된 todos 페인팅 

const savedTodos = localStorage.getItem('TODOS_KEY');

searchBox.addEventListener('submit', (event)=> {
    onAdd(event)
});

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodos);
}