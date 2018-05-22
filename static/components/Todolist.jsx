import React from 'react';
import { Component } from 'react';
import Todo from './Todo.jsx';
import {router} from '../../server/router'
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            list: []
        }
        this.deleteButton = this.deleteButton.bind(this);
    }
    handleSubmit(e) {
        // e.preventDefault();
        this.setState({
            list: [...this.state.list, this.state.todo]
        });
        e.target.reset();
    }

    handleInput(e) {
        this.setState({
            todo: e.target.value
        });
    }

    deleteButton(index) {
        var list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list
        });
    }
    render() {
        return(
            <div>
                <form onSubmit = {(e) => this.handleSubmit(e)}> 
                    Add <input onKeyUp = { (e) => this.handleInput(e) } required /> 
                </form>
                <div> 
                    {this.state.list.map( (value, index) => (
                        <Todo key = {index} todo = {value} index = {index} delete = {this.deleteButton}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Todolist;