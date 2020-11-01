import React,{Component} from "react";

class Todo extends Component{
    constructor(props) {
        super(props);
        let {todo} = this.props;
        this.state = {todo};
    }

    changeStatusTodo = () => {
        let {todo} = this.state;
        todo.completed = !todo.completed;
        this.setState({todo});
    }

    render() {
        let todo = this.state.todo;
        return  (
            <div className={"Todo"}>
                console.log(this.state);
                id: {todo.id} =>
                title: {todo.title} =>
                completed: {todo.completed? "done": "in list"} =>
                <button onClick={this.changeStatusTodo}>Change status todo</button>
            </div>);
    }
}

export default Todo;
