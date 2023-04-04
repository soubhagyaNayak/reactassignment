import React from "react";
import TodoForm from './todoform'
import { useState } from "react";
import Todolist from "./todolist";

function App() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [editid, setEditid] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editid) {
            // const editTodo = todos.find((i) => i.id === editid)
            const updateTodo = todos.map((t) => t.id === editid
                ? (t = { id: t.id, todo }) : { id: t.id, todo: t.todo })

            setTodos(updateTodo);
            setEditid(0)
            setTodo("")
            return;
        }


        if (todo !== '') {
            setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
            setTodo("")



        }

    }
    const handleDelete = (id) => {
        const delTodo = todos.filter((e) => e.id !== id)
        setTodos([...delTodo])

    }
    const handleEdit = (id) => {
        const editTodo = todos.find((to) => to.id === id)
        setTodo(editTodo.todo)
        setEditid(id)
    }
    return (
        <div className="App">
            <h1 style={{ display: "flex", justifyContent: "center" }}>Todo List App</h1>
            <TodoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} editid={editid} />
            <Todolist todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />

        </div>
    );
}

export default App;