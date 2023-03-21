import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypeCheckboxes from "./TypeCheckboxes";
import FeelingCheckboxes from "./FeelingCheckboxes";

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


    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        const checkboxArray = formValues[name];
        if (checked) {
          setFormValues({
            ...formValues,
            [name]: [...checkboxArray, value]
          });
        } else {
          setFormValues({
            ...formValues,
            [name]: checkboxArray.filter((checkbox) => checkbox !== value)
          });
        }
      };
     

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues);
  };

    function handleOptionChange(e) {
        setSelectedOption(e.target.value);
      }

    const options = [];
    for (let i = 1; i <= 60; i++) {
      options.push(<option key={i} value={i}>{i} minute{ i > 1 ? 's' : '' }</option>);
    }

    //add handlesubmit to form and make function for that
    //figure out how to tie in the chckbox values to this and how to make all this code work

    return (
        <div>
            <h1>DRAFT A POST</h1>
            <form className="resourceDraft" > 
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
                    <label htmlFor="preview">preview text</label>
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
                
                <input type="submit" value="SHARE POST"/>


            </form>
        </div>
    )
}