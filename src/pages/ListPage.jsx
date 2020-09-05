import React from 'react';
import ToDoList from '../components/ToDoList/ToDoList';
import './ListPage.scss';

const ListPage = () => {

    return (
        <div className="list-page">
            <ToDoList />
        </div>
    )
}

export default ListPage