import React, {useContext} from "react";
import { FormContext } from "./Form";

export default (props) => {
    const context = useContext(FormContext)
    return(
        <div>
            <input 
            onChange={(ev) => context.setEmail(ev.target.value)}
            type='email' 
            value={context.email} />
            <input type='password' />
        </div>
    )
}