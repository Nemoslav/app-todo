import React from 'react';


class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  addTask = () => {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  };


  handleEnter = event => {
    if (event.key === 'Enter') this.addTask();
  };

  inputChange = event => {
    this.setState({ input: event.target.value });
  };
  
  close = () => {
document.getElementById("input","window").style.display = "none"
document.getElementById("input","window").style.zIndex = "-1"
}
  open = () => {
    document.getElementById("input","window").style.display = "block"
    document.getElementById("input","window").style.zIndex = "1000"
  }

  render() {
    const { input } = this.state;
    return (
      <div class = "preTask">
<button onClick = {this.open} >New Task</button>
        <div id="input" class="task-input">
          <div id="window" class="task-window">
            <button class="task-button" onClick={this.addTask}>ADD</button>
            <button id="close" class="task-close" onClick={this.close}>❌ </button>
            <input
              onKeyPress={this.handleEnter}
              onChange={this.inputChange}
              value={input}
            ></input>
          </div> 
        </div> 
      </div>
    );
  }
}

export default TaskInput;
