import React, { Fragment } from 'react'
import Item from '../components/Item'

const Home = () => {

  const items = [
    {
        id:"1",
        titulo:"Papa lavada",
        descripcion:"Precio x kg: $160"
    },
    {
        id:"2",
        titulo:"Lechuga de hoja",
        descripcion:"Precio x kg: $ 1.000."
    },
    {
        id:"3",
        titulo:"Calabaza",
        descripcion:"Precio x kg: $ 300."
    },
    {
        id:"4",
        titulo:"Camote.",
        descripcion:"Precio x kg: $ 500."
    },
    {
      id:"5",
      titulo:"Manzana.",
      descripcion:"Precio x kg: $ 300"
    }
]


  return (
    <Fragment>
    <h1>Inicio.</h1>
    <div className='d-flex my-5'>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
    </Fragment>
  )
}

export default Home