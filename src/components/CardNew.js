const  CardNew = (props) => {
    return (
        <>
            <div>Componente CardNew</div>
            {props.otroComponente({name:'Axel', edad: 21})}
        </>
    )
}
export default  CardNew