import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import TodoFilter from "./TodoForm/TodoFilter/TodoFilter";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Todo() {
  const [newTodo, setNewTodo] = useState([]);
  const [filter, setFilter] = useState([]);

  return (
    <Container maxWidth="sm" sx={{ py: "50px" }}>
      <Box
        component="div"
        sx={{ padding: "50px 25px", backgroundColor: "#a3ddff" }}>
        <TodoForm liftingNewTodo={setNewTodo} />
        <TodoFilter liftingFilter={setFilter} />
        <TodoList newTodo={newTodo} filter={filter} />
      </Box>
    </Container>
  );
}

export default Todo;
