// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load dari localStorage saat mount
  useEffect(() => {
    const saved = localStorage.getItem('todoApp_todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Simpan ke localStorage saat todos berubah
  useEffect(() => {
    localStorage.setItem('todoApp_todos', JSON.stringify(todos));
  }, [todos]);

  // Logika CRUD
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };
  
  // ➡️ FUNGSI BARU: Hapus semua yang sudah selesai
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="page-container">
      <h1>📝 Tugas Harian</h1>

      <TodoForm addTodo={addTodo} />

      {/* Filter Buttons dan Tombol Clear Completed */}
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Semua</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Aktif</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Selesai</button>
        
        {/* ➡️ TOMBOL BARU */}
        <button onClick={clearCompleted} className="btn-clear">Hapus Selesai</button>
      </div>

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="status">Tidak ada todo yang ditemukan.</p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        )}
      </div>

      <p className="count">{todos.filter(t => !t.completed).length} todo belum selesai</p>
    </div>
  );
}