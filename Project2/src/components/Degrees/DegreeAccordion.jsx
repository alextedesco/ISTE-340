// Imports
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// CSS style variable
const style = {
  marginBottom: "10px",
  textAlign: "left"
};

export default function DegreeAccordion({ concentrations, degreeName, description, title }) {
  const [expanded, setExpanded] = React.useState(false);

  // Function that allows the accordion to open and reveal the details
  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    // Accordion with the Degree title, description, and concentrations
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
