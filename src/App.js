import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import {AsyncPlugins} from './plugins'
import './App.css';

const PrimaryLayout = () => (
  <div className="App">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/plugins">AsyncPlugins</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/plugins" component={AsyncPlugins}/>
  </div>
)


const Home = () => <div>  <h2>Home</h2> </div>

const About = () => <div> <h2>About</h2> </div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout/>
  </BrowserRouter>
)

export default App
