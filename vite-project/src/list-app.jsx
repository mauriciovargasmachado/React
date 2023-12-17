
const Item=({nombre, visto})=>{
    return <li>{nombre} {visto? "✅":"❌"} </li>

}


const ListApp = () => {

    return (
        <div className="contenedor">
            <h1>ListApp</h1>
            <ol>
                <Item nombre ="One" visto={true}></Item>
                <Item nombre ="Two" visto={true}></Item>
                <Item nombre ="Three" visto={true}></Item>
                <Item nombre ="Four" visto={false}></Item>
                <Item nombre ="Five" visto={false}></Item>
            </ol>
            
        </div>
    )
}  

export default ListApp

