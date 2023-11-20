// Imports
import React, { useState } from 'react';
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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const MinorCourse = ({ courseObj, course }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);


  const handleOpen = () => {
    setOpen(true);
    // Finds the course in courseObj by comparing the courseID and course
    const foundCourse = courseObj.find((c) => c.courseID === course);
    // Sets the selectedCourse value to the indexed course that was found in courseObj
    setSelectedCourse(foundCourse);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Sets the button to be the courseID */}
      <Button onClick={handleOpen} className="courseButton" style={{ color: "#F76902" }}>
        {course}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Creates the box and fills it with the selectedCourse's 
        title and description */}
        <Box sx={style}>
          {selectedCourse && (
            <>
            {/* dangerouslySetInnerHTML allows the ampersands to be read correctly */}
              <Typography variant="h3" component="h3" dangerouslySetInnerHTML={{ __html: selectedCourse.title }} />

              <Typography variant="p" component="p" dangerouslySetInnerHTML={{ __html: selectedCourse.description }} />

            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default MinorCourse;
