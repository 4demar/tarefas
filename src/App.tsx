import React, { useEffect, useState } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import './styles/index.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  // Carregar tarefas do LocalStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Salvar tarefas no LocalStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
