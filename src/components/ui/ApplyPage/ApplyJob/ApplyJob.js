import React from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import {
  Container,
  Paper,
  Grid,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  getAssesmentQuestions,
  generateJobApplication,
  submitJobApplication,
} from "./../ApplyHelper";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  questionText: {
    marginBottom: "0.5rem",
  },
  textInput: {
    padding: "1rem",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
}));

const ApplyJob = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [assesmentQuestions, setAssesmentQuestions] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState({});

  React.useEffect(() => {
    const fetchQuestions = async () => {
      const type = props.match.params.type;
      const id = props.match.params.id;

      const questionsData = await getAssesmentQuestions(type, id);

      if (questionsData && questionsData.status) {
        const questionsList = [...questionsData.data[0].AssesmentQuestionsList];
        setAssesmentQuestions(questionsList);
        for (var i = 0; i < questionsList.length; i++) {
          setUserAnswers({ ...userAnswers, [questionsList[i].QuestionId]: "" });
        }
        console.log("submit application done");
       
      } else {
        console.log("locha");
      }
    };
    fetchQuestions();
  }, []);

  const onAnswerChange = (id) => (e) => {
    setUserAnswers({
      ...userAnswers,
      [id]: e.target.value,
    });
    console.log(userAnswers);
  };

  const submitApplication = async () => {
    var genApplicationStatus;
    if(props.match.params.type==="internship"){
     genApplicationStatus = await generateJobApplication({
      UserId: JSON.parse(localStorage.getItem("User")).UserId,
      CompanyId: props.match.params.cid,
      InternshipId: props.match.params.id,
      type:props.match.params.type,
    });}
    if(props.match.params.type==="job"){
       genApplicationStatus = await generateJobApplication({
        UserId: JSON.parse(localStorage.getItem("User")).UserId,
        CompanyId: props.match.params.cid,
        JobId: props.match.params.id,
        type:props.match.params.type,
      });
    }

    if (genApplicationStatus && genApplicationStatus.status) {
      const applicationId =
        genApplicationStatus.data[0].ApplicationData.ApplicationId;

      const applicationData = {
        UserAnwsers: userAnswers,
        ApplicationId: applicationId,
        UserId:JSON.parse(localStorage.getItem("User")).UserId,
        CompanyId: props.match.params.cid,
      };

      const submitStatus = await submitJobApplication(applicationData);

      if (submitStatus && submitStatus.status) {
        console.log("Application Submitted Succesfully");
        history.push("/");
      } else {
        console.log("Locha in Submitting");
      }
    } else {
      console.log("Error in Generating Application ID");
    }
  };

  return (
    <Container style={{ padding: "1rem" }} maxWidth="md" component={Paper}>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <h1 className={classes.title}>Application Assesment</h1>
        </Grid>
        <Grid item xs={12} sm={12}>
          {assesmentQuestions.map((question, idx) => (
            <React.Fragment key={idx}>
              <h3 className={classes.questionText}>{question.Questions}</h3>
              <TextareaAutosize
                className={classes.textInput}
                rowsMax={5}
                rowsMin={3}
                style={{ width: "100%" }}
                onChange={onAnswerChange(question.QuestionId)}
                value={userAnswers[question.QuestionId]}
              />
            </React.Fragment>
          ))}
        </Grid>
        <Grid item xs={12} xm={12}>
          <Button
            style={{ float: "right" }}
            variant="contained"
            color="primary"
            onClick={submitApplication}
          >
            Submit Application
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApplyJob;
