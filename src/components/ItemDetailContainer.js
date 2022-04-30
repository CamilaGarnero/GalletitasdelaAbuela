import {useEffect, useState} from 'react';
import productos from "../data/productcard";
import ItemDatail from './ItemDatail';

function getProducts () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    });
}

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getProducts().then(respuestaPromesa => {
          setProductos(respuestaPromesa);
      });
    }, []);
    
    return (
        <>
            <ItemList productos={productos}/>
        </>
    )
}
export default ItemDetailContainer