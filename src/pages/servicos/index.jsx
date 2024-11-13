import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import RodapéDois from '../../components/rodapédois/rodapedois.jsx'
import './index.scss';

export default function Servico() {
  return (
    <div className="pagina-servico pagina">

      <Cabecalho />

      <section className='secoes3'>

        <section className='secaoserviço'>
          <h2>Serviços da <span>Webbo</span>:</h2>

          <br />

          <div className='texto'>

            <p>Na Webbo, oferecemos soluções completas para atender às suas necessidades digitais com excelência. <br /> Como especialistas em desenvolvimento web, nos destacamos em criar sites personalizados, construir sistemas <br /> robustos com tecnologia fullstack e desenvolver interfaces dinâmicas usando React.
            </p>

            <br />

            <p>Combinamos criatividade, inovação e expertise técnica para transformar suas ideias em realidade. Seja você uma startup em busca de uma presença online impactante ou uma empresa estabelecida precisando de uma solução tecnológica sofisticada, estamos aqui para fornecer as ferramentas e o suporte necessários para o seu sucesso.
            </p>

            <br />

            <p>Explore nossos serviços e descubra como podemos ajudar a elevar sua tecnologia ao próximo nível!
            </p>

            <br />

          </div>

        </section>

        <section className='secaodev'>

          <div className='text'>

            <h3>Desenvolvimento de Sites</h3>

            <div className='text2'>

              <p>Transforme sua presença online com nossos sites personalizados, projetados para atender às suas necessidades e destacar sua marca.</p>

              <br />

              <ul>

                <li> <span>Design Personalizado:</span> Criação de layouts exclusivos que capturam a essência da sua marca e proporcionam uma experiência de usuário excepcional.</li>

                <br />

                <li> <span>Responsividade Total:</span> Sites que funcionam perfeitamente em qualquer dispositivo, garantindo acessibilidade e uma experiência consistente.</li>

                <br />

                <li> <span>Otimização para Performance:</span> Garantimos que seu site seja rápido e eficiente, com tempos de carregamento reduzidos e uma navegação fluida.</li>

              </ul>

            </div>

          </div>

          <img className='imagem' src="/assets/images/dispositivos.png" alt="dispositivos" />

        </section>

        <section className='secaodev2'>

          <div className='text'>

            <div className="text2">

              <h3>Desenvolvimento Fullstack</h3>
              <p>Oferecemos soluções completas para o desenvolvimento web, cobrindo todos os aspectos do seu projeto, do front-end ao back-end.</p>
            </div>
            <div className='text3'>

            </div>
            <ul>
              <li><span>Front-end:</span> Criação de interfaces interativas e responsivas com as melhores práticas de design e usabilidade.</li>
              <br />
              <li><span>Back-end:</span> Desenvolvimento robusto de servidores e APIs que suportam suas aplicações com segurança e escalabilidade.</li>
              <br />
              <li>
                <span>Banco de dados:</span> Implementação de bancos de dados eficientes e seguros para gerenciar suas informações de maneira confiável.</li>
            </ul>

          </div>
          <img className='imagem' src="/assets/images/fullstack.png" alt="dispositivos" />
        </section>

        <section className='secaoreact'>

          <div className='text3'>

          <h3>Especialistas em ReactJS</h3>
          <br />
          <p>Aproveite o poder do React para criar interfaces de usuário rápidas e dinâmicas que oferecem uma experiência de alta performance.</p>
          <br />

          <ul>

            <li><span>Componentes Reutilizáveis:</span> Desenvolvimento de componentes React que podem ser <br /> reutilizados em diferentes partes da aplicação, garantindo consistência e eficiência.</li>

            <br />

            <li><span>Gerenciamento de Estado:</span> Implementação de soluções avançadas para gerenciar o estado <br />da aplicação, facilitando a manutenção e escalabilidade.</li>

            <br />

            <li><span>Integração com API’s:</span> Conexão perfeita com APIs externas para enriquecer sua aplicação <br /> com dados e funcionalidades interativas.</li>

          </ul>

          </div>

          <img className='img' src="/assets/images/react.png" alt="" />

        </section>

        <section className='mark'>

          <div className='text4'>

            <h2>Por que aderir os serviços da <span>Webbo</span>? </h2>
            <br />
            <p>Na Webbo, combinamos experiência e expertise com um compromisso inabalável com a qualidade. Nossa equipe é altamente qualificada em tecnologias de ponta, como fullstack e React, o que nos permite entregar soluções excepcionais. Adotamos uma abordagem centrada no cliente, trabalhando lado a lado com você para entender suas necessidades específicas e desenvolver soluções personalizadas que superam suas expectativas. Além disso, garantimos suporte contínuo e manutenção para que seu site e aplicações operem de forma impecável, mantendo-se sempre atualizados e funcionais. Com a Webbo, você tem a certeza de um parceiro confiável para o sucesso digital do seu negócio.</p>

          </div>

        </section>

      </section>

      <RodapéDois />

    </div>
  );
}