import React, { useState } from 'react';
import TodoItems from '../ToDoItems/ToDoItems';
import './ToDoList.scss';

const ToDoList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        if (inputValue !== '') {
            const newItem = {
                text: inputValue,
                key: Date.now (),
            };

            setItems(items.concat(newItem))
        }
        setInputValue('')
    }

    const deleteItem = (key) => {
        const filteredItems = items.filter (function (item) {
            return item.key !== key;
        });
        setItems(filteredItems);
    }

    return (
      <div className="todoListMain">
        <div className="todoListMain-header">
          <form onSubmit={e => addItem(e)}>
            <input
                autoFocus
                className="todoListMain-input"
                onChange={e => setInputValue(e.target.value)}
                placeholder="Enter a task"
                value={inputValue}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={items} remove={deleteItem} />
      </div>
    )
}

export default ToDoList;