import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function HowToPlayDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <div>
      <Button
       variant="contained"
       onClick={handleClickOpen}
       fullWidth
       style={{background:"linear-gradient(to right, red 50%,blue 50%)",color:'white',marginTop:'10px'}}>
         {t('how_to_play')}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('game_rules')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is a number Guessing Game with the following rules:
            <ol>
              <li>The machine picks a random number between 1 to 100 and keeps it hidden</li>
              <li>You need to guess until you can find the hidden secret number</li>
              <li>You will get feedback on how close or far your guess is in the form of the following keywords
                ("cold", hot").
              </li>
            </ol>
            Everything clear ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style ={{textAlign:"center"}}color="primary">
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}