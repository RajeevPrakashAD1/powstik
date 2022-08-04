import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, Typography, AccordionSummary } from '@mui/material';

const Accordian = ({ Title }) => {
    return (
        <div style={{}}>
            <Accordion style={{ width: 350, borderBottom: "1px solid rgba(139, 195, 74, 0.2)", boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 15,
                            color: "rgba(139, 195, 74, 1)",
                        }}
                    >
                        {Title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Greetings of the day </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default Accordian