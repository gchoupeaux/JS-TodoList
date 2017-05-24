/*
http://plnkr.co/edit/z74azpbpliUOsPOQT8Ph
https://glitch.com/edit/#!/pear-flat?path=views/index.html:1:0
https://watchandcode.com/courses/60264/lectures/1093316
Keep going from version 10
*/


var todoList = {
  todos: [],
  /*
  displayTodos: function(){
    //debugger; => break point
    if (this.todos.length === 0){
      console.log('Your todo list is empty!');
    } else {
      console.log('My todos:');
      for (var i=0; i<this.todos.length; i++){
        if (this.todos[i].completed===true){
          console.log('(x)',this.todos[i].todoText);
        }else{
          console.log('( )',this.todos[i].todoText);
        }
      }
    }
  },
  */
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    //this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    //this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    //this.displayTodos();
  },
  toogleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    //this.displayTodos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //  get number of completed todo
    for(var i=0; i<totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // Case 1 if everything is true make it false
    if (completedTodos === totalTodos){
      for (var i=0; i<totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      for (var i=0; i<totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    //this.displayTodos();
  }
};
/*
// getting acces to the display todos button and toogle button
var displayTodosButton = document.getElementById('displayTodosButton');
var toogleAllButton = document.getElementById('toogleAllButton');

// running the display method when display todos is clicked
displayTodosButton.addEventListener('click',function(){
  todoList.displayTodos();
});

// running the toogle All method when toogle button is clicked
toggleAllButton.addEventListener('click',function(){
  todoList.toggleAll();
});
*/

var handlers = {
  /*
  displayTodos: function(){
    todoList.displayTodos();
  },
  */
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toogleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i=0; i<todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true){
        todoTextWithCompletion = '(x) '+todo.todoText;
      } else {
        todoTextWithCompletion = '( ) '+todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
