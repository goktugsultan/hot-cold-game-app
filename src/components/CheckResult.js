import React from 'react'
import ResultBoard from './ResultBoard'
import { Button } from '@material-ui/core'



const Situation = ({ isHot, isCold, isWon }) => {

    let situation = isHot ? "HOT" : (isCold ? "COLD" : (isWon ? "YouWon" : "Begin"))
    console.log('situation:', situation)

    return (
        <div >
            <Button
                fullWidth
                type="submit"
                variant="contained"
                style={{
                    background: situation === 'HOT' ? 'red' :
                                situation === 'COLD' ? 'blue' :
                                situation === 'YouWon' ? 'yellow' : "linear-gradient(222deg, rgba(20,54,223,1) 22%, rgba(235,6,6,1) 78%)",
                    color: situation !== 'YouWon' ? 'white' : 'black'
                }}
            >
                <ResultBoard text={situation} />
            </Button>
        </div>
    )
}

export default Situation