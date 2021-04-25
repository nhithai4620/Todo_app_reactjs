import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@atlaskit/button';
import Todo from "./Todo";

export default function Todo_List({todoList}){

    return (
        <>{
            todoList.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
        </>

    );
    
}


