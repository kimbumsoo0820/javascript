const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");



const TODOS_LS = 'toDos';

const toDos = [];

function paintToDo(text) {   // 엔터를 눌렀을 때, li 생성하고 delete 버튼과 span 을 생성  ,, span 과 delete 버튼을 li 안에 append 하고 마지막으로 
    // li를 ul 에다 append 하는것이다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);   // appendChild 는 뭔가를 그의 부모 엘리멘트에 넣는것
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDosObj = {
        text: text,
        id: newId
    };
    toDos.push(toDosObj);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos !== null) {

    }
}


function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();