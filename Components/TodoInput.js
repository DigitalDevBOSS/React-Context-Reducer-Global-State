import React, { useContext, useState } from 'react';

//if multiple contexts files us 'as'
//Context is returned in create-Context but exported in Named Context file
import { Context as Example} from '../Context/ExampleContext/contextExp'


const TodoInput = (props) => {
        const [todo, setTodo] = useState('')
        // const {todos, addTodo} = useContext(TodoContext)

        //state is passed as an object as well as actions 
        const {state, actions} = useContext(Example)

        const addTodo = actions.addTodo;

        const todoHandler = (e) => {
                setTodo(e.target.value);
        }

        const clickHandler = (e)=>{
                e.preventDefault();

                // to-do needs {id: id, text: 'some text', complete: false}
                //format todo first
                const newTodo = {
                        id: Math.random(),
                        text: todo,
                        complete: true
                }

                //pass formatted to addTodo
                addTodo(newTodo)

                //clear the state after submit
                e.target.value = '';
                setTodo("");
        }
        return (
                <div>
                        <input required type='text' placeholder="Add todo..." onChange={todoHandler}/>
                        <button onClick={clickHandler}>Add</button>
                </div>
        );
}

export default TodoInput;
