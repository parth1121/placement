import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import PersonalDetailsComponent from "./Sections/PersonalDetailsComponent";
import OrganizationDetailsComponent from "./Sections/OrganizationDetailsComponent";
import { Grid } from "@material-ui/core";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(4, 69, 127) 0%,rgb(25, 121, 169) 50%,rgb(105, 189, 210) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(4, 69, 127) 0%,rgb(25, 121, 169) 50%,rgb(105, 189, 210) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(4, 69, 127) 0%, rgb(25, 121, 169) 50%, rgb(105, 189, 210) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(4, 69, 127) 0%, rgb(25, 121, 169) 50%, rgb(105, 189, 210) 100%)",
  },
});

const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PeopleIcon />,
    2: <WorkIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepTitle: {
    textAlign: "center",
    fontFamily: "Noto Sans JP",
  },
  btnContainer: {
    marginTop: "2em",
  },
}));

const getSteps = () => {
  return ["Personal Details", "Organization Details"];
};

const OrganizationProfilePage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form Submitted");
  };

  return (
    <Container maxWidth="md">
      <Container maxWidth="sm">
        <div className={classes.root}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </Container>
      <Container maxWidth="md">
        <h2 className={classes.stepTitle}>
          {activeStep === 0 ? steps[0] : steps[1]}
        </h2>
        {activeStep === 0 ? (
          <PersonalDetailsComponent />
        ) : (
          <OrganizationDetailsComponent />
        )}
        <Grid className={classes.btnContainer} container spacing={2}>
          <Grid item xs={12} sm={8}></Grid>
          <Grid style={{ alignItems: "right" }} item xs={6} sm={2}>
            {activeStep === 0 ? (
              <Button
                variant="outlined"
                color="primary"
                disabled
                fullWidth
                onClick={handleBack}
              >
                Back
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleBack}
              >
                Back
              </Button>
            )}
          </Grid>
          <Grid item xs={6} sm={2}>
            {activeStep === 0 ? (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default OrganizationProfilePage;
