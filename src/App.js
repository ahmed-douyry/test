import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListeArticle } from './listeArticle';
import { AjouterArticle } from './AjouterArticle';
import { ModifierArticle } from './ModifierArticle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListeArticle />} />
        <Route path='/ajouterArticle' element={<AjouterArticle />} />
        <Route path='/ModifierArticle/:id' element={<ModifierArticle />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
