import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProduitsList from './ProduitsList';
import ProdCreate from './ProdCreate';
import ProdEdit from './ProdEdit';
import ProdRecheche from './ProdRecherche';


function App() {
  return (
    <div className="App">
      <h1>React CRUD Operations</h1>
      <BrowserRouter>
    <Routes>
      <Route path='/produits/liste' element={<ProduitsList/>}></Route>
      <Route path='/produits/create' element={<ProdCreate/>}></Route>
      <Route path='/produits/edit' element={<ProdEdit/>}></Route>
      <Route path='/produits/serch' element={<ProdRecheche/>}></Route>


    </Routes>

  </BrowserRouter>
    </div>
  );
  
}

export default App;
