import './banhoetosa.css';

// IMAGENS DOS PROJETOS
import BoxDeCorrer from '../../img/boxdecorrer.jpg';
import BoxQuatroFolhas from '../../img/boxquatrofolhas.jpg';
import BoxJateado from '../../img/boxjateado.jpg';
import BoxDeCanto from '../../img/boxdecanto.jpg';
import BoxDeAbrir from '../../img/boxdeabrir.jpg';
import WhatsAppButton from '../../Components/WhatsButton';
import BoxFume from '../../img/boxfume.jpg';
import BoxFrontal from '../../img/boxfrontal.png';

function BanhoeTosa() {
  return (
    <section className="projects">

       
      <div className="projetos_container">
           <h1>PROJETOS </h1>
           <p>CAIO BOX</p>
        </div>

         <div  className='infos_projetos'>
                        <h1>
                            Projetos que unem funcionalidade e design
                        </h1>
                        <p>Aqui você encontra alguns dos projetos realizados pela CAIO BOX, com soluções modernas,
                             elegantes e adaptadas a diferentes tipos de ambientes.
                        </p>
         </div>               

      {/* GALERIA */}
      <div className="projects-gallery">

        <div className="project-card">
            <span className= 'h1-card'>Box Elegance</span>
          <img src={BoxDeCorrer} alt="Box elegance" />

        </div>

        <div className="project-card">
            <span className='h1-card'>Box Quatro Folhas</span>
          <img src={BoxQuatroFolhas} alt="Box quatro folhas" />
        </div>

        <div className="project-card">
          <span className= 'h1-card'>Box Fume</span>
          <img src={BoxFume} alt="Box Fume" />
        </div>

        <div className="project-card">
          <span className= 'h1-card'>Box Jateado</span>
          <img src={BoxJateado} alt="Box jateado" />
        </div>

        <div className="project-card">
          <span className= 'h1-card'>Box de Canto</span>
          <img src={BoxDeCanto} alt="Box de canto" />
        </div>

        <div className="project-card">
          <span className= 'h1-card'>Box de Abrir</span>
          <img src={BoxDeAbrir} alt="Box de abrir" />
        </div>

        <div className="project-card">
          <span className= 'h1-card'>Box Frontal</span>
          <img src={BoxFrontal} alt="Box de abrir" />
        </div>

      </div>
      <WhatsAppButton/>
    </section>
  );
}

export default BanhoeTosa;
