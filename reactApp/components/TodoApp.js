import React from "react";
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import InputLine from './InputLine'

const dummyData = [
{ taskText: "timmy stop misspelling", completed: false },
{ taskText: "david read faster", completed: false },
{ taskText: "jeremy faster too", completed: false },
{ taskText: "amy code", completed: true },
]

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      todos:[]
    }
  }

  componentDidMount(){
    this.setState({todos:dummyData})
  }

  addTodo(task){
    const temp = dummyData;
    temp.push({taskText:task,completed:false});
    this.setState(temp)
  }

  render(){
    return(
      <div>
        <InputLine submit={(task)=>this.addTodo(task)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
