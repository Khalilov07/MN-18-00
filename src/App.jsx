import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Review from './pages/Review/Review'
import CreateCourse from './pages/CreateCourse/CreateCourse'

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

      {/* Routes - это родитель наших маршрутов */}
      <Routes>
        {/* Route - это маршрут который переносит нас по страницам */}
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={ <Contact />}  path='/contact' />
        <Route element={ <CreateCourse />}  path='/create' />
        <Route element={ <Review />}  path='/review' />
      </Routes>

      <Footer />

    </div>

  );
};

export default App;

// App функция - это компонент