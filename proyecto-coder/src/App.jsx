import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailcontainer'
import Cartwidget from './components/CartWidget/Cartwidget' 
import Error from './components/Error/Error'
import { BrowserRouter,Routes,Route} from 'react-router-dom'; 

function App() {


  return (
    <>

    <BrowserRouter>

     <NavBar/>

     <Routes>

      <Route path='/' element={<ItemListContainer/>}/>
 
      <Route path='/cart' element={<Cartwidget/>}/>

      <Route path='/detail' element={<ItemDetailContainer id={3}/>}/>

      <Route path='/*' element={<Error/>}/>

     </Routes>

    </BrowserRouter>

    
    </>
  );
};

export default App
