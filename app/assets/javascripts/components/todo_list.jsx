// Stateless Functional Component
const TodosList = ({todos}) =>
  <div>
    <h2>Todos</h2>
    {todos
      .sort(function(a,b) {
        return new Date(a.due_time) - new Date(b.due_time);
      })
      .map(function(todo) {
        return(
          <Todo todo={todo} key={todo.id} />
        )
      })
    }
  </div>
