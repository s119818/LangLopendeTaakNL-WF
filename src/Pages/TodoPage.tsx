import React, { Fragment, useState } from "react";
import { SlotMachine } from "../Components/Labos/Slots/Slots";
import { AddTodo, TodoItem, TodoList } from "../Components/Labos/Todo/Todo";

export const TodoPage = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
    };
  
    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };
  
    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <TodoList markCompleted={markCompleted} todos={todos}/>
  
        </div>
    );
    
}