import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  return(
    <div className="App">
      <header>
      <h1>Todo List Project </h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;