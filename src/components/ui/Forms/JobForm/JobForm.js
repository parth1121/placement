import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import JobDetailsComponent from "./Sections/JobDetailsComponent";
import JobSalaryAndPerksComponent from "./Sections/JobSalaryAndPerksComponent";
import JobSkillsAndAssesmentComponent from "./Sections/JobSkillsAndAssesmentComponent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { postJob } from "./../FormsHelper";
import { UserContext } from "../../../App";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const JobForm = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [formDetails, setFormDetails] = React.useState({
    JobTitle: "",
    JobType: "",
    JobDescription: "",
    EligibleCities: [],
    NoOfOpenings: 0,
    JobBond: "",
    Perks: [],
    Skills: [],
    MinimumCTC: "",
    MaximumCTC: "",
    FixedPay: "",
    VariablePay: "",
    CandidatePreference: null,
    AssesmentQuestions: [],
    error: false,
  });

  const [
    customizedQuestionsCount,
    setCustomizedQuestionsCount,
  ] = React.useState(0);

  const handleInputChange = (name) => (e) => {
    setFormDetails({
      ...formDetails,
      error: false,
      CompanyId: state && state.CompanyId,
      [name]: e.target.value,
    });
    console.log(formDetails);
  };

  const handleOptionAdd = (name) => (e, value) => {
    setFormDetails({
      ...formDetails,
      error: false,
      [name]: value ? value : [],
    });
    console.log(name, value);
  };

  const handleOptionCheck = (name, value) => (e) => {
    if (!formDetails[name].includes(value)) {
      setFormDetails({
        ...formDetails,
        error: false,
        [name]: [...formDetails[name], value],
      });
    } else {
      setFormDetails({
        ...formDetails,
        error: false,
        [name]: formDetails[name].filter((option) => option !== value),
      });
    }
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAddQuestion = () => {
    setCustomizedQuestionsCount(customizedQuestionsCount + 1);
    setFormDetails({
      ...formDetails,
      error: false,
      AssesmentQuestions:
        formDetails.AssesmentQuestions.length === 0
          ? [formDetails.AssesmentQuestions]
          : [formDetails.AssesmentQuestions, ""],
    });
  };

  const handleEditCustomizedQuestion = (key) => (e) => {
    const assesmentQuestions = [...formDetails.AssesmentQuestions];
    assesmentQuestions[key] = e.target.value;
    setFormDetails({
      ...formDetails,
      error: false,
      AssesmentQuestions: assesmentQuestions,
    });
  };

  const handlePostJob = async () => {
    const jobDetails = {
      ...formDetails,
    };
    const postStatus = await postJob(jobDetails);

    if (postStatus && postStatus.status) {
      console.log("Post Successful");
      history.push("/dashboard/");
    } else {
      console.log("kuch toh Locha hai");
    }
  };

  return (
    <Container
      maxWidth="lg"
      style={{ width: "60%", paddingBottom: "20px", paddingTop: "20px" }}
    >
      <JobDetailsComponent
        handleInputChange={handleInputChange}
        JobTitle={formDetails.JobTitle}
        JobType={formDetails.JobType}
        NoOfOpenings={formDetails.NoOfOpenings}
        JobDescription={formDetails.JobDescription}
        EligibleCities={formDetails.EligibleCities}
        handleOptionAdd={handleOptionAdd}
      />
      <JobSalaryAndPerksComponent
        handleInputChange={handleInputChange}
        handleOptionCheck={handleOptionCheck}
        MinimumCTC={formDetails.MinimumCTC}
        MaximumCTC={formDetails.MaximumCTC}
        FixedPay={formDetails.FixedPay}
        VariablePay={formDetails.VariablePay}
        Perks={formDetails.Perks}
      />
      <JobSkillsAndAssesmentComponent
        handleInputChange={handleInputChange}
        handleOptionAdd={handleOptionAdd}
        CandidatePreference={formDetails.CandidatePreference}
        AssesmentQuestions={formDetails.AssesmentQuestions}
        handleAddQuestion={handleAddQuestion}
        customizedQuestionsCount={customizedQuestionsCount}
        handleEditCustomizedQuestion={handleEditCustomizedQuestion}
      />

      <Grid container spacing={0} style={{ paddingTop: "10px" }}>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary">
            Save Draft
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handlePostJob} variant="contained" color="primary">
            Post Job
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobForm;
