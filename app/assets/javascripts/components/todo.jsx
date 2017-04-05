// Stateless Functional Component
const Todo = ({todo}) =>
    <div className='todo'>
      <h3>{todo.title}</h3>
      <p>{formatDate(todo.due_time)}</p>
    </div>