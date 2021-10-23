import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "../styles/Stats.css"


export default function Stats(){

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","oct","Nov","Dec"];
    const [data,setData] = useState([]);

    const [ state, setState ] = useState({
        labels: months,
        datasets: [
          {
            label: "Todo Stats",
            backgroundColor: "#00ff00",
            borderColor: "#555555",
            borderWidth: 1,
            data: data,
          },
        ],
      });

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

          const response = axios(config as any)
            .then((response)=>{
                const data = response.data;
                setTodos(data as any);
                formatData(response.data);
            })
        
    },[])

    const formatData = (dt)=>{
        let d:Array<number> = [];
        for(let i = 0; i < 12; ++i){
            d.push(0);
        }
        dt.forEach( (todo:any) => {
            const m = new Date(todo.createdAt);
            
            d[m.getMonth()] = d[m.getMonth()]+1;
            
        })
        console.log(d);
        setData(d as any);
        setState({
            labels: months,
            datasets: [
              {
                label: "Todo Stats",
                backgroundColor: "#00ff00",
                borderColor: "#555555",
                borderWidth: 1,
                data: d as any,
              },
            ],
          })
    }

    return(
        <section className="stats-section">
            <h1>Your Montly Records</h1>
            <Line data={state} />
        </section>
    )

}