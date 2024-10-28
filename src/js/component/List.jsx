import React, { useState } from "react";

const List = () => {
    const [inputValue, setInputValue] = useState('');
    const [listTask, setListTask] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setListTask(prev => prev.concat(inputValue));
            setInputValue(e.target.value = '');
        }
    }
	
    const hiddenMenssageError = () => document.querySelector('.message-error').classList.add('visually-hidden');
    
    return (
		<div className='bg-info bg-opacity-10 border border-info rounded p-5'>
            <div>
            <h1 className="text-center">Task</h1>
                <input
                    type="text"
                    id="task"
                    className="form-control border-light bg-transparent"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onClick={hiddenMenssageError}
                    placeholder="Add a New Task"
                />
            </div>
            <div className='message-error visually-hidden'>Enter some task</div>
            <div className="show-task mt-4">
                <ul className="list-task">
                    {listTask.map((task, index)=> (
                        <li key={index} className="task-item">
                            <span>🍃</span> {task}
                            <button className="btn btn-danger" onClick={() => {
                                const newArr = listTask.filter(taskOut => taskOut != task);
                                setListTask(newArr);
                            }}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
		</div>
	);
};

export default List;
