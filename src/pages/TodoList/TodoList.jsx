import React from 'react';
import './style.sass';

import {ITEM_COMPLETED, ITEM_PROGRESS, THEME_MODE_LIGHT, THEME_MODE_DARK} from '../../constans/todoConstans'


export default function TodoList({list, themeMode, onHandleItemComplited}) {
  const itemClass = (item) => {
    const classes = [];
    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);
    return classes.join(` `);
  }

  const themeModeBg = () => themeMode === THEME_MODE_LIGHT ? THEME_MODE_LIGHT : THEME_MODE_DARK;

  return (
    <>
      {list.length 
      ? <table className={`table ${themeModeBg()}`}>
        <thead> 
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {list.map((item) => (
          <tr key={item.id} className='table__item'>
            <td className={`table__item-title ${itemClass(item)}`}>{item.title}</td>
            <td><button onClick={() => onHandleItemComplited(item)}>{item.completed ? 'Delete' : 'Complete'}</button></td>
          </tr>
        ))}
        </tbody>
      </table>  
    : null}
    </>
  )
}
