import './App.css';
import Rutas from './routes/Rutas';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './routes/firebase.config';
import Formulario from './components/Formulario';

function App() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState (false);

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
      {!loading && productos.length > 0 && productos.map((producto) => <li key={producto.id}>{producto.nombre}</li>)}
    
    </div>
    <hr />
    <Formulario/>
      <Footer/>
    </div>
    
  );
}

export default App;