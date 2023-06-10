import React, { Fragment } from 'react'
import Item from '../components/Item'

const Home = () => {

  const items = [
    {
        id:"1",
        titulo:"Papa lavada",
        descripcion:"Precio x kg: $160",
        img:"./imagenes/papa_lavada.jpg"
    },
    {
        id:"2",
        titulo:"Lechuga de hoja",
        descripcion:"Precio x kg: $ 1.000.",
        img:"./imagenes/lechuga_de_hoja..jpg"
    },
    {
        id:"3",
        titulo:"Calabaza",
        descripcion:"Precio x kg: $ 300.",
        img:"./imagenes/Calabaza..png"
    },
    {
        id:"4",
        titulo:"Camote.",
        descripcion:"Precio x kg: $ 500.",
        img:"./imagenes/Camote.jpg"
    },
    {
      id:"5",
      titulo:"Manzana.",
      descripcion:"Precio x kg: $ 300",
      img:"./imagenes/manzana..png"
    }
]


  return (

    <Fragment>
    
    <h1>Inicio.</h1>
    <div style={{display:'flex', flexDirection:'column', justifyItems:'center', justifycontent:'space-around'}}>
     
      <div className='d-flex my-3'>
        {items.map((item) => (
          <Item key={item.id} {...item}/>
        ))}
      </div>
    </div>

    </Fragment>
  )
}

export default Home