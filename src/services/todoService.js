import axios from "axios";

const API = `https://64fdb2d8596493f7af7e766e.mockapi.io/todo`;

const getTodo = () => axios(API).then(({ data }) => data);

const deleteTodoItem = (id) =>
  axios.delete(API + `/${id}`).then(({ data }) => data);

const addTodoItem = (item) =>
  axios
    .post(API, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

export { getTodo, deleteTodoItem, addTodoItem };
