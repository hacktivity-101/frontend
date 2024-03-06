'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskList, setTaskList] = useState([
        { text: 'Do Coding', completed: false },
        { text: 'Play Games', completed: false },
        { text: 'Bring Milk', completed: false },
        { text: 'Bring Milk', completed: false },
    ]);

    const addTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const obj = { text: e.target.value, completed: false };

            setTaskList([obj, ...taskList]);

            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        // console.log(index);
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    const completeTask = (index) => {
        const temp = taskList;
        temp[index].completed = true;
        setTaskList([...temp]);
        console.log(temp);
    }

    return (
        <div className='bg-primary-subtle vh-100'>
            <div className='container py-5'>

                <h1 className='display-3 fw-bold text-center'>Todo List</h1>

                <div className='card shadow'>
                    <div className='card-header py-3'>
                        <input
                            type="text"
                            className='form-control border-primary border-3'
                            onKeyDown={addTask}
                        />
                    </div>
                    <div className='card-body'>

                        {
                            taskList.map((task, index) => {
                                return <div key={index} className='mb-4 d-flex justify-content-between align-items-center'>
                                    <p className='my-auto'>{task.text}</p>
                                    {task.completed ?
                                        <span className='badge bg-success'>Completed</span>
                                        : <span className='badge bg-warning'>Pending</span>}
                                    <button
                                        onClick={() => { deleteTask(index) }}
                                        className='btn btn-danger'>Delete</button>
                                    <button
                                        onClick={() => { completeTask(index) }}
                                        className='btn btn-primary'>Complete Task</button>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;