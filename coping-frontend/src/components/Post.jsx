import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreateResource } from "../Services/ResourceServices";
import { UserProvider } from "../UserProvider";


export default function Post() {
  let navigate = useNavigate()
  const {user} = useContext(UserProvider);
  const [typeArray, setTypeArray] = useState([])
  const [feelingArray, setFeelingArray] = useState([])
  const [formValues, setFormValues] = useState({
    title: "",
    type:[],
    feeling:[],
    time_requirement: "",
    preview_text: "",
    content: "",
    optional_image: "",
    optional_link: ""
  })


  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.name !== "type" && e.target.name !== "feeling"){
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }
  }

  const handleTypeChange = (e) => {
        if(e.target.checked){
            setTypeArray([...typeArray, e.target.value])
            
        }else{
            let index = typeArray.indexOf(e.target.value)
            typeArray.splice(index, 1)
            setTypeArray([...typeArray])
        }
    }


    const handleFeelingChange = (e) => {
        if(e.target.checked){
            setFeelingArray([...feelingArray, e.target.value])

        }else{
            let index = feelingArray.indexOf(e.target.value)
            feelingArray.splice(index, 1)
            setFeelingArray([...feelingArray])
        }
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateResource({
      user_id: user.id,
      title: formValues.title,
      type: typeArray,
      feeling: feelingArray,
      time_requirement: formValues.time_requirement,
      preview_text: formValues.preview_text,
      content:formValues.content,
      optional_image: formValues.optional_image,
      optional_link: formValues.optional_link
          })
          console.log(typeArray)

    setFormValues({
      user_id: "",
      title: "",
      type: [],
      feeling: [],
      time_requirement: "",
      preview_text: "",
      content: "",
      optional_image: "",
      optional_link: ""
    });
    navigate(`/profile`);
  }

  return (
    <div className = "addpost">
      <h1>DRAFT A POST</h1>

      <form className="resourceDraft" onSubmit={handleSubmit} >
        <div className = "title">
          <label htmlFor="title">title</label>
          <br></br>
          <input
            onChange={handleChange}
            value={formValues.title}
            name="title"
            type="text"
            placeholder="Resource Title" required />
        </div>
        <h3>Type</h3>
        <ul className = "typeCheckbox">
        {/* // <div className ="typeCheckbox" onSubmit={handleSubmit}> */}
        <li>
        <input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="meditation" /> 
                <label htmlFor="meditation">meditation</label></li>
        <li><input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="movement"/> 
                <label htmlFor="movement">movement</label></li>
       <li><input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="mind-body"/> 
                <label htmlFor="mind-body">mind-body</label></li> 
                
       <li> <input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="distraction"/> 
                <label htmlFor="distraction">distraction</label></li>
       <li><input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="grounding" /> 
                <label htmlFor="grounding">grounding</label></li> 
        <li><input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="affirmation"/> 
                <label htmlFor="affirmation">affirmation</label></li>
       <li> <input  type="checkbox"
                name="type"
                onChange={handleTypeChange} 
                value="emergency"/> 
                <label htmlFor="affirmation">emergency</label></li>
    
        </ul>

    
        <h3>Feeling</h3>
        <ul className = "feelingCheckbox">
            <li><input type="checkbox" 
                   name="feeling" 
                   value="angry"
                   onChange={handleFeelingChange} />
            <label htmlFor="angry">angry</label> </li>
            <li><input type="checkbox" 
                    name="feeling" 
                    value="overwhelmed"  
                    onChange={handleFeelingChange}/>
                    <label htmlFor="overwhelmed">overwhelmed</label></li>
           <li><input type="checkbox" 
                    name="feeling" 
                    onChange={handleFeelingChange} 
                    value="disconnected"  /> </li>
                    <label htmlFor="fine">disconnected</label>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="depressed"  /> 
                    <label htmlFor="bad">depressed</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="blah"  /> 
                    <label htmlFor="blah">blah</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="under-stimulated"  /> 
                    <label htmlFor="under-stimulated">under-stimulated</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="tired"  /> 
                    <label htmlFor="tired">tired</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="frustrated"  /> 
                    <label htmlFor="frustrated">frustrated</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="fine" /> 
                    <label htmlFor="fine">fine</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="calm" /> 
                    <label htmlFor="calm">calm</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="good" /> 
                    <label htmlFor="good">good</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="happy" /> 
                    <label htmlFor="happy">happy</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="bad" /> 
                    <label htmlFor="bad">bad</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="lonely" /> 
                    <label htmlFor="lonely">lonely</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="sad" />
                    <label htmlFor="sad">sad</label></li>
           <li> <input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="totally-distraught" /> 
                    <label htmlFor="totally-distraught">totally distraught</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="afraid" />
                    <label htmlFor="afraid">afraid</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="guilty" /> 
                    <label htmlFor="guilty">guilty</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="self-doubt" /> 
                    <label htmlFor="self-doubt">self-doubt</label></li>
            <li><input  type="checkbox" 
                    name="feeling"
                    onChange={handleFeelingChange}
                    value="very-anxious" /> 
                    <label htmlFor="very-anxious">very anxious</label></li>
        </ul>

        <div>
          <label htmlFor="time_requirement">time requirement</label>
          <br></br>
          <select name="time_requirement" id="time_requirement" onChange = {handleChange} >
            <option name="time_requirement" value="choose a duration">--choose a duration--</option>
             <option name="time_requirement" value="5">5 Minutes</option>
             <option name="time_requirement"value="10">10 Minutes</option>
             <option name="time_requirement"value="15">15 Minutes</option>
             <option name="time_requirement"value="20">20 Minutes</option>
             <option name="time_requirement"value="25">25 Minutes</option>
             <option name="time_requirement"value="30">30 Minutes</option>
             <option name="time_requirement"value="35">35 Minutes</option>
             <option name="time_requirement"value="40">40 Minutes</option>
             <option name="time_requirement"value="45">45 Minutes</option>
             <option name="time_requirement"value="50">50 Minutes</option>
             <option name="time_requirement"value="60">60 Minutes</option>
             <option name="time_requirement"value="MoreThan60">Longer than 1 hour</option>
             <option name="time_requirement"value="NA">No Time Requirement</option>

          </select>
        </div>

        <div>
          <label htmlFor="preview_text">preview text</label>
          <br></br>
          <input onChange={handleChange}
            value={formValues.preview_text}
            name="preview_text"
            type="text"
            placeholder="preview text here" />
        </div>

        <div>
          <label htmlFor="content">content</label>
          <br></br>
          <textarea className="contentbox" onChange={handleChange}
            value={formValues.content}
            name="content"
            style={{ width: '50%', height: '200px' }} 
            />
        </div>

        <div>
          <label htmlFor="imageURL">image URL</label>
          <br></br>
          <input onChange={handleChange}
            value={formValues.imageURL}
            type="text"
            name="optional_image"  />
        </div>

        <div>
          <label htmlFor="imageURL">resource URL</label>
          <br></br>
          <input onChange={handleChange}
            value={formValues.resourceURL}
            type="text"
            name="optional_link" />
        </div>

        <input type="submit" value="SHARE POST"></input> 
        {/* disabled={!formValues.title || !formValues.preview_text || !formValues.content || !formValues.type || !formValues.feeling || !formValues.time_requirement} /> */}


      </form>
    </div>
  )}
      