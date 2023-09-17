import React, { useState, useEffect } from "react";

import { getTodo, deleteTodoItem } from "../../../services/todoService";
import TodoListItem from "../../../components/TodoListItem/TodoListItem";

import {
  FILTER_RATING_UP,
  FILTER_RATING_DOWN,
} from "../../../constans/constans";

function TodoList({ newTodo, filter }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setList(await getTodo());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    Object.keys(newTodo).length &&
      setList((prevState) => [...prevState, newTodo]);
  }, [newTodo]);

  useEffect(() => {
    const currentFilteredList = list.filter((obj) => obj.rating >= 1);

    switch (filter) {
      case FILTER_RATING_UP:
        const filteredListAsc = currentFilteredList.sort(
          (a, b) => a.rating - b.rating
        );
        setFilteredList(filteredListAsc);
        break;
      case FILTER_RATING_DOWN:
        const filteredListDesc = currentFilteredList.sort(
          (a, b) => b.rating - a.rating
        );
        setFilteredList(filteredListDesc);
        break;
      default:
        setFilteredList(list);
    }
  }, [filter]);

  const handleItemDelete = (id) => {
    (async () => {
      try {
        await deleteTodoItem(id);

        setList((prevState) => prevState.filter((item) => item.id !== id));
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return list.length ? (
    <ul>
      {filteredList.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            handleItemDelete={handleItemDelete}
          />
        );
      })}
    </ul>
  ) : null;
}

export default TodoList;
