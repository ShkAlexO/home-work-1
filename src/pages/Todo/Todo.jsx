import React, {useState} from 'react';
import ThemeMode from '../ThemeMode/ThemeMode';
import Statistics from '../Statistics/Statistics';
import TodoList from '../TodoList/TodoList';
import './style.sass';

const dataList = [{"title":"incidunt numquam alias","completed":true,"rating":26,"id":"4"},{"title":"eligendi porro voluptates","completed":true,"rating":68,"id":"5"},{"title":"rerum accusantium fugiat","completed":true,"rating":34,"id":"6"},{"title":"eligendi ipsum distinctio","completed":false,"rating":22,"id":"7"},{"title":"reiciendis neque amet","completed":true,"rating":83,"id":"8"},{"title":"ipsum laudantium asperiores","completed":true,"rating":91,"id":"9"},{"title":"rem tempora fugit","completed":false,"rating":51,"id":"10"},{"title":"Todo 89898","completed":false,"rating":47,"id":"11"},{"title":"Todo Hello","completed":true,"rating":7,"id":"12"},{"title":"Todo 3000","completed":false,"rating":79,"id":"13"},{"title":"Todo Success","completed":true,"rating":69,"id":"14"},{"title":"Todo NEW!!!!","completed":false,"rating":6,"id":"16"}];


export default function Todo() {
  const [list, setList] = useState(dataList);
  const [themeMode, setThemeMode] = useState('light')

  const handleTheme = (event) => setThemeMode(event.target.value);

  const handleItemComplited = (item) => {
    if (item.completed) {
      const updatedList = list.filter(obj => obj.id !== item.id);
      setList(updatedList);
    } else {
      const updatedList = list.map(obj => {
        if (obj.id === item.id) {
          return { ...obj, completed: true };
        }
        return obj;
      });
      setList(updatedList);
    }
  }

  return (
    <div className='todo'>
      <ThemeMode defaultValue={themeMode} onChange={handleTheme} />
      <Statistics list={list} />
      <TodoList list={list} themeMode={themeMode} onHandleItemComplited={handleItemComplited}/>
    </div>
  )
}