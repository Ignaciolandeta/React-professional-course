import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
    const context = useContext(FormContext);
    
    const addToList = (value, list)=>{
        console.log(":0");
        context.setSkills([value].concat(context.skills))

    }
    
    const removeFromList = (value, list) => context.setSkills(context.skills.filter(v => value))
    
    
    
    return(
        
        <div>
            <p>Email: {context.email} </p>
            <label>
                <input type='checkbox' 
                onChange={(ev) => ev.target.checked ? addToList('Ruby') : removeFromList('Ruby')}
                name='skills' />
                Ruby
            </label>
            <label>
                <input 
                onChange={(ev) => ev.target.checked ? addToList('JavaScript') : removeFromList('JavaScript')}
                type='checkbox' 
                name='skills' />
                JavaScript
            </label>
        </div>
    )
}