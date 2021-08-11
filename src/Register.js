import { Button } from '@material-ui/core';
import React from 'react'
import {useState} from 'react'
import TextComp from './TextComponent'
import './Register.css'

function Register() {

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [formValidity,setFormValidity] = useState("");

    const registerHandler = () => {
        console.log("Clicked!");
        if(userName === "" || email === "" || password === "" || confirmPassword === "") {
            alert('Fields cannot be empty');
        }
    }

    const keyPressHandler = (e) => {
        if(e.key === "Enter") {
            console.log("Enter Clicked.");
        }
    }

    return (
        <div className = "registerDiv">
            <TextComp name="Username" password="no" onClick={(e) => {setUserName(e.target.value)}} />
            <TextComp name="Email" password="no" onClick={(e) => {setEmail(e.target.value)}} />
            <TextComp name="Password" password="yes" onClick={(e) => {setPassword(e.target.value)}} />
            <TextComp name="Confirm Password" password="yes" onKeyPressHandler={keyPressHandler} onClick={(e) => {setConfirmPassword(e.target.value)}} />
            <br/>
            <Button variant="contained" color="primary" onClick={registerHandler}>REGISTER</Button>
        </div>
        //d8a8c54228601d7b5d4f1c2fb0eaf795 
    )
}

export default Register
