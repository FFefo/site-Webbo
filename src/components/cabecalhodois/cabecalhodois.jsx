import './cabecalhodois.scss';
import { Link } from 'react-router-dom';

export default function CabecalhoDois() {
    return (
        <header className='cabecalho'>

            <div className='logo'>
                <img className='wb' src="/assets/images/sapwebbo.jpg" alt="" />
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