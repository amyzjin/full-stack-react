import React from "react";
import ReactDOM from 'react-dom'

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const completed=<li ><button>X</button><strike>{this.props.taskText}</strike></li>
    const notcompleted=<li ><button>X</button>{this.props.taskText}</li>

    return (
      this.props.completed?completed:notcompleted
    )
  }

}


export default Todo;
