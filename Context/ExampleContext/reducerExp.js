import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './typesExp';

const reducerExp = (state, action) => {
        switch (action.type) {
                case ADD_TODO:
                        return {
                                //return full state first to make sure not to change original state
                                ...state,

                                //the payload is set to the new todo  so spread then push the payload (todo)
                                todos: [...state.todos, action.payload]

                        }
                case TOGGLE_TODO:
                        return {
                                ...state,
                                todos: state.todos.map(todo => todo.id === action.payload ?
                                        {...todo, complete: !todo.complete} :
                                        todo
                                )
                        }
                case DELETE_TODO:
                        return {
                                ...state,
                                todos: state.todos.filter(todo => todo.id !== action.payload)
                        }
                default:
                        return state;

        }
}

export default reducerExp