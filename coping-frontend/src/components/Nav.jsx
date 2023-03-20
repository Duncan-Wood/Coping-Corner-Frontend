import { useContext } from 'react'
import { UserProvider } from '../UserProvider'
import { Link } from 'react-router-dom'

export default function Nav(){
    const {user} = useContext(UserProvider)
    const {authenticated} = useContext(UserProvider)
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <div>
                <div><h1>logo image</h1></div>
                <div><h1>COPING CORNER</h1></div>
                <div>
                    <Link to='/profile'><button>profile</button></Link>
                    <Link to='/dashboard'><button>dashboard</button></Link>
                    <Link to='/post'><button>add post</button></Link>
                    <Link to='/toolkit'><button>toolkit</button></Link>
                    <Link to='/resources'><button>resources</button></Link>
                    <Link to='/'><button>logout</button></Link>
                </div>
            </div>
        )
    }

    const publicOptions = (
        <div>
            <div><h1>logo image</h1></div>
            <div><h1>COPING CORNER</h1></div>
            <Link to='/register'><button>register</button></Link>
            <Link to='/login'><button>login</button></Link>
            <Link to='/resources'><button>resources</button></Link>
        </div>
    )
    return(
        <div>
            <h1>hi</h1>
            {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
    )
}