import React,{Component} from "react";
import {todos} from "../data/todos";
import Todo from "./Todo";

class Todos extends Component{
    render() {
        return (

            <div className="Todos">
                {
                    todos.map(todo => {
                        return (<Todo todo={todo} key={todo.id}/>);
                    })
                }
            </div>
        )
    }
}

export default Todos;
