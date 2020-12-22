import React, {createContext, useReducer} from 'react';

//creates data context automatically
        //1st thing that changes is reducer, next are helper dispatch functions, 3. initial state
export default (reducer, actions, initialState) => {
        // create a context object
        const Context = createContext()

        //set up provider function
        const Provider = ({ children }) => {
                //set a general reduer
                const [state, dispatch] = useReducer(reducer, initialState)

                //actions is expected to be an object
                //actions === { ACTION_NAME: (dispatch)=> {}}
                        //loop through action, for each key in actions object a function that expects dispatch is called
                //create a general bound actions object
                const boundActions = {};

                //do a for loop of the actions object passed, for each key in that object,
                        //the key name is set as a key in the boundActions object
                for (let key in actions) {
                        //each key in actions then is passed the dispatch function so actions have access
                        boundActions[key] = actions[key] (dispatch)

                }


                //return jsx
                return (
                        //pass general state into value and actions
                        <Context.Provider value={{ state: state, actions: {...boundActions}}}>
                                {children}
                        </Context.Provider>
                )
        }


        //pass these to needed
        return {Context, Provider}
}