class Todos extends React.Component {
  constructor (props) {
    super(props)
    this.removeTodo = this.removeTodo.bind(this)
    this.state = {
      todos: this.props.todos,
      title: 'Mietwagen Guenstiger Probeaufgabe',
      due_time: "Heute um 10"
    }
  }

  handleUserInput (obj) {
    this.setState(obj);
  }

  handleFormSubmit () {
    var todo = {title: this.state.title, due_time: this.state.due_time};
    $.post('/todos', {todo: todo})
          .done((data) => {
            this.addNewTodo(data);
          });
  }

  addNewTodo (todo) {
    var todos = React.addons.update(this.state.todos, { $push: [todo]});
    this.setState({
      todos: todos.sort(function(a,b) {
        return new Date(a.due_time) - new Date(b.due_time);
      })
    });
  }

  removeTodo (todo) {
    console.log('removing Todo with ID '+todo.id+' from list...')
    // TODO: remove todo from list and update state
    /*
    const todos = {...this.state.todos}
    delete todos[todo];
    this.setState({
      todos: todos.sort(function(a,b) {
        return new Date(a.due_time) - new Date(b.due_time);
      })
    })
    */
  }

  markTodoAsDone (todoId) {
    callback = this.removeTodo
    $.ajax({
        url: '/todos/'+todoId,
        type: 'DELETE',
        success: function(todo) {
          callback(todo)
        }
    });
  }

  render () {
    return (
      <div>
        <TodoForm title={this.state.title}
                  due_time={this.state.due_time}
                  onUserInput={(obj) => this.handleUserInput(obj)}
                  onFormSubmit={() => this.handleFormSubmit()} />

        <TodosList todos={this.state.todos}
                   markAsDone={(obj) => this.markTodoAsDone(obj)} />
      </div>
    )
  }
}