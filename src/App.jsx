
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx'; 
import {ItemCount} from './components/ItemCount/ItemCount.jsx';
import ItemList from './components/ItemListContainer/ItemList';



function App() {
  
  
  const onAdd = (count) => {
    console.log (`el numero agregado es ${count}`)
  }
  const name ='Productos' 

  return (
    
        <div className="App">
          <NavBar/>
            <ItemListContainer title="Tienda online"/>
            
            <ItemList/>
            
        </div>
  );
  
}
export default App;

//<ItemCount stock ={5} initial={1} onAdd = {onAdd}/>