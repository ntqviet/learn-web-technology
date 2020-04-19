const form = document.querySelector('#my-from');
const inputText = document.querySelector('.TextInput');
const btn = document.querySelector('.btn');
const list = document.querySelector('#listInput');

function appendItem(input){
    let li = document.createElement('li');
    if(input != ''){
        li.innerHTML = `
        <span>${input}</span>
        <button class="closeItem">X</button>
        `
        listInput.appendChild(li);
        removeItem();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getInputs().map((input) => {
        appendItem(input);
    })
});

btn.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputText.value !== ''){
        appendItem(inputText.value);
        addInput(inputText.value);
    }
    inputText.value = '';
})

function getInputs(){
    let Inputs = [];
    if(localStorage.getItem('inputList') === null){
        inputs = []
    }
    else{
        inputs = JSON.parse(localStorage.getItem('inputList'));
    }
    return inputs;
}

function addInput(input){
    let inputs = getInputs();
    inputs.push(input);
    localStorage.setItem('inputList', JSON.stringify(inputs));
}

var flag = true;
function removeItem(){
    var btnr = document.getElementsByClassName("closeItem");
    for(var i = 0; i < btnr.length; i ++){
        btnr[i].addEventListener("click",function(){
            removeFromlocalStorage(i);
            this.parentElement.closeItem();
        })
    }
}
function removeFromlocalStorage(i)
{
    if(flag){
        console.log(i-1);
        var temp = JSON.parse(localStorage.getItem("input"));
        temp.splice(i-1,1);
        localStorage.setItem('input',JSON.stringify(temp));
        flag = false;
        location.reload()
    }  
}

// function removeItem(){
//     // const closeItem = document.querySelectorAll('.closeItem');
//     // console.log(closeItem)

//     inputList.splice(1,1);
// }