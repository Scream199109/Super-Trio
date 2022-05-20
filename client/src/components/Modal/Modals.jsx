import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Timer from '../Timer/Timer'
import { fontSize } from '@mui/system';
import { TextField } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  fontSize: '2rem',
  justifyContent: 'space-Around'
};

export default function Modals({ card }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [disable, setDisable] = React.useState(false);
  const buttonDisable = () => {
    setDisable(true)
  }
  const inpAnswer = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <p className="btn-p">
        <Button onClick={handleOpen} size='large' disabled={disable} sx={{ p: '4rem', size: 'large' }}>{card.price}</Button>

      </p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Timer handleClose={handleClose} buttonDisable={buttonDisable} />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Вопрос : {card.question}
            </Typography>
            <form >
              <TextField id="standard-basic" name='answer' label="Standard" variant="standard" />
              <Button type='submit' variant="contained">Ответить</Button>
            </form>


          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
