import React, { useContext } from 'react';

//if multiple contexts files us 'as'
//Context is returned in create-Context but exported in Named Context file
import { Context as Example} from '../Context/ExampleContext/contextExp'

import TodoItem from './TodoItem';

const TodoList = () => {

        //state is passed as an object as well as actions 
        const {state, actions} = useContext(Example)

        //if more than one state it is an object so...
        const { todos } = state;

        //also get actions
        const { toggleTodo, deleteTodo} = actions;

        return (
                <>
                        {
                                todos.length === 0 || !todos
                                ? 
                                <h4>Nothing to do today!</h4>
                                :
                                <ul>
                                        {todos.map(todo =>
                                                <TodoItem 
                                                        data={todo} 
                                                        key={todo.id} 
                                                        clickToToggle=
                                                                {
                                                                        ()=> 
                                                                        toggleTodo(todo.id)} 
                                                                        clickToDelete={
                                                                                ()=>deleteTodo(todo.id)
                                                                }/>
                                                )
                                        }
                                </ul>  
                        }
                </>
        );
}

export default TodoList;
