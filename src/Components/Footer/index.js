import './footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

 function Footer(){
    return(
        <footer>
            <div className='social_footer'>
                <div>
                    <p>© MM BOX</p>
                </div>
                <div className='social_list'>
                    
                   <ul>
                        <li>
                            <a target="blank" rel='external' href={'https://www.facebook.com/'}>
                                <FaFacebook/>
                            </a>
                             <a target="blank" rel='external' href={'https://www.instagram.com/'}>
                                <FaInstagram/>
                            </a>
                            
                            
                        </li>
                    </ul>
                </div>
                
                
            
            </div>
          
        </footer>
    )
}

export default Footer;