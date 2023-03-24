import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<ItemListContainer/>}/>
          <Route path='/category/:id' exact element={<ItemListContainer/>}/>
          <Route path='/item/:id' exact element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
