import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Form from './components/Form'
import Progress from './components/Progress'
import HowToPlayDialog from './components/HowToPlayDialog'
import CheckResult from './components/CheckResult'

import { generateRandomNumber } from './util'
import 'normalize.css';
import { Grid, Typography, Paper, Divider } from '@material-ui/core'


class App extends Component {
  state = {
    generatedNumber: generateRandomNumber(),
    guess: undefined,
    allGuesses: [],
    attempt: 0,
    isHot: false,
    isCold: false,
    isWon: false
  }

  updateAppState = (guess) => {
    console.log('tahmin:', guess)
    console.log('random:', this.state.generatedNumber)
    const absDiff = Math.abs(guess - this.state.generatedNumber)
    console.log('absDiff :', absDiff)

    this.setState(prevState => ({
      guess: guess,
      allGuesses: [...prevState.allGuesses, { guess }],
      attempt: prevState.attempt + 1,

    }))

    if (absDiff < 10 && absDiff > 0) {
      this.setState({ isHot: true, isCold: false, isWon: false })
    }
    else if (absDiff > 10) {
      this.setState({ isCold: true, isHot: false, isWon: false })
    }
    else if (absDiff == 0) {
      this.setState({ isWon: true, isHot: false, isCold: false })
    }
  }


  render() {
    const { allGuesses, attempt } = this.state
    const guessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))
    const { t } = this.props;
    return (
      <Grid container style={{ height: '100vh', background: "linear-gradient(222deg, rgba(20,54,223,1) 22%, rgba(235,6,6,1) 78%)" }} justify="center" alignItems="center">
        <Grid item xs={4}>
          <Paper style={{ padding: '50px' }} elevation={6}>
            <Typography align="center" variant="h4" gutterBottom >
              <span style={{ color: 'red' }}>{t('hot')}</span> or <span style={{ color: 'blue' }}>{t('cold')}</span>
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
            <CheckResult
              isHot={this.state.isHot}
              isCold={this.state.isCold}
              isWon={this.state.isWon}
            />
            <Form returnGuessToApp={guess => this.updateAppState(guess)} />
            <HowToPlayDialog />

            <Progress attempt={attempt} guessList={guessList}></Progress>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withTranslation()(App);