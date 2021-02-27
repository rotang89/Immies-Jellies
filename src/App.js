import './App.css';
import React from 'react';
import Navbar from './components/Navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Menu from './pages/menu.js';
import Gallery from './pages/gallery.js'
import Footer from './components/Footer/footer.js'
import {main} from './Data.json'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/menu' component={Menu} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      < Footer data={main}/>
    </div>
  );
}

export default App;
