import largeLogo from '../assets/coping corner logo.png'
import herographic from '../assets/homepage_people.png'
import {Link} from 'react-router-dom'
import { CheckSession } from "../Services/Auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await CheckSession();
        if (user.id !== null) {
          setIsLoggedIn(true);
        }
      } catch (error) {}
    };
    fetchUser();
  }, []);

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
      {!isLoggedIn && (
        <div className = "join">
          <span className = 'centertext'>Join our corner today   </span>
          <Link to ='/register'><button id = "home-register-btn">Register</button></Link>
        </div>
      )}
    </div>
  );
}
