import React from 'react'

const ItemList = ({productos}) => {
  return (
      <>
        {productos.map(thisproducto => {
            return (
                <div>
                    <h1>{thisproducto.title}</h1>
                    <p>{thisproducto.description}</p>
                    <h4>${thisproducto.price}</h4>
                    <br/>
                    <hr/>
                </div>
            )
        })}
      </>
  )
}

export default ItemList