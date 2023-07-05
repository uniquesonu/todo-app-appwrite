import React from 'react'

const TodoForm = () => {
  return (
    <div className='text-center'>
    <input type="text" placeholder="Add your todos" className="input input-bordered input-info w-full max-w-xs mr-2" />
    <button className="btn btn-info pr-8 pl-8 ">Add</button>
    </div>
  )
}

export default TodoForm