import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Stats.css"

export default function Stats(){

    const [todos,setTodos] = useState([]);
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

    return(
        <section className="stats-section">
            <h1>Your Montly Records</h1>
        </section>
    )

}