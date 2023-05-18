import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Combos from '../pages/Combos'
import Home from '../pages/Home'
import ItemDetail from '../pages/ItemDetail'
import Navbar from '../components/Navbar'
import Productos from '../pages/Productos'

const Rutas = () => {

    const navbar_items = [
        {
            path:"/",
            name:"Inicio"
        },
        {
            path:"/Productos",
            name:"Productos"
        },
        {
            path:"/combos",
            name:"Combos"
        },
    ]

  return (
    <BrowserRouter>
        <Navbar navbar_items={navbar_items}/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/combos'element={<Combos/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/item/:id' element={<ItemDetail/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas