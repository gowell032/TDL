// itemDel css 만지다 놨음
const changeMode = document.getElementById('change-mode-btn');
const SearchBox = document.querySelector('.search-box');
const todoBtnBorder = document.querySelector('.todoBtn-border')
const addBtn = document.querySelector('.add')

const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const items = document.querySelector('.items')

function inputReset() {
    todoInput.value = '';
}

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

    if(SearchBox.className === 'search-box') {
        SearchBox.className = 'night-search-box'
    }else {
        SearchBox.className = 'search-box'
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


// 댓글 추가 삭제
function onAdd() {
    const text = todoInput.value;

    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    const itemText = document.createElement('span');
    itemText.innerText = text;

    const itemDel = document.createElement('button');
    if(document.body.className === 'night'){
        itemDel.setAttribute('class', 'night-itemDel')
    } else {
        itemDel.setAttribute('class', 'itemDel')
    }

    itemDel.innerHTML = '<span class="material-symbols-outlined">do_not_disturb_on</span>';
    itemDel.addEventListener('click', ()=> {
        items.removeChild(item);
    });

    item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);

    changeMode.addEventListener('click', ()=>{
        console.log(document.body.className)
        if(document.body.className === 'night') {
            itemDel.className = 'night-itemDel'
        }else {
            itemDel.className = 'itemDel'
        }
    })
};

todoBtn.addEventListener('click', ()=> {
    onAdd()
    inputReset()
});

todoInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        onAdd()
        inputReset()
    }
});