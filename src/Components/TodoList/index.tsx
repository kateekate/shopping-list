import React, { useState } from "react";
import styles from "./todoList.module.css";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "First task", completed: false },
    { id: 2, text: "Second task", completed: false },
  ]);
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  return (
    <div className={styles.mainContainer}>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <li
            className={styles.todoItem}
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        className={styles.input}
        type="text"
        placeholder="add text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button className={styles.button} onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
