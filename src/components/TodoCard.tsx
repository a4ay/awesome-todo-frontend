import "../styles/TodoCard.css";
import axios from "axios";

export default function ({todo,deleteTodo,toggleTodo}) {

    const deleteHandler = (id)=>{
        console.log(id);
        var config = {
            method: 'delete',
            url: 'http://localhost:5000/todo/delete/?id='+id,
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
        };
        axios(config as any);
        deleteTodo(id);

    }
    const toggleHandler = (id)=>{
        var config = {
            method: 'put',
            url: 'http://localhost:5000/todo/update/?id='+id,
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
        };
        axios(config as any);
        toggleTodo(id);
    }
    return (
        <div className="todo-card">
            <div className="todo-img" style={{backgroundImage : `url("${todo.image}")`}}></div>
            <div className="todo-details">
                <div className="todo-text">
                    <h3 className="todo-title">{todo.title}</h3>
                    <p className="todo-description">{todo.description}</p>
                    <span>Status : {todo.completed ? "Complete" : "Incomplete"}</span>
                </div>
                <div className="todo-controls">
                    <button onClick={()=>toggleHandler(todo._id)} className="todo-status">{todo.completed ? "Complete" : "Incomplete"}</button>
                    <button onClick={()=>deleteHandler(todo._id)} className="todo-delete">Delete</button>
                </div>
            </div>
        </div>
    )
}