import React, {useState} from 'react'

const ItemCount = (props) => {
    const {item, addCarrito} = props
    
    const [counter, setCounter] = useState(0);

    const handelSumar = () => setCounter (counter + 1)
    const handelRestar = () => setCounter (counter - 1)


  return (
    <div>
        <div>
         <button>-</button>   
        </div>
        <div>
            Cantidad: {counter}
        </div>
        <div>
            <button>+</button>
        </div>
        <div>
            <button onClick={() => addCarrito({...item, counter})}> Agregar al carrito. </button>
        </div>
    </div>
  )
}

export default ItemCount