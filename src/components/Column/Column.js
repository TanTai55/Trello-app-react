import React from 'react';
import './Column.scss';
import Task from '../Task/Task';


const Column = () => {
  return (
    <>
      <div className="column">
          
          <ul className='task-list'>
            <Task/>
            <li className='task-item'>second</li>
            <li className='task-item'>third</li>
            <li className='task-item'>second</li>
            <li className='task-item'>third</li>
            <li className='task-item'>second</li>
            <li className='task-item'>third</li>
            <li className='task-item'>second</li>
            <li className='task-item'>third</li>
            <li className='task-item'>second</li>
            <li className='task-item'>third</li>
            <li className='task-item'>second</li>
            <li className='task-item'>third</li>
          </ul>
         
      </div>
    </>
  )
}

export default Column