import React from 'react'

import {TextField, Button} from '@material-ui/core'

const Form = ({returnGuessToApp}) => {
    const onSubmit = (event) =>{
        event.preventDefault()
        const guess = event.target.elements.guess.value
        returnGuessToApp(guess)
    }
    return (
        <form style={{marginTop :'20px'}} onSubmit={onSubmit}>
            <TextField 
            style={{paddingBottom:'20px'}} 
            fullWidth 
            type="number" 
            name="guess" 
            label="Enter your guess"
            required
            />
            <Button
            fullWidth 
            type="submit" 
            variant="contained"
            style={{background:"linear-gradient(to right, red 50%,blue 50%)",color:'white'}}
            >Guess
            </Button>
            <Button
            fullWidth  
            variant="contained"
            style={{background:"blue",color:'white',marginTop:'10px'}}
            >How to Play
            </Button>
        </form>
    )
}

export default Form
