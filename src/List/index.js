import React, {Component} from "react";
import {getTodoList} from "../services/Todo.service";

class List extends Component {
    state = {
        todoList: []
    };

    render() {
        const {todoList} = this.state;
        return (
            <>
                TODO List
                <div>
                    {todoList.map(todo => (
                        <div key={todo.title}>{todo.title} </div>
                    ))}
                </div>
            </>
        );
    }

    componentDidMount() {
        getTodoList().then(todos => this.setState({todoList: todos}));
    }
}

export default List;
