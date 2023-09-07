import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    
    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].checked = !updatedTodos[index].checked;
        setTodos(updatedTodos);
    };
    const divStyle = {
        top: '-35px',
        borderTop: 'none', 
        
      };
    return (
        <div className='container'>
            <div className='card mt-5 w-50'>
            <div className="card-header bg-primary py-5">
            </div>
            <div className="card-body mb-5">
            <div className="card mx-5"  style={divStyle}>
                <div className="card-header bg-primary">
                    <h5 className='text-white text-center'>Todo List</h5>
                </div>
                <div className="card-body">
                   
                    <blockquote className="blockquote mb-0">

                        <p>
                        <div className='row'>
                        <div className='col-9 '>
                        <div className="form-floating mb-3">
                            <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="form-control border-0 border-bottom border-primary" id="floatingInput" />
                            <label for="floatingInput">Add New Task</label>
                        </div>
                        </div>
                        <div className='col-3'>
                            <button onClick={handleAddTodo} className='btn btn-primary'>Add</button>
                        </div>
        
                            </div>
                            <ul className='list-unstyled'>
                                {todos.map((todo, index) => (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            checked={todo.checked}
                                            onChange={() => handleToggleTodo(index)}
                                            className='me-2'
                                        />
                                        {todo.text}
                                        <button onClick={() => handleDeleteTodo(index)} className='btn btn-danger float-end'>x</button>
                                        <hr/>
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </blockquote>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default TodoList;
