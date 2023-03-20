import { useContext } from 'react'
import { UserProvider } from '../UserProvider'
import { Link } from 'react-router-dom'
import small_logo from '../assets/coping corner logo small.png'

export default function Nav(){
    const {user} = useContext(UserProvider)
    const {authenticated} = useContext(UserProvider)
    const {handleLogOut} = useContext(UserProvider)
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <div className = "header-div">
                <img className ="small_logo" src = {small_logo} width="90px"/>
                <div><h1>COPING CORNER</h1></div>
                <div className = "nav-btn">
                    <Link to='/profile'><button>profile</button></Link>
                    <Link to='/dashboard'><button>dashboard</button></Link>
                    <Link to='/post'><button>add post</button></Link>
                    <Link to='/toolkit'><button>toolkit</button></Link>
                    <Link to='/resources'><button>resources</button></Link>
                    <Link to='/'><button onClick={handleLogOut}>logout</button></Link>
                </div>
            </div>
        )
    }

    const publicOptions = (
        <div className = "header-div-nli">
             <img className ="small_logo" src = {small_logo} width="90px"/>
            <div><h1>COPING CORNER</h1></div>
            <div className = "nav-btn-nli">
            <Link to='/resources'><button>resources</button></Link>
            <Link to='/login'><button>login</button></Link>
            <Link to='/register'><button id="register">register</button></Link>
            </div>
        </div>
    )
    return(
        <div>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
    )
}