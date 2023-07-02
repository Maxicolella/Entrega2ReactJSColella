import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Contador from "../components/Contador";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const items = [
    {
      id: '1',
      titulo: "Papa lavada",
      descripcion:
        "La papa lavada proviene del sur de la provincia de Buenos Aires.",
    },
    {
      id: '2',
      titulo: "Lechuga de hoja",
      descripcion:
        "La lechuga de hoja es el producto más vendido, por su calidad inexplicable",
    },
    {
      id: '3',
      titulo: "Calabaza.",
      descripcion:
        "Innumerables beneficios y posibilidades de cocinarlas.",
    },
    {
      id: '4',
      titulo: "Camote.",
      descripcion:
        "Su sabor dulce hace que sea una de las verduras preferidas para aquellos que les gusta lo agridulce.",
    },
    {
      id: '5',
      titulo: "Manzana.",
      descripcion:
        "De su origen desde el sur de Argentina, la manzana no deja de ser el producto más rico en fibras.",
    },
  ];

  useEffect(() => {

    setTimeout(() => {
      const filter = items.find((item) => item.id === id);
      setItem(filter)
      setLoading(false)
    }, 2000);

  },);

  const agregarAlCarrito = () => {
    // agarrar el item y guardar en el state del carrito 
    <Contador/>
    console.log("add")
  }
 

  return (
    <Fragment>
      <button className="btn btn-dark" onClick={() => navigate(-1)}>
        Volver
      </button>
      <hr />
      {loading && <h1>Cargando..</h1>}
      {item && !loading && (
        <div>
          <h1>{item.titulo}</h1>
          <p>{item.descripcion}</p>
          <p>Id es :{item.id}</p>

          <h1>La cantidad actual es: {Contador}</h1>
          <button onClick={agregarAlCarrito} >Agregar al carrito</button>
          
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetail;
