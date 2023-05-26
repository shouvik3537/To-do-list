let form = document.getElementById('addForm');
let itemLists = document.getElementById('items');
let search = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItems);
//searching 
search.addEventListener('keyup', filterItems);
//Remove item
itemLists.addEventListener('click',removeItem);


//Add items
function addItems(e){
    e.preventDefault();
    let text = document.getElementById('inputText').value;
    //create a new li to put the text and then apppend that in the ul
    let li = document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(text));
    let deletebtn = document.createElement('button');
    deletebtn.className="btn btn-danger btn-sm float-end right delete";
    deletebtn.appendChild(document.createTextNode('x'));
    li.appendChild(deletebtn);
    itemLists.appendChild(li);

}
//filter Item function
function filterItems(e){
    let input= e.target.value.toLowerCase();
    let lists = document.getElementsByTagName('li');
    Array.from(lists).forEach(function(list){
       let itemName= list.firstChild.textContent;
       
        if(itemName.toLowerCase().indexOf(input) != -1){
           list.style.display= 'block';
       }
       else{
           list.style.display = 'none';
       }
    });

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            let li = e.target.parentElement;
            itemLists.removeChild(li);
        }
    }
}
