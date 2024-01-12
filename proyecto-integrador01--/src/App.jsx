import React from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';

const tasks = [
  { id: 1, name: 'Tarea 1', completed: false },
  { id: 2, name: 'Tarea 2', completed: true },
];

function App() {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
