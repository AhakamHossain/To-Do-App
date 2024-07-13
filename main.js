const input = document.getElementById(`input`);
const addbtn = document.getElementById(`addbtn`);
const display = document.getElementById(`display`);

addbtn.addEventListener(`click` , addList1);

function addList1(){
    if(input.value == ``){
        window.alert(`You must write something!`)
    }else{
        const li = document.createElement(`li`);
        li.innerHTML = input.value;
        display.appendChild(li)
    
        input.value = ``;

        const span = document.createElement(`span`)
        span.innerHTML = `\u00d7`;
        li.appendChild(span);

        saveData();

    }
}

input.addEventListener(`keypress`, addList2);

function addList2(){
    if(event.key == `Enter`){
        if(input.value == ``){
            window.alert(`You must write something!`)
        }else{
            const li = document.createElement(`li`);
            li.innerHTML = input.value;
            display.appendChild(li)
        
            input.value = ``;
    
            const span = document.createElement(`span`)
            span.innerHTML = `\u00d7`;
            li.appendChild(span);

            saveData();
        }
    }
}


display.addEventListener(`click`, (e)=>{
    if(e.target.tagName == `LI`){
        e.target.classList.toggle(`checked`);
        saveData();
    }else if(e.target.tagName == `SPAN`){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem(`data`, display.innerHTML);
}


function showData(){
    display.innerHTML = localStorage.getItem(`data`);
}

showData();