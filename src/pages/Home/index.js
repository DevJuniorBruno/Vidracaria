import './home.css';
import { Link } from 'react-router-dom';
import Caminhao from '../../img/sobmedida.jpg';
import Medicamento from '../../img/instalarapidfcopia.png';
import Telefone from '../../img/telefone.jpeg';
import WhatsAppButton from '../../Components/WhatsButton';

function Home() {
    return(
        <div>
            <main>
                <section className='module parallax parallax-1'>  
                    <div className='container-h1'>
                        <span className='h1-home'>
                            <span id='mm' >MM</span> BOX
                        </span>
                    </div>
                    
                    <div className='divButton'>
                        <Link className='button' to='banhoetosa'>Saiba mais</Link>
                    </div>
                </section>

                <section className='module_content'>
                    <div className='icones-links'>
                    <Link to="banhoetosa" >
                        <img className='caminhao' to='clinica' src={ Caminhao } alt="caminhao-link" />
                        <p>Box Sob Medida</p>
                    </Link> 
                    </div>
                    <div className='icones-links'>
                        <Link to='servicos'>
                            <img className='medicamento' src= { Medicamento} alt='medicamentos-link'  />
                            <p>Instalação Rápida</p>
                        </Link>
                    </div>
                    <div className='icones-links'>
                        <Link to='contato'> 
                        <img className='telefone' src= {Telefone} alt="telefone-link" />
                        <p>Orçamento</p>
                        </Link>
                    </div>
                </section>

                <section className='module info'>
                   <div className='container-infos'>
                    <h2>Entre em contato</h2>
                        <p>
                            Teremos o maior prazer em lhe atender.
                        </p>
                        <div className='divButton'>
                            <Link className='button' to='contato'>Contato</Link>
                        </div>

                    </div>
                    <WhatsAppButton/>
                   </section>

            </main>
        </div>
        
        
    )
}

export default Home;
