import {useNavigate} from 'react-router-dom'
import {useContext, useState} from 'react'
import {UserProvider} from '../UserProvider'

export default function Dashboard(){
    let navigate = useNavigate();
    const {mood, setMood} = useContext(UserProvider)
    const BackToMood = () => {
        setMood(null);
        navigate('/loggedhome')
    }
    return(
        <div>
            <button id="go-back" onClick={BackToMood}> Go Back </button>
            <h1>This is where the dashboard will go!</h1>
        </div>
    )
}