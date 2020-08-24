import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import Paginator from "./components/Paginator";

class App extends React.Component {
 constructor() {
    super();

    this.state = {
      tasks:[
        {id:1, title: '1', done : true},
        {id:2, title: '2', done : false},
        {id:3, title: '3', done : false},
        {id:4, title: '4', done : false},
        {id:5, title: '5', done : false},
        {id:6, title: '6', done : false},
        {id:7, title: '7', done : false},
        {id:8, title: '8', done : true},
        {id:9, title: '9', done : false}
      ],
      pageSize: 5,
      currentPage: 1
      /*pages:[
        {number:<li>1</li>},
        {number:<li>2</li>},
        {number:<li>3</li>},
        {number:<li>4</li>},
        {number:<li>5</li>},
      ]*/
    };
}

pagination = () => {

}


addTask = task => {
  this.setState(state =>{
    let {tasks} = state;
    tasks.push({
      id: tasks.length !== 0 ? task.length : 0,
      title:task,
      done:false
    });
    return tasks;
  });
};

doneTask = id =>{
  const index =this.state.tasks.map(task => task.id).indexOf(id);
  this.setState(state =>{
    let {tasks} = state;
    tasks[index].done = true;
    return tasks;
  });
};

deleteTask = id =>{
  const index =this.state.tasks.map(task => task.id).indexOf(id)
  this.setState(state =>{
    let {tasks} = state
     tasks.splice(index,1)                                                // learn.Js.ru
    return tasks
  });
};

setPage = (page) => {
  this.setState({
    currentPage: page
  })
}

render(){

  const {tasks, currentPage, pageSize} = this.state;
  let start = (currentPage - 1)*pageSize;
  let end = start + pageSize;
  let taskToShow = tasks.slice(start,end);

  return( <div className="App">
    <h1 className="top">Active tasks:{tasks.filter(task => ! task.done).length}</h1>
    {taskToShow.map(task =>
      <Task
          doneTask = {() => this.doneTask(task.id)}
          deleteTask = {() => this.deleteTask(task.id)}
          task={task}
          key={task.id}>
      </Task>
    )}
     <Paginator setPage={this.setPage.bind(this)} pages={Math.ceil(tasks.length/pageSize)} currentPage={currentPage} />
    <TaskInput addTask= {this.addTask}></TaskInput>
    </div>

  );
  }
}

export default App;
