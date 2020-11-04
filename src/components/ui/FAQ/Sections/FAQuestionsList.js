import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "0px 0px 20px 0px rgba(15, 15, 15, 0.2)",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "100%",
    flexShrink: 0,
    fontWeight: "800",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const FAQuestionsList = ({ qa }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {Object.entries(qa).map((qna, idx) => (
        <Accordion
          key={qna}
          expanded={expanded === `panel${idx + 1}`}
          onChange={handleChange(`panel${idx + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx + 1}bh-content`}
            id={`panel${idx + 1}bh-header`}
          >
            <h3 className={classes.heading}>{qna[0]}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>{qna[1]}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQuestionsList;
