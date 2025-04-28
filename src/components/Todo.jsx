import React, { useState } from 'react'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTem } from '../redux/actions';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

function Todo() {

    const [newTodo, setNewTodo] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();

    const handleTodo = (text) => {
        dispatch(addTodo(text))
    }

    const handleSearchTerm = (value) => {
        setSearchTerm(value)
        dispatch(updateSearchTem(value))
    }

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            handleTodo(newTodo.trim())
            setNewTodo("")
        }
    }

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-8 bg-gray-100 rounded'>

            <h2 className='text-center text-xl font-bold mt-3 mb-6 uppercase'>Personal Todo App</h2>

            <div className='flex items-center mb-4'>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" name='addTodoInput' id='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2  border-gray-300 focus:outline-none focus:border-blue-500 bg-white' />
                <button onClick={handleAddTodo} className='ml-4 p-2 bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none'>
                    <BsPlus className='w-6 h-6' />
                </button>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <FilterButton />
                <div className='flex items-center mb-4 mt-4 sm:mt-0'>
                    <input value={searchTerm} onChange={(e) => handleSearchTerm(e.target.value)} type="text" name='addTodoInput' id='addTodoInput' placeholder='search' className='flex-grow p-2 border-b-2  border-gray-300 focus:outline-none focus:border-blue-500 bg-white' />
                    <button onClick={handleAddTodo} className='ml-4 p-2 bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none'>
                        <BsSearch className='w-6 h-6' />
                    </button>
                </div>
            </div>

            <TodoList />
            
        </div>
    )
}

export default Todo