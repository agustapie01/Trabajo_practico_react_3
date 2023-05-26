import ig from '../assets/ig.png'
import git from '../assets/git.png'

const Footer = () => {
  return (
    <div>
            <footer>
                      <div>
                             <a href="https://www.instagram.com/"><img id='img_footer' src={ig} alt="" /></a>
                             <a href="https://github.com/"><img id='img_footer' src ={git} alt="" /></a>
                             <p id='p_footer'>Copyriht Agustin Tapie</p>

                      </div>  

            </footer>
    </div>
  )
}

export default Footer