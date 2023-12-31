// Imports:
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// CSS style variable
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal({username, facebook, imagePath, interestArea,
    name, phone, office, title, twitter, website, tagLine, email}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "#F76902" }}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h2" component="h2">
            {name}
          </Typography>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <img src={imagePath} alt={name}/>
          {website &&
            <Typography variant="h6" component="h2">
                Website: <a href={website} target="_blank">{website}</a>
            </Typography>
          }
          <Typography variant="h6" component="h2">
                Interest Area: {interestArea}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}