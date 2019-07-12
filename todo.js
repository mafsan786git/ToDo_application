var ul= document.getElementById('list')

var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

function addItem() {

    var input = document.getElementById('input');
    var item = input.value;
    // alert(item);
    var textnode = document.createTextNode(item);
     ul = document.getElementById('list');
    
     if (item.trim() === '') {
        //  alert('enter the input');
        var al = document.createElement('h2');
        al.textContent='enter the input';
        var where = document.getElementById('add');
        var parent = where.parentNode;
        parent.insertBefore(al,where);

        setTimeout(() => {
            al.remove();
        }, 2000);

     }else{
         li = document.createElement('li');

         var checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         checkbox.setAttribute('id','check');

         var label = document.createElement('label');
         label.setAttribute('for','item');

         ul.appendChild(label);
         li.appendChild(checkbox);
         label.appendChild(textnode);
         li.appendChild(label);
        
         ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 100);

         input.value = '';
        //  ul.appendChild(li);
        //  li.appendChild(checkbox);
        //  li.appendChild(label)
        //  label.innerHTML = item;
        //  ul.insertBefore(li,ul.childNodes[0]);
        //  li.className = 'visual';


     }
    
}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {

        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }   
    }
}