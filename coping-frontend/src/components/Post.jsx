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
    type: [],
    feeling: [],
    time_requirement: "",
    preview_text: "",
    content: "",
    optional_image: "",
    optional_link: ""
  })

 

    // }else
  

  // function handleChange(e){
  //   e.preventDefault();
  //     let currentValue = "";
  //     currentValue = e.target.value;
  //     if (e.target.name === "type" && e.target.checked) {
  //       console.log (currentValue)
  //       setTypeArray(...typeArray, ...currentValue)
  //       setFormValues({...formValues, type:{typeArray}})
  //      };
  //     if (e.target.name === "feeling" && e.target.checked){
  //       setFeelingArray(...feelingArray, ...currentValue)
  //       console.log(currentValue)
  //       setFormValues({...formValues, feeling:[feelingArray]})
  //       console.log(formValues)
  //     }
  // }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.name !== "type" && e.target.name !== "feeling"){
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }
  }

  const handleCheckChange = (e) => {
    e.preventDefault()
    if(e.target.checked) 
    {
       return setTypeArray([e.target.value])
    }else{return null;}
  }
  // else {
  //    if (e.target.name === "type"){
  //     let array2 = [];
  //     array2.push(e.target.value)
  //     setTypeArray(...array2)
  //     // setTypeArray(...e.target.value);
  //   if (e.target.name ==="feeling"){
  //     let array2 = [];
  //     array2.push(e.target.value)
  //     setFeelingArray(...array2)
  //     // setFeelingArray(...e.target.value);
  //     console.log(feelingArray)
  //   }
  //   }
  // }


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
          });
          console.log(formValues)
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
    // navigate("/resources");
  }

  return (
    <div className = "addpost">
      <h1>DRAFT A POST</h1>
      <form className="resourceDraft" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="title">title</label>
          <br></br>
          <input
            onChange={handleChange}
            value={formValues.title}
            name="title"
            type="text"
            placeholder="Resource Title" required />
        </div>

        <div className ="typeCheckbox">
          <h3>Type</h3>
        <input  type="checkbox"
                name="type"
                onChange={handleCheckChange} 
                value="meditation" /> 
                <label htmlFor="meditation">meditation</label>
        <input  type="checkbox"
                name="type"
                onChange={handleCheckChange} 
                value="movement"/> 
                <label htmlFor="movement">movement</label>
        <input  type="checkbox"
                name="type"
                onChange={handleCheckChange} 
                value="mind-body"/> 
                <label htmlFor="mind-body">mind-body</label>
        <input  type="checkbox"
                name="type"
                onChange={handleCheckChange} 
                value="distraction"/> 
                <label htmlFor="distraction">distraction</label>
        <input  type="checkbox"
                name="type"
                onChange={handleCheckChange} 
                value="grounding" /> 
                <label htmlFor="grounding">grounding</label>
        <input  type="checkbox"
                name="type"
                onChange={handleCheckChange} 
                value="affirmation"/> 
                <label htmlFor="affirmation">affirmation</label>
        </div>

    
        <h3>Feeling</h3>
        <div className = "feelingCheckbox">
            <div><input type="checkbox" 
                   name="feeling" 
                   value="angry"
                   onChange={handleChange} />
            <label htmlFor="angry">angry</label> </div>

            <div><input type="checkbox" 
                    name="feeling" 
                    value="blah"  
                    onChange={handleChange} />
                    <label htmlFor="blah">blah</label></div>
            <div><input type="checkbox" 
                    name="feeling" 
                    onChange={handleChange} 
                    value="fine"  /> </div>
                    <label htmlFor="fine">fine</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="bad"  /> 
                    <label htmlFor="bad">bad</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="afraid"  /> 
                    <label htmlFor="afraid">afraid</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="overwhelmed"  /> 
                    <label htmlFor="overwhelmed">overwhelmed</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="under-stimulated"  /> 
                    <label htmlFor="under-stimulated">under-stimulated</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="calm"  /> 
                    <label htmlFor="calm">calm</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="lonely" /> 
                    <label htmlFor="lonely">lonely</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="extremely irritable" /> 
                    <label htmlFor="extremely-irritable">extremely irritable</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="tired" /> 
                    <label htmlFor="tired">tired</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="self-doubt" /> 
                    <label htmlFor="self-doubt">self-doubt</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="good" /> 
                    <label htmlFor="good">good</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="guilty" /> 
                    <label htmlFor="guilty">guilty</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="disconnected" />
                    <label htmlFor="disconnected">disconnected</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="depressed" /> 
                    <label htmlFor="depressed">depresssed</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="sad" />
                    <label htmlFor="sad">sad</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="frustrated" /> 
                    <label htmlFor="frustrated">frustrated</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="happy" /> 
                    <label htmlFor="happy">happy</label>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleChange}
                    value="totally distraught" /> 
                    <label htmlFor="totally-distraught">totally distraught</label>
        </div>

        <div>
          <label htmlFor="time_requirement">time requirement</label>
          <br></br>
          <select name="time_requirement" id="time_requirement" onChange = {handleChange} required>
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
            required
            placeholder="preview text here" />
        </div>

        <div>
          <label htmlFor="content">content</label>
          <br></br>
          <textarea onChange={handleChange}
            value={formValues.content}
            name="content"
            style={{ width: '50%', height: '200px' }} 
            required/>
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
      