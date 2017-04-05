class TodosList extends React.Component {
  render () {
    const todos = this.props.todos
    const markAsDone = this.props.markAsDone

    return (
      <div className="todos-list">
        <h2>Todos</h2>
        {todos
          .sort(function(a,b) {
            return new Date(a.due_time) - new Date(b.due_time);
          })
          .map(function(todo) {
            return(
              <Todo key={todo.id} todo={todo} markAsDone={markAsDone} />
            )
          })
        }
      </div>
    )
  }
}