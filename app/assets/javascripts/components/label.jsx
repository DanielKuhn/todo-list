class Label extends React.Component {
  render () {
    return (
      <div className='todo-form-label'>
        <div>{this.props.label}</div>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};
