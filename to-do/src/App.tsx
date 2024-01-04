import Header from './components/Header/Headet';
import SideBar from './components/SideBar/SideBar';
import TodoList from './components/TodoList/TodoList';
import './App.css'
import './components/Header/header.css';
import { useState } from 'react';
import { Todo } from './model/model';
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onCreateTodo = (todo: Todo) => {
    setTodos((oldTodos) => [...oldTodos, todo]);
  }

  const onremoveTodo = (id: string) => {
    setTodos(oldTodos => oldTodos.map(todo => todo.id === id ? {...todo, done: !todo.done}: todo));
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <SideBar handleCreateTodo={onCreateTodo}/>
        <TodoList todosList={todos} removeTodo={onremoveTodo}/>
      </div>
    </>
  )
}

export default App;
