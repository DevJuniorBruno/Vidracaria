import './farmacia.css'
import WhatsAppButton from '../../Components/WhatsButton';
import { Link } from 'react-router-dom';



function Servicos() {
    return(
        <header className='servicos'>
            <div className='projetos_container'>
                    <h1>SERVIÇOS</h1>
                    <p>MM BOX</p>
            </div>
                <div className='container_infos_servicos'>
                    <div  className='infos_servicos'>
                        <h1>
                            Soluções completas em box de vidro para seu banheiro
                        </h1>
                        <p>A MM BOX oferece um serviço completo, desde a medição até a instalação final, 
                           garantindo um resultado funcional, seguro e esteticamente sofisticado.
                        </p>
                    </div>
                    <div  className='infos_servicos'>
                        <h1>
                            Box de Banheiro Sob Medida
                        </h1>
                        <p>
                        Desenvolvemos boxes personalizados de acordo com o espaço e o estilo do seu banheiro, 
                        aproveitando cada detalhe para um acabamento perfeito.
                        </p>
                    </div>
                    <div  className='infos_servicos'>
                        <h1>
                            Ferragens de Alta Qualidade
                        </h1>
                        <p>
                        Utilizamos ferragens em inox ou alumínio de alto padrão, 
                        resistentes à umidade e ao desgaste do tempo.
                        </p>
                    </div>
                    <div  className='infos_servicos'>
                        <h1>
                            Instalação Profissional
                        </h1>
                        <p>
                        Nossa equipe é especializada e segue rigorosamente os padrões de segurança, 
                        garantindo uma instalação rápida, limpa e eficiente.
                        </p>
                    </div>
                </div>
               <div className='espacamento'>
                   <div className='divButton'>
                        <Link className='button' to='banhoetosa'>Saiba mais</Link>
                    </div>
               </div>
                <WhatsAppButton/>

        </header>
    )
}

export default Servicos;