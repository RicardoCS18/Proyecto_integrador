import './App.css';
import About from './Views/Views/About';
import Landing from './Views/Views/Landing';
import Navigation from './Views/Views/Navigation';
import Detail from './Views/Views/Detail';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/favorites';


function App() {
   
   const navigate = useNavigate();
   const [access,setAccess] = useState(false);
   let EMAIL ="ricardog.carreras@gmail.com"
   let PASSWORD ="123456"
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {window.alert("Invalid credentials")}
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   function handleLogOut() {
      setAccess(false);
   };
   let location = useLocation();
   let [characters, setCharacters] = useState([]);
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         
         if (data.data.name) {
            if (characters.filter((el)=> el.id === data.data.id).length >= 1) {window.alert("Ya tienes este personaje")}
            else {setCharacters((oldChars) => [...oldChars, data.data]);}
         } 
      })
      .catch((error) => {window.alert('¡No hay personajes con este ID!');});
   }

   function onClose(id){
      setCharacters((oldChars) => [...(oldChars.filter((x)=> x.id !== Number(id)))])
   }
   function onRandom(){
      let randomId = Math.floor(Math.random()*1000)
      if (randomId>0 && randomId<=826){
      onSearch(randomId);}
      else {onRandom();}
   }
   if (location.pathname!=="/") {return (
      <div className='App'>
          <Nav onSearch={onSearch} onRandom={onRandom}/>
            <Navigation handleLogOut={handleLogOut} />
         <Routes>
            <Route path="/" element={<Landing login={login} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );} 
   else {return (
      <div className='App'>
         <Routes>
            <Route path="/" element={<Landing login={login} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   )}
   
}

export default App;
