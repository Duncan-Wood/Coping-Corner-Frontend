export default function FeelingCheckboxes({handleCheckboxChange}){

    return(
        <div>
            <input type="checkbox" 
                   name="feelings" 
                   onChange={handleCheckboxChange} 
                   value="angry"/> 
                   <span>angry</span>
            <input type="checkbox" 
                    name="feelings" 
                    onChange={handleCheckboxChange} 
                    value="blah"  />
                    <span>blah</span>
            <input type="checkbox" 
                    name="feelings" 
                    onChange={handleCheckboxChange} 
                    value="fine"  /> 
                    <span>fine</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="bad"  /> 
                    <span>bad</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="afraid"  /> 
                    <span>afraid</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="overwhelmed"  /> 
                    <span>overwhelmed</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="under-stimulated"  /> 
                    <span>under-stimulated</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="calm"  /> 
                    <span>calm</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="lonely" /> 
                    <span>lonely</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="extremely irritable" /> 
                    <span>extremely irritable</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="tired" /> 
                    <span>tired</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="self-doubt" /> 
                    <span>self-doubt</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="good" /> 
                    <span>good</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="guilty" /> 
                    <span>guilty</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="disconnected" />
                    <span>disconnected</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="depressed" /> 
                    <span>depresssed</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="sad" />
                    <span>sad</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="frustrated" /> 
                    <span>frustrated</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="happy" /> 
                    <span>happy</span>
            <input  type="checkbox" 
                    name="feelings"
                    onChange={handleCheckboxChange}
                    value="totally distraught" /> 
                    <span>totally distraught</span>
        </div>
    )
}