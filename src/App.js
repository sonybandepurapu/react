import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/body/Home';
import About from './components/body/about';
import Service from './components/body/services';
import Contact from './components/body/contact';


function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path='/React-Website' exact Component={Home}/>
        <Route path='about' exact Component={About}/>
        <Route path='services' exact Component={Service}/>
        <Route path='contact' exact Component={Contact}/>
      </Routes>
     </Router>
<Footer/>
    </div>
  );
}

export default App;

