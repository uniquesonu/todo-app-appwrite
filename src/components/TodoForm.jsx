import React from 'react'

const TodoForm = () => {
  return (
    <div className='text-center w-full'>
    <input type="text" placeholder="Add your todos" className="input input-bordered input-info max-w-xs mr-2" />
    <button className="btn btn-info pr-4 pl-4 ">Add</button>
    </div>
  )
}

export default TodoForm