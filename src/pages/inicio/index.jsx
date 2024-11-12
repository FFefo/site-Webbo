import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import CabecalhoDois from '../../components/cabecalhodois/cabecalhodois.jsx';
import Rodapé from '../../components/rodapé/rodape.jsx';
import './index.scss';


export default function Inicio() {
  return (
    <div className="pagina-inicio pagina">

      <CabecalhoDois />

      <div className='secaoinicial'>

        <h1 className='titulo'>WEBBO</h1>
        <p className='slogan'>Conectando soluções e saltando para um futuro cheio de criatividade!</p>

      </div>
      <div className="topicos">

        <div className="faixa-verde">
          <svg width="12" height="720" viewBox="0 0 12 963" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="963" width="963" height="4" rx="2" transform="rotate(-90 4 963)" fill="#5FFF69" />
          </svg>

        </div>
        <section className='secoes1'>



          <section className='secao'>
            <h2 className='titulo'>Seja bem-vindo(a) a Webbo!</h2>
            <p className='descriçao'>Na Webbo, estamos empenhados em construir um futuro digital mais conectado e eficiente, e é essa visão que guia cada passo que damos. Junte-se a nós e descubra como nossos Webbers podem transformar suas ideias em realidade.</p>
          </section>
          <section className='secao'>
            <h2 className='titulo'>Nossa história</h2>
            <p className='descriçao'>Fundada em 2024, a Webbo nasceu da paixão por tecnologia e inovação. Desde então, nossa equipe tem trabalhado incansavelmente para oferecer serviços de alta qualidade e soluções personalizadas que impulsionam o sucesso dos nossos clientes.  Com uma combinação de expertise técnica e um profundo entendimento das tendências do setor, temos construído uma reputação sólida como uma empresa de confiança no mercado de TI.</p>
          </section>
          <section className='secao'>
            <h2 className='titulo'>Visão da empresa</h2>
            <p className='descriçao'>Queremos ser reconhecido no setor de tecnologia e inovação digital e construir um futuro digital mais conectado e eficiente, onde cada projeto reflete a nossa paixão por excelência e inovação.</p>
          </section>

        </section>

      </div>

      <Rodapé/>

    </div>
  );
}