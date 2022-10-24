import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListConteiner greeting="Mensaje de prueba"/>
    </div>
  );
}

export default App;
