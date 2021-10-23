import { useEffect,useState } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../styles/Todo.css";


export default function Todo(){

    const [todos,setTodos] = useState([]);

    const addTodo = (todo)=>{
        setTodos( prevTodo => prevTodo.concat(todo));
    }

    const deleteTodo = (id)=>{
        console.log(id);
        const newTodo = todos.filter((todo:any)=> (todo._id !== id));
        setTodos(newTodo);
    }

    const toggleTodo = (id) => {
        const updatedTodo = todos.map((todo:any)=>{
            if(todo._id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos(updatedTodo as any);
    }

    useEffect(()=>{

        var config = {
            method: 'get',
            url: 'http://localhost:5000/todo/get',
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
          };

          axios(config as any)
            .then((response)=>{
                const data = response.data;
                setTodos(data as any);
                console.log(data);
            })
        
    },[])


    return (
        <section className="todo-section">

            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

        </section>
    )

}