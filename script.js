function doOnClick() {
    let inp = document.getElementById('input-box');
    let my_div = document.getElementById('lists');
    let li = document.createElement('li');
    let edit = document.createElement('button');
    let del = document.createElement('button');
    let div1 = document.createElement('div')
    let div = document.createElement('div')

 
    div.classList.add('checkbox');
    div.innerHTML='<i></i>';

    
    
    li.append(div);
    li.append(div1)
    div1.innerText = inp.value;
    if(inp.value !== ""){
        my_div.append(li);
        inp.value = "";
    }
    

    function doOnDelete(){
        li.remove(li);
    }

    function doOnEdit(){
        inp.value=edit.parentNode.innerText;
        doOnDelete();
    }

    
    

    del.innerHTML='<i class="fa fa-trash"></i>'
    del.name='deletebutton'
    del.classList.add('delete');
    li.append(del)

    edit.innerHTML='<i class="fa fa-edit"></i>'
    edit.name='editbutton'
    li.append(edit)

    edit.addEventListener('click',doOnEdit);
    del.addEventListener('click',doOnDelete);


}


function main() {
    let button1 = document.getElementById('butt');
    button1.addEventListener('click', doOnClick);
    let input = document.getElementById('input-box');
    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          doOnClick();
        }
      });
}

main();