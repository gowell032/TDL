const itemInput = document.getElementById('itemInput');
const itemBtn = document.getElementById('itemBtn');
const items = document.getElementById('items');

function onAdd() {
    const text = itemInput.value;
    
    const item = document.createElement('li');
    console.log(item)

    const itemContent = document.createElement('span');
    itemContent.innerHTML = text;
    console.log(itemContent);

    const itemDel = document.createElement('button');
    itemDel.innerHTML = '삭제';
    itemDel.addEventListener('click', ()=>{
        items.removeChild(item);
    })

    
    item.appendChild(itemContent);
    item.appendChild(itemDel);
    items.appendChild(item);
};

itemBtn.addEventListener('click', ()=>{
    onAdd();
});