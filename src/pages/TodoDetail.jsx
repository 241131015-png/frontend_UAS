import { useParams } from "react-router-dom";

export default function TodoDetail() {
  const { id } = useParams();
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todo = todos[id];

  if (!todo) return <p>Data tidak ditemukan</p>;

  return (
    <div>
      <h2>Detail Todo</h2>
      <p>Judul: {todo.title}</p>
      <p>Kategori: {todo.category}</p>
    </div>
  );
}
