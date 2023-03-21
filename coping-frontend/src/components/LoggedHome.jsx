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
            {/* <h2>Hello!</h2> */}
            <h1>How are you feeling today? </h1>
            <div className = "mood-selection">
                <div><h4>select one to start:</h4></div>
                <div id="emergencydiv"><button id="emergency" className = "emergency-btn" onClick={goToDash}>It's an emergency - I need immediate assistance.</button></div>
                <div><button id="angry" className = "mood-btn" onClick={goToDash}>angry</button></div>
                <div><button id="blah" className = "mood-btn" onClick={goToDash}>blah</button></div>
                <div><button id="fine" className = "mood-btn" onClick={goToDash}>fine</button></div>
                <div><button id="bad" className = "mood-btn" onClick={goToDash}>bad</button></div>
                <div><button id="afraid" className = "mood-btn" onClick={goToDash}>afraid</button></div>
                <div><button id="overwhelmed" className = "mood-btn" onClick={goToDash}>overwhelmed</button></div>
                <div><button id="under_stimulated" className = "mood-btn" onClick={goToDash}>under-stimulated</button></div>
                <div><button id="calm" className = "mood-btn" onClick={goToDash}>calm</button></div>
                <div><button id="lonely" className = "mood-btn" onClick={goToDash}>lonely</button></div>
                <div><button  id="guilty" className = "mood-btn" onClick={goToDash}>guilty</button></div>
                <div><button id="disconnected" className = "mood-btn" onClick={goToDash}>disconnected</button></div>
                <div><button id="tired" className = "mood-btn" onClick={goToDash}>tired</button></div>
                <div><button id="good" className = "mood-btn" onClick={goToDash}>good</button></div>
                <div><button id="sad" className = "mood-btn" onClick={goToDash}>sad</button></div>
                <div><button  id="self_doubt" className = "mood-btn" onClick={goToDash}>self-doubt</button></div>
                <div><button id="depressed" className = "mood-btn" onClick={goToDash}>depressed</button></div>
                <div><button  id="frustrated" className = "mood-btn" onClick={goToDash}>frustrated</button></div>
                <div><button  id="happy" className = "mood-btn" onClick={goToDash}>happy</button></div>
                <div><button  id="totally_distraught" className = "mood-btn" onClick={goToDash}>totally distraught</button></div>
                <div><button  id="very_anxious" className = "mood-btn" onClick={goToDash}>very anxious</button></div>
            </div>
            
        </div>
    )
}