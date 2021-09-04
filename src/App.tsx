import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export interface IState {
  tasks: {
    name: string
    notes?: string
    completed: boolean
    id: number
  }[] | []
}

function App() {
  const [tasks, setTasks] = useState<IState["tasks"]>([])

  useEffect(() => {
    const list = localStorage.getItem('tasks')
    if (list) {
      setTasks(JSON.parse(list))
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
      <h1>Tasks:</h1>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
