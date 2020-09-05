import React from 'react';
import FlipMove from 'react-flip-move';

const ToDoItems = ({ entries, remove }) => {    
    const createTasks = (item) => {
        return (
            <li onClick={() => remove(item.key)} className="todoListMain-item" key={item.key}>{item.text}</li>
        );
    }

    const listItems = entries.map(createTasks);

    return (
        <ul className="todoListMain-list">
            <FlipMove duration={250} easing="ease-in">
                {listItems}
            </FlipMove>
        </ul>
    )
}

export default ToDoItems;