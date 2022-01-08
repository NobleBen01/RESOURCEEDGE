import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
// import Reset from './pages/Reset'

function App()  {
   
     return (
         <>
    <Router>
        
            <Switch>
                <Route exact path= "/">
                    <Home />
                </Route>
                <Route path= "/login">
                    <Login />
                </Route>
                <Route path= "/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
    </Router>
    </>
    );
}

export default App
