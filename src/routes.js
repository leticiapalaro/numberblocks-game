import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Cabecalho from './components/Cabecalho';
import Home from './pages/Home';
import Adivinhar from './pages/Adivinhar';
import Somar from './pages/Somar';
import Subtrair from './pages/Subtrair';
import Erro404 from './pages/Erro404';
import Multiplicar from './pages/Multiplicar';

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adivinhar" element={<Adivinhar/>}/>
        <Route path="/somar" element={<Somar/>}/>
        <Route path="/subtrair" element={<Subtrair/>}/>
        <Route path="/multiplicar" element={<Multiplicar/>}/>
        <Route path="*" element={<Erro404/>}/>
      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;