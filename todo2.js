const todoListElem = $("#todo-container");

let todos = [{ content: "中間プロジェクト"}];

const painTodo =(_,todo) => {
    const todoItemElem = $("<div>").addClass("todo-item col col-12 p-2 input-group");
    const todoElem = $("<input>").attr("type", "text").atter("disabled", true).
    addClass("todo form-control").val(todo.content);
    todoItemElem.append(todoElem);
    todoListElem.append(todoItemElem);
}

const paintTodos = () => {
    todoListElem.empty();
    $.each(todos, painTodo);
}

const todoInputElem = $("#todo-input");
const todoAddBtnElem = $("#todo-btn-add");

const appendTodos = (text) => {
    const newTodos = todos.concat({ content: text });
    todos = newTodos;
    paintTodos();
}

const init = () => {
    todoAddBtnElem.on("click", () => {
        appendTodos(todoInputElem.val()); todoInputElem.val("");
    });

    todoInputElem.on("keypress", (e) => {
        if (e.key === "Enter"){
            appendTodos(e.target.val()); $(e.target).val("");
        }
    });
    paintTodos();
}

$(function() {
    init();
});