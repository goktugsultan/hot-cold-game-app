import React , {Component}from 'react';
import { withTranslation } from 'react-i18next';
import Form from './components/Form'
import Progress from './components/Progress'
import HowToPlayDialog from './components/HowToPlayDialog'

import { generateRandomNumber } from './util'
import 'normalize.css';
import {Grid, Typography, Paper, Divider} from '@material-ui/core'


 class App extends Component {
   state = {
     generatedNumber : generateRandomNumber(),
     guess: undefined,
     allGuesses: [],
     attempt : 0,
    
   }

  updateAppState = (guess) => {
    console.log('tahmin:',guess)
    console.log('random:',this.state.generatedNumber)
    const absDiff = Math.abs(guess - this.state.generatedNumber)
    console.log('absDiff :',absDiff)

    this.setState(prevState => ({
      guess:guess,
      allGuesses:[...prevState.allGuesses, {guess}],
      attempt: prevState.attempt + 1,
    }))
  }

  
  render() {
    const { allGuesses, attempt} = this.state
    const guessList = allGuesses.map((item,index) => (
      <li key={index}>
          <span>{item.guess}</span>
      </li>
    ))
    const { t } = this.props;
    return (
        <Grid container style={{ height:'100vh',background:"linear-gradient(to right, red 50%,blue 50%)"}} justify="center" alignItems="center">
          <Grid item xs={4}>
              <Paper style={{padding:'50px'}} elevation={6}>
                <Typography align="center" variant="h4" gutterBottom>
                  {t('hot_or_cold')}
                </Typography>
                <Divider style={{margin:'20px 0'}}/>
                <Form returnGuessToApp={guess => this.updateAppState(guess)}/>
                <HowToPlayDialog/>
                <Progress attempt={attempt} guessList={guessList}></Progress>
              </Paper>
          </Grid>
        </Grid>
    )
  }
}

export default withTranslation()(App);