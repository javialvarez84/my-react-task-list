import React from 'react';

const Task = ({ task }) => {
  return (
    <li>
      <span>{task.name}</span>
      <span>{task.completed ? '✔️' : '❌'}</span>
    </li>
  );
};

export default Task;
