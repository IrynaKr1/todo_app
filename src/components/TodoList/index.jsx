import React from 'react';
import { mockTodos } from './../../test/mockData.js';
import TodoListItem from '../TodoItem/index.jsx';

function TodoList () {
  return (
    <>
      <div>
        {mockTodos.map(todo => (
          <TodoListItem
            key={todo.id}
            status={todo.status}
            task={todo.task}
            date={todo.date}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
