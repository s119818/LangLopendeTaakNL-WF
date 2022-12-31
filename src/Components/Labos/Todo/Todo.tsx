import React, {useState} from "react";
import logo from './logo.svg';


export interface TodoItem { 
  name: string;
  completed: boolean;
}

interface AddTodoProps {
  addTodo: (todo: string) => void;
}

export const AddTodo = ({addTodo} : AddTodoProps) => {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
      addTodo(todo);
      setTodo("");
  }

  return (
      <div>
          <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
          <button onClick={handleClick}>Add</button>
      </div>
  );
}

interface TodoListProps {
  todos: TodoItem[];
  markCompleted: (index: number, completed: boolean) => void;
}

export const TodoList = ({todos, markCompleted} : TodoListProps)  => {
  return (
  <div>
      {todos.map((todo, index) => (
          <TodoListItem key={index} todo={todo} markCompleted={(completed) => markCompleted(index,completed)}/>
      ))}
  </div>
  )
}

interface TodoListItemProps {
  todo: TodoItem,
  markCompleted: (completed: boolean) => void;
}

const TodoListItem = ({todo, markCompleted} : TodoListItemProps) => {
  return (
      <div>
          <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(event.target.checked)}/>
          <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
      </div>
  )
}
