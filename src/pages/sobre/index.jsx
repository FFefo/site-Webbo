import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import RodapéDois from '../../components/rodapédois/rodapedois.jsx';
import './index.scss';

export default function Sobre() {
  return (
    <div className="pagina-sobre pagina">

      <Cabecalho />

      <section className='secoes2'>

        <section className='secao'>

          <h2>Quem são os <span>Webbers</span>?</h2>
          <br />
          <p>Na Webbo, os Webbers são muito mais do que profissionais de TI; eles são os arquitetos da inovação e os solucionadores de problemas. O que faz nossos Webbers se destacarem é a combinação única de habilidades técnicas, criatividade e um profundo entendimento das necessidades de nossos clientes.</p>

        </section>

        <section className='secao'>

          <h2>O que torna <span>os Webbers</span> especiais?</h2>
          <br />
          <ul className='lista'>

            <li> <span>Criatividade e Inovação:</span> Eles não apenas resolvem problemas, mas também antecipam oportunidades para melhorar e inovar, sempre em busca das melhores soluções.</li>

            <li> <span>Dedicação ao Cliente:</span> Cada Webber está comprometido em oferecer um atendimento personalizado, entendendo suas necessidades e trabalhando para superar suas expectativas.</li>

            <li> <span>Trabalho em Equipe:</span> A colaboração entre nossos Webbers garante que cada projeto seja abordado de forma integrada, trazendo múltiplas perspectivas e expertise para alcançar resultados excepcionais.</li>

          </ul>

        </section>

        <section className='secao'>

          <h2>Conheça os nossos <span>Webbers</span>!</h2>

        </section>

        <section className='webber'>

          <div className='apresentaçao'>

            <h3>Gabrielle Pereira</h3>
            <br />
            <h3>Web Designer e Desenvolvedora Front-end</h3>

            <p>Olá, prazer em te conhecer. Sou Gabrielle Pereira mas você pode me chamar de Gabi. Tenho 17 anos e sou extremamente aberta a novas experiências. Minhas expectativas para a nossa empresa é que ela cresça e atinja diferentes públicos e realidades, que leve todo nosso trabalho e criatividade para as mais diferentes pessoas e que possamos ser reconhecidos por isso.

              E para te deixar um pouco mais a par, eu sou alguém bastante habilidosa em trabalhar com Web Design, ou simplesmente "Frontend", pros mais técnicos. Então já sabe, se precisar uma página editar, fique tranquilo em me chamar!</p>

          </div>

          <img src="/assets/images/gabi2.jpg" alt="foto de Gabrielle Pereira" className='foto-webber' />

        </section>

        <section className='webber'>

          <div className='apresentaçao'>

            <h3>Felipe Costa</h3>
            <br />
            <h3>Desenvolvedor Fullstack</h3>

            <p>Olá! Eu me chamo Felipe Costa e sou um dos desenvolvedores integrantes do grupo Webbo. Com a iniciativa da nossa empresa, eu busco levar a alegria de ver diversas portas se abrindo, graças a um site, para as outras pessoas. E como um dos Webbers, eu estou disposto a entregar o meu melhor para que a experiência de nossos clientes, que eu garanto que vão ver seus projetos alavancarem. Não sou alguém que desiste fácil, mas sou uma pessoa que gosta de resolver erros, então mesmo que tudo pareça dar errado, eu estarei pronto para entender, analisar, e resolver todos os problemas que pudermos enfrentar na nossa trajetória e de seu site.</p>

          </div>

          <img src="/assets/images/fefo2.jpg" alt="foto de Felipe Costa" className='foto-webber' />

        </section>

        <section className='webber'>

          <div className='apresentaçao'>

            <h3>Letícia Koga</h3>
            <br />
            <h3>Web Designer e Desenvolvedor Front-end</h3>

            <p>Olá, me chamo Le e sou um dos desenvolvedores da Webbo, atuando como web designer e desenvolvedor Front-end. Meu trabalho é transformar conceitos em experiências digitais dinâmicas e atraentes. Utilizo minha experiência para criar interfaces intuitivas e funcionais que destacam a estética e a usabilidade.

              Na Webbo, aplico minha paixão por design e desenvolvimento para criar soluções web que não apenas atendem, mas superam as expectativas dos nossos clientes. Estou comprometido em oferecer experiências digitais que combinam estética e funcionalidade de maneira impecável.</p>

          </div>

          <img src="/assets/images/lele.jpg" alt="foto de Leticia Koga" className='foto-webber' />

        </section>

      </section>

      <RodapéDois />

    </div>
  );
}