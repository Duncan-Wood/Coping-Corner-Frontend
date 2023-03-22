export default function FeelingCheckboxes({handleCheckboxChange}){

    return(
        <div>
            <input type="checkbox" 
                   name="feeling" 
                   value="angry"/> 
                   onChange={handleCheckboxChange} 
            <label htmlFor="angry">angry</label>
            <input type="checkbox" 
                    name="feeling" 
                    value="blah"  
                    onChange={handleCheckboxChange} 
                    />
                       <label htmlFor="blah">blah</label>   
                    <span>blah</span>
            <input type="checkbox" 
                    name="feeling" 
                    onChange={handleCheckboxChange} 
                    value="fine"  /> 
                    <span>fine</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="bad"  /> 
                    <span>bad</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="afraid"  /> 
                    <span>afraid</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="overwhelmed"  /> 
                    <span>overwhelmed</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="under-stimulated"  /> 
                    <span>under-stimulated</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="calm"  /> 
                    <span>calm</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="lonely" /> 
                    <span>lonely</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="extremely irritable" /> 
                    <span>extremely irritable</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="tired" /> 
                    <span>tired</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="self-doubt" /> 
                    <span>self-doubt</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="good" /> 
                    <span>good</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="guilty" /> 
                    <span>guilty</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="disconnected" />
                    <span>disconnected</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="depressed" /> 
                    <span>depresssed</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="sad" />
                    <span>sad</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="frustrated" /> 
                    <span>frustrated</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="happy" /> 
                    <span>happy</span>
            <input  type="checkbox" 
                    name="feeling"
                    onChange={handleCheckboxChange}
                    value="totally distraught" /> 
                    <span>totally distraught</span>
        </div>
    )
}