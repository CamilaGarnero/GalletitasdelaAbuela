import ItemCount from './components/ItemCount';
const ItemDetail = ({productos}) => {
    return(
        <div>
            <div>
                <div>
                </div>
                <h3>{productos.title}</h3>
                <p>{productos.descrption}</p>
                <span><h2>{productos.price}</h2></span>
                <ItemCount stock={19} initial={1}/>
            </div>
        </div>
    )
}
export default ItemDetail