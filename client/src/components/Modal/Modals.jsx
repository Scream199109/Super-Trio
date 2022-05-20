import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Timer from '../Timer/Timer'
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
  height: 400,
  fontSize: 30,
  display: 'flex',
  flexDirection: "column",
  justifyContent: "space-Around"
};

export default function Modals({ card }) {
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const buttonDisable = () => {
    
  }
  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{ p: '4rem', }} id={card.id} >{card.price} </Button>
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
            <Timer handleClose={handleClose} />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Вопрос :
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {card.question}
            </Typography>
            <TextField id="standard-basic" sx={{ mt: '2rem' }} label="Ответ" variant="standard" />

            <Button variant="contained">Ответить</Button>
          </Box>

        </Fade>
      </Modal>
    </div>
  );
}
