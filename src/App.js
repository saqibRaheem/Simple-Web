// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Nav from './component/Nav';
import{Routes,Route}from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Services from './component/Services';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Nav/>

    <Routes>
        <Route exect path='/' element={<Home/>} />
        <Route exect path='/contact' element={<Contact/>} />
        <Route exect path='/about' element={<About/>} />
        <Route exect path='/service' element={<Services/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
