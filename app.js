const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const items = document.querySelector('.items')

const dayMode = document.querySelector('.day');
const nightMode = document.querySelector('.night');
const title = document.querySelector('.body-title')
console.log(title.style.color)

function handleDayMode() {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'
};
function handleNightMode() {
    document.body.style.backgroundColor = '#202124'
    document.body.style.color = '#ffffff'
};

dayMode.addEventListener('click', handleDayMode);
nightMode.addEventListener('click', handleNightMode);

function onAdd() {
    const text = todoInput.value;

    const item = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.innerText = text;

    const itemDel = document.createElement('button');
    itemDel.innerText = '삭제';
    itemDel.addEventListener('click', ()=> {
        items.removeChild(item);
    });
    console.log(items)
    item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);
};

todoBtn.addEventListener('click', ()=> {
    onAdd()
    todoInput.value = ''
});

