export default function TypeCheckboxes({handleCheckboxChange}){
    return(
        <div>
        <label htmlFor="type">type</label>
        <p>{'('}select all that apply{')'}</p>
        <div>
        <input  type="checkbox"
                name="types"
                onChange={handleCheckboxChange} 
                value="meditation" /> <span>meditation</span>
        <input  type="checkbox"
                name="types"
                onChange={handleCheckboxChange} 
                value="movement" /> <span>movement</span>
        <input  type="checkbox"
                name="types"
                onChange={handleCheckboxChange} 
                value="mind-body" /> <span>mind-body</span>
        <input  type="checkbox"
                name="types"
                onChange={handleCheckboxChange} 
                value="distraction" /> <span>distraction</span>
        <input  type="checkbox"
                name="types"
                onChange={handleCheckboxChange} 
                value="grounding" /> <span>grounding</span>
        <input  type="checkbox"
                name="types"
                onChange={handleCheckboxChange} 
                value="affirmation" /> <span>affirmation</span>
        </div>
    </div>

    )
}