class Todo extends React.Component {
  handleMarkAsDone (e) {
    this.props.markAsDone(e.target.id);
  }

  render () {
    return (
      <div className='todo'>
        <h3>{this.props.todo.title}</h3>
        <p>{formatDate(this.props.todo.due_time)}</p>
        <button id={this.props.todo.id}
                name='mark-as-done'
                onClick={(event) => this.handleMarkAsDone(event)}>Als erledigt markieren</button>
      </div>
    )
  }
}