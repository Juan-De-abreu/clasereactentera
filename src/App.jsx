    import React from 'react'
    import { BrowserRouter, Route, Routes } from 'react-router-dom'
    import Header from './components/Header'
    import Footer from './components/Footer'
    import Inicio from './pages/Inicio'
    import Movil from './pages/Movil'
    import Laptop from './pages/Laptop'
    import Tienda from './pages/Tienda'
import Detalle from './pages/Detalle'
import Error404 from './pages/Error404'
import Motorcycle from './pages/Motorcycle'
import Categorias from './pages/Categorias'
import Busquedas from './pages/Busquedas'

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='app'>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/Movil" element={<Movil/>}/>
        <Route path="/Laptop" element={<Laptop/>}/>
        <Route path="/Motorcycle" element={<Motorcycle/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
        <Route path="/Categorias/:slug/:name" element={<Categorias/>}/>
        <Route path="/Busquedas" element={<Busquedas/>}/>
        <Route path="/Detalle/:id/:titulo" element={<Detalle/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>

      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App