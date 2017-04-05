class TodoForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setDueTime (e) {
    const name = 'due_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
      name: 'due_time'
    };

    return (
      <div className='form-component'>
        <h2>Neues Todo anlegen</h2>
        <Label label='Bitte geben Sie einen Titel und einen Zeitpunkt an' />
        <form className='add-todo-form' onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor='title' className='title-label'>Titel: </label>
          <input name='title'
                 className='todo-title'
                 placeholder='Todo Titel'
                 value={this.props.title}
                 onChange={(event) => this.handleChange(event)} />

          <br />
          <label htmlFor='due_time' className='due-time-label'>Zeitpunkt:</label>
          <Datetime input={false}
                    open={true}
                    inputProps={inputProps}
                    value={this.props.due_time}
                    onChange={(event) => this.setDueTime(event)} />

          <input type='submit' value='Todo anlegen' className='submit-button' />
        </form>
      </div>
    )
  }
}