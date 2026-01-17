import './contato.css';
import Form from "../../Components/Form";
import WhatsAppButton from '../../Components/WhatsButton';


function Contato() {
    return(
        <div className='container_Contato'>
        <div className='projetos_container'>
          <h1>Fale Conosco</h1>
          <p>Teremos o maior prazer em lhe atender</p>
        </div>
        <div className='container_Content_Contact'> 
                <Form/>
            </div>
            <WhatsAppButton/>
        </div>
    )

}

export default Contato;