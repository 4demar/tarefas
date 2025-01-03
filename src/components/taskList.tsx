import React from 'react';

interface TaskListProps {
    tasks: string[];
    onDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={() => onDeleteTask(index)}>Remover</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
