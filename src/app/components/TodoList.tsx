"use client";

import { ITodo } from "../../../types/todos";
import Todo from "./Todo";

interface TodoListProps {
   todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos}) => {
  return (
<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>No.</th>
        <th>TODOS</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
        {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
        )
         )}
      
    </tbody>
  </table>
</div>
  );
}

export default TodoList