import React, { useState } from 'react';

interface TaskFormProps {
    onAddTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TaskForm;
