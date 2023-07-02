import React from 'react'
import ItemCount from './ItemCount'

const Cart = (props) => {
    const {item, addCarrito} = props
    
    return (
        <div>
            <h1>{item.marca}</h1>
            <h2>{item.modelo}</h2>

            <ItemCount  item = {item} addCarrito={addCarrito}/>
    </div>
  )
}

export default Cart