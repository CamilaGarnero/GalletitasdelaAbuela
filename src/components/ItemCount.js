import React, { useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    function handleAdd(){
        if (count <= props.stock){
            console.log('se esta sumando')
            setCount(count + 1)
        }
        
    }

    function handleSubstrack() {
        if(count >= props.initial){
            console.log('se esta restando')
            setCount(count - 1)
        } 
    }
    const style = {
        itemcount: "text-black hover:bg-yellow-600",
        number:"text-yellow-700 bg-white"
    }
    return (
        <div className="bg-emerald-600 w-1/4">
            <div>
                <button onClick={handleSubstrack} className={style.itemcount}>-</button>
                <span className={style.number}> {count} </span>
                <button onClick={handleAdd} className={style.itemcount}>+</button>
            </div>
            <div>
                <button className={style.itemcount}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount