import './banhoetosa.css';

// IMAGENS DOS PROJETOS
import BoxDeCorrer from '../../img/boxdecorrer.jpg';
import BoxQuatroFolhas from '../../img/boxquatrofolhas.jpg';
import BoxElegance from '../../img/boxelegance.jpg';
import BoxJateado from '../../img/boxjateado.jpg';
import BoxDeCanto from '../../img/boxdecanto.jpg';
import BoxDeAbrir from '../../img/boxdeabrir.jpg';
import WhatsAppButton from '../../Components/WhatsButton';

function BanhoeTosa() {
  return (
    <section className="projects">

       
      <div className="projetos_container">
           <h1>PROJETOS </h1>
           <p>MM BOX</p>
        </div>

         <div  className='infos_projetos'>
                        <h1>
                            Projetos que unem funcionalidade e design
                        </h1>
                        <p>Aqui você encontra alguns dos projetos realizados pela MM BOX, com soluções modernas,
                             elegantes e adaptadas a diferentes tipos de ambientes.
                        </p>
         </div>               

      {/* GALERIA */}
      <div className="projects-gallery">

        <div className="project-card">
            <span className= 'h1-card'>Box de Correr</span>
          <img src={BoxDeCorrer} alt="Box de correr" />

        </div>

        <div className="project-card">
            <span className='h1-card'>Box Quatro Folhas</span>
          <img src={BoxQuatroFolhas} alt="Box quatro folhas" />
        </div>

        <div className="project-card">
          <span className= 'h1-card'>Box Elegance</span>
          <img src={BoxElegance} alt="Box Elegance" />
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

      </div>
      <WhatsAppButton/>
    </section>
  );
}

export default BanhoeTosa;
