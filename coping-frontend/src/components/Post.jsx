import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateResource } from "../Services/ResourceServices";
import TypeCheckboxes from "./TypeCheckboxes";
import FeelingCheckboxes from "./FeelingCheckboxes";
import axios from "axios"

export default function Post () {
    let navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState('');
    const [formValues, setFormValues] = useState({
        title: "",
        previewText: "",
        resourceContent: "",
        imageURL: "",
        resourceURL: "",
        types: [],
        feelings:[]
        
     })

     const checkboxArray = []

    const handleCheckboxChange = (e) => {
        // const { name, value, checked } = e.target;

        if (e.target.checked) {
          // checkboxArray.push(e.target.value)
          let currentValue = e.target.value
          setFormValues({
            ...formValues,
            [e.target.name]: [...checkboxArray, currentValue]
          });
        } 
        }
    
     
      
    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const options = [];
    for (let i = 1; i <= 60; i++) {
      options.push(<option key={i} value={i}>{i} minute{ i > 1 ? 's' : '' }</option>);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      await CreateResource({
        title: formValues.title,
        previewText: formValues.previewText,
        resourceContent: formValues.resourceContent,
        imageURL: formValues.imageURL,
        resourceURL: formValues.resourceURL,
        types: {TypeCheckboxes},
        feelings: {FeelingCheckboxes}

      });
      setFormValues({
        title: "",
        previewText: "",
        resourceContent: "",
        imageURL: "",
        resourceURL: "",
        types: [],
        feelings: []
      });
      navigate("/login");
    };



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const token = localStorage.getItem("token");
    //       const response = await axios.post(
    //         "http://localhost:3001/api/resource/",
    //         JSON.stringify(formValues),
    //         {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    //       console.log(response.data);
    //       navigate(`/posts/${response.data.id}`);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

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
                        placeholder="Type title here.." />
                </div>

            <TypeCheckboxes handleCheckboxChange={handleCheckboxChange}/>
            <FeelingCheckboxes handleCheckboxChange={handleCheckboxChange}/>

                <div>
                    <label htmlFor="options">time requirement</label>
                    <br></br>
                    <select id="options" 
                            value={selectedOption}
                            onChange={handleOptionChange}>
                    <option value="">--choose a duration--</option>
                    {options}
                    </select>
                </div>

                <div>
                    <label htmlFor="previewText">preview text</label>
                    <br></br>
                    <input  onChange={handleChange}
                            value={formValues.previewText}
                            name="previewText"
                            type="text"
                            placeholder="preview text here"/>
                </div>

                <div>
                    <label htmlFor="resourceContent">content</label>
                    <br></br>
                    <textarea   onChange={handleChange}
                                value={formValues.resourceContent}
                                name="resourceContent"
                                style={{ width: '25%', height: '200px' }}/>
                </div>

                <div>
                    <label htmlFor="imageURL">image URL {'('}optional{')'}</label>
                    <br></br>
                    <input  onChange={handleChange} 
                            value={formValues.imageURL}
                            type="text" 
                            name="imageURL"/>
                </div>

                <div>
                    <label htmlFor="imageURL">resource URL {'('}optional{')'}</label>
                    <br></br>
                    <input  onChange={handleChange}  
                            value={formValues.resourceURL}
                            type="text"
                            name="resourceURL" />
                </div>
                
                <input type="submit" value="SHARE POST" disabled={!formValues.title || !formValues.previewText || !formValues.resourceContent || !formValues.types || !formValues.feelings || !selectedOption }/>


            </form>
        </div>
    )
}