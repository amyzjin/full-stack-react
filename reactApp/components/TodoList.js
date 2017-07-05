import React from "react";
import ReactDOM from 'react-dom'
import Todo from './Todo'


class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const task=this.props.todos.map((todo,i)=>
    <Todo key={i} taskText={todo.taskText} completed={todo.completed}/>
  )
    return (
      <ul>{task}</ul>
    )
  }
}

export default TodoList;
