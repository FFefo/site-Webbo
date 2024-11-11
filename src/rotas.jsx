//navegação

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//páginas site
import Servico from './pages/servicos/index';
import Sobre from './pages/sobre/index';
import Inicio from './pages/inicio/index';

export default function Navegaçao() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Inicio />} />
                <Route path='/servicos' element={<Servico />} />
                <Route path='/sobre' element={<Sobre />} />

                {/* <Route path='*' element={<NaoEncontrado />} /> */}


            </Routes>

        </BrowserRouter>
    )
}