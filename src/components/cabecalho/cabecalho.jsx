import './cabecalho.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <header className='cabecalho'>

            <div className='titulo'>
                <p className='wb'>WEBBO</p>
            </div>

            <div className='linkess'>

            <div className='linkass'>
                <Link to='/'>Início</Link>
                <Link to='/sobre'>Sobre nós</Link>
                <Link to='/servicos'>Serviços</Link>
            </div>

            </div>

           
        </header>
    )

}