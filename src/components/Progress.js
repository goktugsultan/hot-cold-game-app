import React from 'react'
import './Progress.css' 
import { Typography } from '@material-ui/core'

const Progress = ({ attempt,guessList,surname}) => (
    <div>
        <Typography style={{marginTop:'50px'}} variant="h3">Guess # {attempt}</Typography>
        <ul className="progressBar_history">
            {guessList}
        </ul>
            <h4>{surname}</h4>
    </div>
)

export default Progress