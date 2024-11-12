import './rodapedois.scss';

export default function RodapéDois(){
    return(
        <footer className='rodape-preto'>

        <div className='icones'>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-linkedin"></i>
        </div>

        <div className='coluna1'>
          <h2>Use cases</h2>
          <p>UI design <br />
            UX Design <br />
            Wireframing <br />
            Diagramming <br />
            Brainstorming <br />
            Online whiteboard <br />
            Team collaboration
          </p>
        </div>

        <div className='coluna2'>
          <h2>Explore</h2>
          <p>Design <br />
          Prototyping <br />
          Development features <br />
          Design systems <br />
          Collaboration features <br />
          Design process <br />
          FigJam
          </p>
        </div>

        <div className='coluna3'>
          <h2>Resources</h2>
          <p>Blog <br />
          Best practices <br />
          Colors <br />
          Color wheel <br />
          Support <br />
          Developers <br />
          Resource library 
          </p>
        </div>

      </footer>
    )
}