import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo, markAllCompeted } from '../redux/actions';

function FilterButton() {

    const dispatch = useDispatch();

    const currentFilter = useSelector((state) => state.filter)

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter))
    }

    return (
        <div className='flex space-x-4  items-center'>
            <select value={currentFilter} onChange={(e) => handleFilter(e.target.value)}
                className='text-sm px-4 py-2 rounded border border-gray-300 focus:outline-none bg-white'>
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
                <option value="TEST">Test</option>
            </select>
            <button
                onClick={() => dispatch(markAllCompeted())}
                className='text-sm px-4 py-2 bg-emerald-600 text-white ml-2 rounded font-semibold'>Mark All Completed</button>
        </div>
    )
}

export default FilterButton