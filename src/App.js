import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
