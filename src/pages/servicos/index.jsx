import { Link } from 'react-router-dom';

import './index.scss';

export default function Servico() {
    return (
      <div className="pagina-servico pagina">
  
          <header className='cabecalho'>
    
            <Link to='/'>Início</Link>
            <Link to='/sobre'>Sobre nós</Link>
            <Link to='/servicos'>Serviços</Link>
  
          </header>



          <section className='secoes3'>

              <section className='secaoserviço'>
                <h2>Serviços da Webbo.</h2>
                
                <div className='texto'>

                  <p>Na Webbo, oferecemos soluções completas para atender às suas necessidades digitais com excelência. Como especialistas em desenvolvimento web, nos destacamos em criar sites personalizados, construir sistemas robustos com tecnologia fullstack e desenvolver interfaces dinâmicas usando React.
                  </p>

                  <p>Combinamos criatividade, inovação e expertise técnica para transformar suas ideias em realidade. Seja você uma startup em busca de uma presença online impactante ou uma empresa estabelecida precisando de uma solução tecnológica sofisticada, estamos aqui para fornecer as ferramentas e o suporte necessários para o seu sucesso.
                  </p>

                  <p>Explore nossos serviços e descubra como podemos ajudar a elevar sua tecnologia ao próximo nível!
                  </p>

                </div>

              </section>

              <section className='secao'>

                <h3>Desenvolvimento de Sites</h3>
                <p>Transforme sua presença online com nossos sites personalizados, projetados para atender às suas necessidades e destacar sua marca.</p>
                <ul>
                  <li>Design Personalizado: Criação de layouts exclusivos que capturam a essência da sua marca e proporcionam uma experiência de usuário excepcional.</li>
                  <li>Responsividade Total: Sites que funcionam perfeitamente em qualquer dispositivo, garantindo acessibilidade e uma experiência consistente.</li>
                  <li>Otimização para Performance: Garantimos que seu site seja rápido e eficiente, com tempos de carregamento reduzidos e uma navegação fluida.</li>
                </ul>

                <div className='imagem'><img src="/assets/images/dispositivos.png" alt="dispositivos" /></div>
              </section>
              
              <section className='secao2'>

                <h3>Desenvolvimento Fullstack</h3>
                <p>Oferecemos soluções completas para o desenvolvimento web, cobrindo todos os aspectos do seu projeto, do front-end ao back-end.</p>
                <ul>
                  <li>Front-end: Criação de interfaces interativas e responsivas com as melhores práticas de design e usabilidade.</li>
                  <li>Back-end: Desenvolvimento robusto de servidores e APIs que suportam suas aplicações com segurança e escalabilidade.</li>
                  <li>
                  Banco de dados: Implementação de bancos de dados eficientes e seguros para gerenciar suas informações de maneira confiável.</li>
                </ul>

                <div className='imagem'><img src="/assets/images/fullstack.png" alt="dispositivos" /></div>
              </section>

              <section className='secao'>

                <h3>Especialistas em ReactJS</h3>
                <p>Aproveite o poder do React para criar interfaces de usuário rápidas e dinâmicas que oferecem uma experiência de alta performance.</p>
                <ul>
                  <li>Componentes Reutilizáveis: Desenvolvimento de componentes React que podem ser reutilizados em diferentes partes da aplicação, garantindo consistência e eficiência.</li>
                  <li>Gerenciamento de Estado: Implementação de soluções avançadas para gerenciar o estado da aplicação, facilitando a manutenção e escalabilidade.</li>
                  <li>Integração com API’s: Conexão perfeita com APIs externas para enriquecer sua aplicação com dados e funcionalidades interativas.           </li>
                </ul>

                <div className='imagem'><img src="/assets/images/dispositivos.png" alt="dispositivos" /></div>
              </section>

              <section className='secaoserviço'>
                <h2>Serviços da Webbo.</h2>

                <p>Aproveite o poder do React para criar interfaces de usuário rápidas e dinâmicas que oferecem uma experiência de alta performance.</p>
              </section>

          </section>
          
      </div>
    );
  }
  
  