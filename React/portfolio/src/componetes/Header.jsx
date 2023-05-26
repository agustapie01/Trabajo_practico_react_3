
import { Link } from 'react-router-dom';
import agu from '../assets/agu.jpg'

export const Header = () => {
  return (
    <>
        
             <header id='header'>
                    <img id='foto_header' src={agu} alt="" /> 
              </header>  

              <div className='nav'>
                  <nav className="navbar navbar-light bg-light">
                  <Link to="/componetes/Contact" className='boton_contacto'>Contacto</Link>
                  </nav>

              </div>


            <nav>
              
            </nav>

    </>
  )
}

export default Header   