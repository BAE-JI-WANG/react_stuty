import React, { PureComponent } from 'react'

export default class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  
  onSubmit = event => {
      event.preventDefault();
      const name = this.inputRef.current.value;
      name && this.props.onAdd(name);
      this.inputRef.current.value = '';
  };

  render() {
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input 
            ref={this.inputRef} 
            className='add-input' 
            type='text' 
            placeholder="Habit"
        />
        <button className='add-button'>Add</button>
      </form>
    )
  }
}
