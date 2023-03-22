import largeLogo from '../assets/coping corner logo.png'
import smallLogo from '../assets/coping corner logo small.png'
import herographic from '../assets/homepage_people.png'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className = "homepage">
      <div>
      <img className = "mainlogo" src={largeLogo}/>
      </div>
      <div>
      <h1 className = "main-text">Together, we cope.</h1>
      <img className="herographic" src = {herographic} width =" 50%"/>
      </div>
      <div></div>
      <div className = "join">
      <span className = 'centertext'>Join our corner today   </span>
      <Link to ='/register'><button id = "home-register-btn">Register</button></Link>
      </div>
    </div>
  );
}
