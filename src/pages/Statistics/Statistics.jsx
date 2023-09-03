import React from 'react';
import './style.sass';

export default function Statistics({list}) {
  return (
    <ul className='statistics'>
      <li>All tasks: <span>{list.length}</span></li>
      <li>Completed tasks: <span>{list.filter(item => item.completed).length}</span></li>
      <li>In progress tasks: <span>{list.filter(item => !item.completed).length}</span></li>
    </ul>
  )
}