import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Carrusel from './components/Carrusel';
import ItemDetailContainer from './components/ItemDetailContainer';


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
      <ItemDetailContainer/>
      <ItemListContainer titulo="Nuestra seccion salada"/>
    </div>
  );
}

export default App;
