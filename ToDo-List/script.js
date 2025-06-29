const todoList = []; //empty array

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    if (name === '' || dueDate === '') {
        alert('Please enter both a todo name and a due date.');
        return;
    }

    
    todoList.push({
        name,           //name: name, (shorthand property when both are same)
        duedate: dueDate
    });


    inputElement.value="";
    dateInputElement.value = "";

    renderTodoList();
    

}
function renderTodoList(){
    let todoListHtml = '';

    todoList.forEach(function(todoObject, index){

        //const name = todoObject.name;
        // const { name } = todoObject; //this is called as destructuring and is same as the above line of code
        //const duedate = todoObject.duedate;
        const { name, duedate } = todoObject;
        const html = `
        <div>
            ${name}
        </div>
        <div>
            ${duedate}
        </div>
        <button class="delete-todo-button js-delete-todo-button" >Delete</button>
    
        `; //generating HTML using JS
        todoListHtml += html;
    });


    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}