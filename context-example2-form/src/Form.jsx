import React, { useState } from "react";
import Maininfo from "./Maininfo";
import Skills from "./Skills";

export const FormContext = React.createContext();

export default (props) => {
    
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("");
    const [skills, setSkills] = useState("");


    return(
        <form>
            <FormContext.Provider value={ {email, password, skills,setEmail,setSkills,setPassword} }>
                <Maininfo />
                <Skills />
            </FormContext.Provider>
            <div>
                <p>Email: {email} </p>
                <p>Password</p>
                <p>Skills/Languages: { skills }</p>
            </div>
        </form>
    )
}