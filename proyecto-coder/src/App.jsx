import './App.css'
import Body from './components/Body/Body'
import NavBar from './components/NavBar/NavBar'
import Cartwidget from './components/CartWidget/Cartwidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {


  return (
    <>
    <NavBar/>
    <Body/>
    <Cartwidget/>
    <ItemListContainer greeting={"Seleccione sus productos"}/>



    </>
  )
}

export default App
