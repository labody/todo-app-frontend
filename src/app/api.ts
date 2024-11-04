import { ITodo } from '../../types/todos';

const baseUrl = 'http://localhost:3000'; // LoopBack API URL


export const getAllTodos = async (): Promise<ITodo> => {
  const res = await fetch(`${baseUrl}/todos`, {cache: 'no-store'});
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(`${baseUrl}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();
  return newTodo;
}
export const editTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(`${baseUrl}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

// export const updateTodo = async (id, updatedTodo) => {
//   const response = await api.patch(`/todos/${id}`, updatedTodo);
//   return response.data;
// };

// export const deleteTodo = async (id) => {
//   await api.delete(`/todos/${id}`);
// };
