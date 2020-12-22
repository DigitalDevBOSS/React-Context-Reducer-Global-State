import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';


//use the exported Provider from the specificly created Context file
        //if more than one use as
import { Provider as ExampleProvider } from './Context/ExampleContext/contextExp'
        //then wrap the entire app in the Provider component instead of 



const ToDo_App = (props) => {

        return (
                <ExampleProvider>
                        <TodoInput />
                        <TodoList />
                </ExampleProvider>
        );
}

export default ToDo_App;
