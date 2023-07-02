import React, { useState } from 'react'

const Formulario = (props) => {

    const {total, compras} = props;

    const [form, setForm] = useState({
    buyer:{
        email:'',
        nombre:'',
        apellido:'',
        telefono:''
    },
    total,
    item: compras
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            buyer:{
                ...form.buyer,
                [name]:value
            }
        })
    }
    
    return (
    <div>
        <form style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}} action="">
            <h1>Formulario.</h1>
            <input onChange = {handleChange} type="text" name='email' placeholder='Email' />
            <input onChange = {handleChange} type="text" name='nombre' placeholder='Nombre' />
            <input onChange = {handleChange} type="text" name='apellido' placeholder='Apellido' />
            <input onChange = {handleChange} type="text" name='telefono' placeholder='Telefono' />
            <button  type='submit'>Comprar.</button>
        </form>
    </div>
  )
}

export default Formulario