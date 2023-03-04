const todoBtn = document.querySelector('.todoBtn');
const items = document.querySelector('.items');

const TODOS_KEY = 'todos';
let todosArr = [];

function paintTodos(newTodoObj) {
    const item = document.createElement('li');
    item.id = newTodoObj.id;
    item.setAttribute('class', 'item');

    const itemText = document.createElement('span');
    itemText.innerText = newTodoObj.text;

    const itemDel = document.createElement('button');

    const bodyClassName = document.body.className
    
    bodyClassName === 'night' ? 
    itemDel.setAttribute('class', 'night-itemDel') : itemDel.setAttribute('class', 'itemDel')

    itemDel.innerHTML = '<span class="material-symbols-outlined">do_not_disturb_on</span>';
    itemDel.addEventListener('click', ()=> {
        items.removeChild(item);
        todosArr = todosArr.filter((todo) => todo.id !== parseInt(item.id));
        saveTodos();
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

function onAdd(event) {
    event.preventDefault();
    const todos = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: todos
    };
    todosArr.push(newTodoObj);

    paintTodos(newTodoObj);
    saveTodos();
};

const savedTodos = localStorage.getItem('TODOS_KEY');

searchBox.addEventListener('submit', (event)=> {
    onAdd(event)
});

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todosArr = parsedTodos;
    parsedTodos.forEach(paintTodos);
}