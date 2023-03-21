import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreateResource } from "../Services/ResourceServices";
import TypeCheckboxes from "./TypeCheckboxes";
import FeelingCheckboxes from "./FeelingCheckboxes";
import { UserProvider } from "../UserProvider";


export default function Post() {
  let navigate = useNavigate()
  const {user} = useContext(UserProvider);
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

  const typeArray = []
  const feelingArray = []

  const handleCheckboxChange = (e) => {
      let currentValue = "";
      currentValue = e.target.value;
      if (e.target.name == "type") {
        typeArray+=(currentValue)
        console.log (typeArray)
        setFormValues({...formValues, [e.target.type]:{typeArray}})
       };
      if (e.target.name == "feeling"){
        feelingArray+=(currentValue);
        console.log (typeArray)
        setFormValues({...formValues, [e.target.feeling]:{feelingArray}})
       
      }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormValues({ ...formValues, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues)
    await CreateResource({
      user_id: user.id,
      title: formValues.title,
      type: formValues.type,
      feeling: formValues.feeling,
      time_requirement: formValues.time_requirement,
      preview_text: formValues.preview_text,
      content:formValues.preview_content,
      optional_image: formValues.optional_image,
      optional_link: formValues.optional_link
          });
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
    navigate("/resources");
  }

  return (
    <div>
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
            placeholder="Resource Title" />
        </div>

        <TypeCheckboxes handleCheckboxChange={handleCheckboxChange} />
        <FeelingCheckboxes handleCheckboxChange={handleCheckboxChange} />

        <div>
          <label htmlFor="time_requirement">time requirement</label>
          <br></br>
          <select name="time_requirement" id="time_requirement">
            <option name="time_requirement" value="">--choose a duration--</option>
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
          <textarea onChange={handleChange}
            value={formValues.content}
            name="content"
            style={{ width: '25%', height: '200px' }} />
        </div>

        <div>
          <label htmlFor="imageURL">image URL {'('}optional{')'}</label>
          <br></br>
          <input onChange={handleChange}
            value={formValues.imageURL}
            type="text"
            name="imageURL" />
        </div>

        <div>
          <label htmlFor="imageURL">resource URL {'('}optional{')'}</label>
          <br></br>
          <input onChange={handleChange}
            value={formValues.resourceURL}
            type="text"
            name="resourceURL" />
        </div>
