import React, { useEffect, useState, createContext } from 'react';
import Login from "./Login";
import axios from 'axios';
import Todo from './Todo';
import Header from './Header';
import { Route } from 'react-router-dom';
import Stats from './Stats';
export const CookieContext = createContext("cookie");

function App() {

  const [user, setUser] = useState({});
  const [cookies,setCookies] = useState({});
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:5000/auth/login/success',
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    };

    axios(config as any)
      .then(function (response: any) {
        if(response.data.success){
          setUser(response.data.user);
          setCookies(response.data.cookies);
          setAuthenticated(true);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });

  },[])

  const logout = ()=>{
    window.open("http://localhost:5000/auth/logout", "_self");
  }



  return (
    <div className="App">
      {
        !authenticated ?
        <Login /> :
        <>
          <CookieContext.Provider value={cookies as any}>
            <Header user={user} logout={logout} />
            <Route path="/" exact>
              <Todo />
            </Route>
            <Route path="/stats" exact>
              <Stats/>
            </Route>
          </CookieContext.Provider>
        </>
      }
    </div>
  );
}

export default App;
