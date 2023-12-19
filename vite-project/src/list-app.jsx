import React, {useState} from 'react'


const Item=({nombre, visto})=>{
    return <li>{nombre} {visto? "✅":"❌"} </li>

}


const ListApp = () => {


    let listadoSecciones =[
        {nombre:"One", visto:true},
        {nombre:"Two", visto:true},
        {nombre:"Three", visto:true},
        {nombre:"Four", visto:true},
        {nombre:"Five", visto:false}
    ]

    const [arreglo,setArreglo]=useState(listadoSecciones)

    addTask=()=>{
        setArreglo([...arreglo, {nombre:"New", visto:false}])
    }


    return (
        <div className="contenedor">
            <h1>ListApp</h1>
            <ol>
                {arreglo.map((item, index) => (
                    <Item key={index} nombre={item.nombre} visto={item.visto}></Item>
                ))}
                
            </ol>

            <button onClick={()=> addTask()}>Agregar elemento</button>
            
        </div>
    )
}  

export default ListApp

