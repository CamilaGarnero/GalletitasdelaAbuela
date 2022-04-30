import React from 'react'

const Item = ({productos}) => {
    return(
        <div>
            <div>
                <div>
                </div>
                <h3>{productos.title}</h3>
                <p>{productos.descrption}</p>
                <span><h2>{productos.price}</h2></span>
            </div>
        </div>
    )
}

export default Item