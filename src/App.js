import React from 'react'
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Singlepost from "./components/Singlepost"
import Post from "./components/Post"
import Project from "./components/Projects"
import Navbar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route component={Home} path='/' exact/>
       <Route component={About} path='/about'/>
        <Route component={Singlepost} path='/post/:slug'/>
         <Route component={Post} path='/post'/>
          <Route component={Project} path='/projects'/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
