import React from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Mesero from './pages/Mesero/Mesero'
import Menu from './pages/Menu/Menu'
import Cocina from './pages/Cocina/Cocina'
import Administrador from './pages/Administrador/Administrador'
import Error from './pages/Error/Error'
import { Routes, Route} from "react-router-dom";
import Ventas from './pages/Ventas/Ventas'

const App = () => {
  return (
    <div className="App">
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/mesera" element={<Mesero/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/cocina" element={<Cocina/>} />
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ventas" element={<Ventas/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App