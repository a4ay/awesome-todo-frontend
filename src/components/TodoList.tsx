import TodoCard from "./TodoCard";
import "../styles/TodoList.css";

export default function TodoList({todos,deleteTodo,toggleTodo}){
    return(
        <div className="todo-list">

            {todos.map(todo => 
                <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            )}

        </div>
    )
}