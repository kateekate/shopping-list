import axios from "axios";

const BASE_URL = "http://localhost:9000";

const getAllTodo = async () => {
  const result = await axios.get(`${BASE_URL}/api/todo`);
  return result.data;
};
const createTodo = async (title: string) => {
  const result = await axios.post(`${BASE_URL}/api/todo`, { title });
  return result.data;
};
const updateTodo = async (id: number, body: string | number) => {
  const result = await axios.put(`${BASE_URL}/api/todo?id=${id}`, body);
  return result.data;
};
const removeTodo = async (id: number) => {
  const result = await axios.delete(`${BASE_URL}/api/todo?id=${id}`);
  return result.data;
};

export { getAllTodo, createTodo, updateTodo, removeTodo };
