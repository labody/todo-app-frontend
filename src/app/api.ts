import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // LoopBack API URL
});

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

// export const createTodo = async (todo) => {
//   const response = await api.post('/todos', todo);
//   return response.data;
// };

// export const updateTodo = async (id, updatedTodo) => {
//   const response = await api.patch(`/todos/${id}`, updatedTodo);
//   return response.data;
// };

// export const deleteTodo = async (id) => {
//   await api.delete(`/todos/${id}`);
// };
