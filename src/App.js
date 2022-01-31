import React, { useState, useEffect } from "react";
import "./App.css";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //inputText is the value of user input in the box, and the setInputText is the function
  //that will allow you to change the value of inputText
  //the useState is what lets react identify the change
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //functions and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>frontendAMA's Todo List </h1>
      </header>
      {/* //this gives access to the setInputText in the Form component //after you
      add this, add "props" to form */}
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
