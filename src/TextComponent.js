import React from 'react'
import Text from '@material-ui/core/TextField'

function TextComponent(props) {

    const checkPassword = (password) => {
        console.log('password '+ password)
        if(password === "yes") {
            return true;
        }
        return false;
    }

    return (
        <div>
            <p>{props.name}</p>
            {!checkPassword(props.password) && <Text label={props.name} variant="outlined" />}
            {checkPassword(props.password) && <Text label={props.name} type="password" variant="outlined" onKeyPress={props.onKeyPressHandler} />}
        </div>
    )
}

export default TextComponent
