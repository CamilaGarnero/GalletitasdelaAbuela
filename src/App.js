import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Carrusel from './components/Carrusel';
import ItemCount from './components/ItemCount';
/*  import CardNew from './components/CardNew';
import Saludo from './components/Saludo';*/

function App() {
  const styles = {
    header:"text-3xl font-bold text-yellow-600"
  }

  return (
    <div className="App">
      <NavBar/>
      <Carrusel/>
      <h1 className={styles.header}>Bienvenidos a la cocina de la Nona</h1>
      <ItemListContainer titulo="Nuestras dulzuras"/>
      <ItemListContainer titulo="Nuestra seccion salada"/>
      <ItemCount stock={19} initial={1}/>
    </div>
  );
}

export default App;
