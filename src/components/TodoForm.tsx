import { useState } from "react";
import axios from "axios";
import "../styles/TodoForm.css";

export default function TodoForm({addTodo}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [file,setFile] = useState("");
    const [adding,setAdding] = useState(false);

    const submitTodo = async (e)=>{

        e.preventDefault();
        
        //create form data
        const formData = new FormData();
        formData.append("file",file);
        formData.append("title",title);
        formData.append("description",description);

        //clear fields
        setTitle("");
        setDescription("");
        e.target.reset();

        //axios request
        var config = {
            method: 'post',
            url: 'http://localhost:5000/todo/create',
            withCredentials: true,
            data : formData,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
          };
          setAdding(true);
          axios(config as any).then((response)=>{
                const data = response.data;
                addTodo(data);
                setAdding(false);
          })

    }



    const handleFileSelect = (e)=>{
       setFile(e.target.files[0]);
    }

    return (
        <form onSubmit={submitTodo} className="todo-form">
        {(adding)&&<span className={"loading"}>Adding....</span>}

            <h3>Awesome Todo</h3>
            <div>
                <input type="text" onChange={ e => setTitle(e.target.value)} className="title-input" placeholder="Add a title" value={title} />
                <input type="file" name={"file"}  className="image-input" onChange={handleFileSelect}/>
            </div>
            <textarea onChange={e => setDescription(e.target.value)} placeholder="Add a description" value={description}></textarea>
            <button type="submit">Add Todo</button>
        </form>
    )
}