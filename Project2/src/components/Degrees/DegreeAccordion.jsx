import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const style = {
  marginBottom: "10px",
  textAlign: "left"
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

export default function DegreeAccordion({ concentrations, degreeName, description, title }) {
  const [expanded, setExpanded] = React.useState(false);
  const [courseObj, setCourseObj] = React.useState(null);
  const [courseLoaded, setCourseLoaded] = React.useState(false);
  

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  console.log (title);
  console.log (concentrations);
  return (
    
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
            Concentrations:
          </Typography>
          <ul>
            {concentrations.map((concentration, index) => (
              <li key={index}>{concentration}</li>
            ))}
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
