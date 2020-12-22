import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './typesExp';


//create an object and pass it all needed functions
//notice this is more like redux in that  all the objects values are a 
//function that is passed in 'dispatch' from the universal context creator
//then that function returns another function which takes in any other passed variables
//finally that function calls the dispatch methough and is passed the action object consisting of type and payload
export  default {
        //Add todo
        addTodo : (dispatch) => {
                return (todo) =>{
                        dispatch({
                                type: ADD_TODO,
                                //payload is a todo as the action adds one
                                payload: todo
                        })
                }
        },

        //Toggle a todo
        toggleTodo : (dispatch) => {
                return (todoID) =>{
                        dispatch({
                                type: TOGGLE_TODO,
                                payload: todoID
                        })
                }
        },

        //Delete todo
        deleteTodo : (dispatch) => {
                return (todoID) =>{
                        dispatch({
                                type: DELETE_TODO,
                                payload: todoID
                        })
                }
        }
}
