import { Link } from 'react-router-dom';

const Contact = () => {
  return (
                  <body className="body_form">
                  <div className='nav2'>
                      <nav className="navbar navbar-light bg-light">
                      <Link to="/" className='boton_contacto2'>Volver a inicio</Link>
                      </nav>
                  </div>
                  <div className="form2">
                        <h1 className='h1_form'>Contacto:</h1>
                        <form  className="form1">
                                <label className="label_form">Nombre:</label><input type="text" placeholder="Ingrese su nombre"/><br />
                                <label className="label_form">Apellido:</label><input type="text" placeholder="Ingrese su Apellido"/><br />
                                <label className="label_form">Email:</label><input type="email" placeholder="Ingrese su Email"/><br />
                                <label className="label_form">Numero de contacto:</label><input type="text" placeholder="Ingrese su numero"/><br />
                                <button className="buton_form">Enviar</button>
                        </form>   
                  </div>  



                  </body>

  
  )
}

export default Contact