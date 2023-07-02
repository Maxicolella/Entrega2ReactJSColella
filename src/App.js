import './App.css';
import Rutas from './routes/Rutas';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './routes/firebase.config';
import Formulario from './components/Formulario';
import Cart from './components/Cart';

function App() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState (false);
  const [carrito, setCarrito] = useState ([]);

  const addCarrito = (producto) => setCarrito ([...carrito, producto])

  useEffect (() => {

    const getProductos = async () => {
      setLoading(true)
    try {
      
      const col = collection(db,"producto")
      const data = await getDocs(col)
      const result = data.docs.map (doc => doc={id:doc.id, ...doc.data()})
      setProductos(result)
      setLoading(false)

    } catch (error) {
      console.log (error)
      setLoading(false)
    }
  }
    getProductos()
  },[])

  return (
    <div className="App">
      <Rutas/>
    
    <div style={{display:'flex', alingitems:'center'}}> 
    
      {loading && <h1>Cargando</h1>}

      <div>
        {!loading && productos.length > 0 && productos.map((producto) => (
          <Cart key={producto.id} item={producto} addCarrito={addCarrito} />
        ))}
      </div>

      </div>
    <hr />
      <h1>Carrito tengo {carrito.length}</h1>
    <Formulario/>
      <Footer/>
    </div>
    
  );
}

export default App;