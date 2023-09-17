import { useState, useRef } from "react";
import "./todoForm.sass";

import { addTodoItem } from "../../../services/todoService";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function TodoForm({ liftingNewTodo }) {
  const defaultNewTodo = {
    title: ``,
    bgColor: `#A9CCF3`,
  };
  const [newTodo, setNewTodo] = useState(defaultNewTodo);
  const inputTitle = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.title) {
      inputTitle.current.focus();
      return;
    }

    (async () => {
      let addedTodo = await addTodoItem(newTodo);
      liftingNewTodo(addedTodo);
      setNewTodo(defaultNewTodo);
    })();
  };

  const handleTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const handleBgColor = (e) =>
    setNewTodo((prevState) => ({ ...prevState, bgColor: e.target.value }));

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">Todo title</label>
      <TextField
        label="Enter a name"
        variant="outlined"
        type="text"
        id="todoTitle"
        value={newTodo.title}
        onChange={handleTitle}
        ref={inputTitle}
      />
      <TextField
        type="color"
        label="Choose a color"
        value={newTodo.bgColor}
        onChange={handleBgColor}
      />
      <Button type="submit" variant="outlined">
        Add Item
      </Button>
    </form>
  );
}

export default TodoForm;
