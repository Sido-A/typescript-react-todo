import React, { useRef } from "react";
import "../NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="todo-text">Todo Text</label>
      <div className="form-group">
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewTodo;
