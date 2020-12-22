import createDataContext from '../create-data-context';
import reducerExp from './reducerExp';
import actions from './actionsExp'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './typesExp';


//Pass individual context info 

//set a initial state variable
const initialState = {
        todos: [] 
}

export const {Context, Provider } = createDataContext(reducerExp, actions, initialState)

