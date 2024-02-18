import './App.css'
import NavBar from './components/NavBar/NavBar'
import Cartwidget from './components/CartWidget/Cartwidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailcontainer'


function App() {


  return (
    <>
    <NavBar/>
    <Cartwidget/>
    <ItemListContainer greeting={"Seleccione sus productos"}/>
    <ItemDetailContainer id={0}/>

    </>
  )
}

export default App
