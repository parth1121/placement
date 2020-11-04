import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import InternshipDetailsComponent from "./Sections/InternshipDetailsComponent";
import SkillsAndAssesmentComponent from "./Sections/SkillsAndAssesmentComponent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import StipenedAndPerksComponent from "./Sections/StipenedAndPerksComponent";
import { postInternship } from "../FormsHelper";
import { UserContext } from "../../../App";
import { useHistory } from "react-router-dom";

const Form = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const [formDetails, setFormDetails] = React.useState({
    Profile_Title: "",
    InternshipProfileId: -1,
    InternshipType: "",
    InternshipStartDate: "",
    InternshipDuration: "",
    EligibleCities: [],
    NoOfOpenings: 0,
    Perks: [],
    Skills: [],
    InternshipResponsibilities: "",
    StipenedTypeId: 1,
    StipenedDetail: {
      FixedAmount: "",
      NegotiableFrom: "",
      NegotiableTo: "",
      PerformanceMinimumAssured: "",
      PerformanceIncentiveAmount: "",
      PerformanceIncentiveScale: null,
    },
    AssesmentQuestions: [],
    error: false,
  });

  const [
    customizedQuestionsCount,
    setCustomizedQuestionsCount,
  ] = React.useState(0);

  const handleInputChange = (name) => (e) => {
    if (
      name === "FixedAmount" ||
      name === "NegotiableFrom" ||
      name === "NegotiableTo" ||
      name === "PerformanceMinimumAssured" ||
      name === "PerformanceIncentiveAmount"
    ) {
      setFormDetails({
        ...formDetails,
        error: false,
        CompanyId: state && state.CompanyId,
        StipenedDetail: {
          FixedAmount:
            parseInt(formDetails.StipenedTypeId) === 1 && name === "FixedAmount"
              ? e.target.value
              : null,
          NegotiableFrom:
            parseInt(formDetails.StipenedTypeId) === 2
              ? name === "NegotiableFrom"
                ? e.target.value
                : formDetails.StipenedDetail.NegotiableFrom
              : null,
          NegotiableTo:
            parseInt(formDetails.StipenedTypeId) === 2
              ? name === "NegotiableTo"
                ? e.target.value
                : formDetails.StipenedDetail.NegotiableTo
              : null,
          PerformanceMinimumAssured:
            parseInt(formDetails.StipenedTypeId) === 3
              ? name === "PerformanceMinimumAssured"
                ? e.target.value
                : formDetails.StipenedDetail.PerformanceMinimumAssured
              : null,
          PerformanceIncentiveAmount:
            formDetails.StipenedTypeId === 3
              ? name === "PerformanceIncentiveAmount"
                ? e.target.value
                : formDetails.StipenedDetail.PerformanceIncentiveAmount
              : null,
        },
      });
      return;
    }
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

  const handleAddQuestion = () => {
    setCustomizedQuestionsCount(customizedQuestionsCount + 1);
    setFormDetails({
      ...formDetails,
      error: false,
      AssesmentQuestions: [...formDetails.AssesmentQuestions, ""],
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

  const handlePostInternship = async () => {
    const internshipDetails = {
      ...formDetails,
    };
    const postStatus = await postInternship(internshipDetails);

    if (postStatus && postStatus.status) {
      console.log("Post Successful");
    } else {
      console.log("kuch toh Locha hai");
    }
  };
  return (
    <Container
      maxWidth="lg"
      style={{ width: "60%", paddingBottom: "20px", paddingTop: "20px" }}
    >
      <InternshipDetailsComponent
        handleInputChange={handleInputChange}
        handleOptionAdd={handleOptionAdd}
        InternshipProfileId={formDetails.InternshipProfileId}
        InternshipType={formDetails.InternshipType}
        NoOfOpenings={formDetails.NoOfOpenings}
        InternshipDuration={formDetails.InternshipDuration}
        EligibleCities={formDetails.EligibleCities}
        Profile_Title={formDetails.Profile_Title}
      />
      <StipenedAndPerksComponent
        StipenedTypeId={formDetails.StipenedTypeId}
        handleInputChange={handleInputChange}
        handleOptionCheck={handleOptionCheck}
        Perks={formDetails.Perks}
      />
      <SkillsAndAssesmentComponent
        handleInputChange={handleInputChange}
        handleOptionAdd={handleOptionAdd}
        CandidatePreference={formDetails.CandidatePreference}
        AssesmentQuestions={formDetails.AssesmentQuestions}
        handleAddQuestion={handleAddQuestion}
        customizedQuestionsCount={customizedQuestionsCount}
        handleEditCustomizedQuestion={handleEditCustomizedQuestion}
      />
      <Grid container spacing={0} style={{ paddingTop: "10px" }}>
        <Grid item xs={7}></Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary">
            Save Draft
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handlePostInternship}
            variant="contained"
            color="primary"
          >
            Post Internship
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
