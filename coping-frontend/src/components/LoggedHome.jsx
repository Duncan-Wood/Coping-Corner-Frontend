import { UserProvider } from "../UserProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"


export default function LoggedHome () {
    const {mood, setMood} = useContext(UserProvider)
    let navigate = useNavigate();
    
    const goToDash = (e)=>{
        setMood(e.target.id)
        navigate("/dashboard")
    }
    return (
        <div>
            <h2>Hello!</h2>
            <h3> How are you feeling today? </h3>
            <div className = "mood-selection">
                <div><h6>select one to start:</h6></div>
                <div id="emergencydiv"><button id="emergency" className = "emergency-btn" onClick={goToDash}>It's an emergency - I need immediate assistance.</button></div>
                <div><button id="angry" className = "mood-btn">angry</button></div>
                <div><button id="blah" className = "mood-btn">blah</button></div>
                <div><button id="fine" className = "mood-btn">fine</button></div>
                <div><button id="bad" className = "mood-btn">bad</button></div>
                <div><button id="afraid" className = "mood-btn">afraid</button></div>
                <div><button id="overwhelmed" className = "mood-btn">overwhelmed</button></div>
                <div><button id="under_stimulated" className = "mood-btn">under-stimulated</button></div>
                <div><button id="calm" className = "mood-btn">calm</button></div>
                <div><button id="lonely" className = "mood-btn">lonely</button></div>
                <div><button  id="guilty" className = "mood-btn">guilty</button></div>
                <div><button id="disconnected" className = "mood-btn">disconnected</button></div>
                <div><button id="tired" className = "mood-btn">tired</button></div>
                <div><button id="good" className = "mood-btn">good</button></div>
                <div><button id="sad" className = "mood-btn">sad</button></div>
                <div><button  id="self_doubt" className = "mood-btn">self-doubt</button></div>
                <div><button id="depressed" className = "mood-btn">depressed</button></div>
                <div><button  id="frustrated" className = "mood-btn">frustrated</button></div>
                <div><button  id="happy" className = "mood-btn">happy</button></div>
                <div><button  id="totally_distraught" className = "mood-btn">totally distraught</button></div>
                <div><button  id="very_anxious" className = "mood-btn">very anxious</button></div>
            </div>
            
        </div>
    )
}