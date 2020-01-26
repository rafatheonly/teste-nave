import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Menu from './components/Menu'
import Home from './components/Home'
import Users from './components/Users'
import Detalhes from './components/Detalhes'
import User from './components/User'

function App() {
  return (
    <Router>
      <Menu />      
        <Route path="/" exact component={Home} />      
        <Route path="/users/" component={Users} />
        <Route path="/detalhes/:id" component={Detalhes} />
        <Route path="/user/" component={User} />
    </Router>
  );
}

export default App;
