// Imports
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MinorCourse from './MinorCourse'

// CSS style variable
const style = {
  marginBottom: "10px",
  textAlign: "left"
};

const MinorAccordion = ({ courseObj, courses, description, name, title }) => {
    //instance vars
  const [expanded, setExpanded] = React.useState(false);

  // Expands the Accordion when clicked
  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    // Builds the accordion with the minor information
    <Accordion expanded={expanded} onChange={handleToggle} sx={style}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography variant="p" component="div">
            {description}
          </Typography>
          <Typography variant="h6" component="h2">
            Courses:
          </Typography>
          <ul>
            {/* Passes the current indexed course and courseObj which has
            all the courses in the iSchool. The MinorCourse component will filter 
            through the object until it finds the indexed course.*/}
            {courses.map((course, index) => (
              <li key={index}>
                  <MinorCourse courseObj={courseObj} course={course} />
              </li>
            ))}
          </ul>

        </div>
      </AccordionDetails>
    </Accordion>
  );
}
export default MinorAccordion
