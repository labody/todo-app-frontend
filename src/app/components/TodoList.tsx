"use client";
interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
    description: string;
}

const TodoList = ({ todos }: { todos: Todo[] } ) => {
  return (
<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Todos</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {todos.map((todo) => (
        <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>Blue</td>
      </tr>
        ))}
      
    </tbody>
  </table>
</div>
  );
}

export default TodoList