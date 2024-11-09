
import { ITodo } from '../../types/todos';

 // LoopBack API URL
 const baseUrl = 'http://localhost:3000';

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
  const res = await fetch(`${baseUrl}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (todo: ITodo) : Promise<void> => {
  const res = await fetch(`${baseUrl}/todos/${todo._id}`, {
    method: 'DELETE',
  })
};
