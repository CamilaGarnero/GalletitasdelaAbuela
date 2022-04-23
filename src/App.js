import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Carrusel from './components/Carrusel';
import CardNew from './components/CardNew';
import Saludo from './components/Saludo';
import Contador from './components/Contador';

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
      <CardNew otroComponente={Saludo}></CardNew>
      <Contador></Contador>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://reactjs.ong"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
