//navegação

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//páginas site
import App from './pages/app/index';
import Servico from './pages/servicos/index';
import Sobre from './pages/sobre/index';

export default function Navegaçao() {

    return (
        <BrowserRouter>
        
            <Routes>

            <Route path='/' element={<App />} />
            <Route path='/servicos' element={<Servico />} />
            <Route path='/sobre' element={<Sobre />} />
            
            {/* <Route path='*' element={<NaoEncontrado />} /> */}


            </Routes>

        </BrowserRouter>
    )
}