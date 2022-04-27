import {useEffect, useState} from 'react';
import productos from "../data/productcard";
import ItemList from './ItemList';

function getProducts () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    });
}

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getProducts().then(respuestaPromesa => {
          setProductos(respuestaPromesa);
      });
    }, []);
    
    return (
        <>
            <div>{props.titulo}</div>
            <ItemList productos={productos}/>
        </>
    )
}
export default ItemListContainer