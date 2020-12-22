import React from 'react';

const TodoItem = ({data, clickToToggle, clickToDelete}) => {
        const {text, complete} = data;
        console.log(data)
        
        return (
                <div>
                        <h3>{text}</h3>
                        {
                                complete
                                ? <h5>true</h5>
                                : <h5>false</h5>
                        }
                        <div>
                                <button className={StyleSheet.todoItem__toggleBtn} onClick={clickToToggle}>O</button>
                                <button className={StyleSheet.todoItem__deleteBtn} onClick={clickToDelete}>X</button>
                        </div>
                        
                </div>
        );
}

export default TodoItem;
