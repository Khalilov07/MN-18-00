import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const App = () => {

  // спрашивать имя у  пользователя, сохранять в переменной и отображать в HTML


  // props = object 
  // { name: "Elimbek" }

  return (

    // div с классом App - это див где вы будете записывать весь HTML code 
    // jsx - нужно разобрать на след уроке (js + html)
    // spa - single page application 

    <div className="App">
      <Header />

      <Routes>
        <Route element={ <Home />} path="/" />
        <Route element={ <About /> } path="/about" />
      </Routes>

      <Footer />

    </div>

  );
};

export default App;

// App функция - это компонент