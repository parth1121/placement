import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  jobTitle: {
    fontFamily: "Noto Sans JP",
  },
  paperContainer: {
    padding: "20px",
    marginTop: "2em",
  },
  text: {
    margin: "0",
  },
  skillChip: {
    padding: "1em",
    marginRight: "1em",
  },
  btnContainer: {
    marginTop: "2em",
  },
}));

const SingleApplicationComponent = (props) => {
  const classes = useStyles();

  React.useEffect(() => {
    console.log(props.candidateData);
  }, []);
  const {
    UserId,
    Name,
    ApplicationStatus,
    ApplicationId,
    Applied_Date,
    EducationDetail,
    Skills,
    WorkExperience,
    AssesmentAnswers,
  } = props.candidateData;
  const type=props.type;
  const mainId=props.mainid;
  const { handleShortlist, handleReject, handleHire } = props;
  return (
    <Paper elevation={3} className={classes.paperContainer}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={9}>
          <h2 style={{ margin: "0", textAlign: "inherit" }}>{Name}</h2>
        </Grid>
        <Grid item xs={12} sm={2} style={{ textAlign: "right" }}>
          <Chip
            label={
              parseInt(ApplicationStatus) === 0
                ? "Application Received"
                : parseInt(ApplicationStatus) === 1
                ? "Shortlisted"
                : parseInt(ApplicationStatus) === -1
                ? "Rejected"
                : parseInt(ApplicationStatus) === 2
                ? "Hired"
                : null
            }
            color={
              parseInt(ApplicationStatus) === 0
                ? "primary"
                : parseInt(ApplicationStatus) === 1
                ? "secondary"
                : parseInt(ApplicationStatus) === -1
                ? "#FF0000"
                : parseInt(ApplicationStatus) === 2
                ? "#008000"
                : "secondary"
            }
          />
        </Grid>
        <Grid item xs={12} sm={11}>
          <Grid container spacing={0}>
            {WorkExperience ? (
              <Grid
                container
                spacing={0}
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                <Grid item xs={2} sm={2}>
                  <h4 style={{ margin: "0", color: "gray", fontSize: "19px" }}>
                    Work Experience
                  </h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <h4 style={{ margin: "0", fontSize: "20px" }}>
                    {WorkExperience[0]["OrganizationName"]}
                  </h4>
                  <p style={{ margin: "0" }}>{WorkExperience[0]["Position"]}</p>
                </Grid>
              </Grid>
            ) : (
              "null"
            )}
            {EducationDetail ? (
              <Grid
                container
                spacing={0}
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                <Grid item xs={2} sm={2}>
                  <h4 style={{ margin: "0", color: "gray", fontSize: "19px" }}>
                    Education
                  </h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <h4 style={{ margin: "0", fontSize: "20px" }}>
                    {EducationDetail[0]["CourseName"]}
                  </h4>
                  <p style={{ margin: "0" }}>
                    {EducationDetail[0]["InstituteName"]}
                  </p>
                </Grid>
              </Grid>
            ) : (
              "null"
            )}
            {Skills ? (
              <Grid container spacing={0} style={{ marginBottom: "1em" }}>
                <Grid item xs={2} sm={2}>
                  <h4 style={{ margin: "0", color: "gray", fontSize: "19px" }}>
                    Skills
                  </h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  {Skills.map((skill) => (
                    <Chip
                      className={classes.skillChip}
                      color="primary"
                      key={skill}
                      label={skill}
                    />
                  ))}
                </Grid>
              </Grid>
            ) : (
              "null"
            )}

            {AssesmentAnswers.map((qna, idx) => (
              <Grid
                key={qna}
                container
                spacing={0}
                style={{ marginBottom: "1em" }}
              >
                <Grid item xs={2} sm={2}>
                  <h4
                    style={{ margin: "0", color: "gray", fontSize: "19px" }}
                  >{`Answer ${idx + 1}`}</h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <p style={{ margin: "0" }}>{qna}</p>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item xs={12} sm={6}>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "primary",
              }}
              to={`/dashboard/application_detail/${type}/${ApplicationId}/${mainId}`}
            >
              View Full Application
            </Link>
          </Grid>
          <Grid item xs={12} sm={5} style={{ paddingLeft: "98px" }}>
            {parseInt(ApplicationStatus) === -1 ? null : (
              <Button
                variant="contained"
                color="danger"
                disableElevation
                style={{ marginLeft: "1em" }}
                onClick={() => handleReject(ApplicationId)}
              >
                Reject
              </Button>
            )}
            {parseInt(ApplicationStatus) === 1 ? null : (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{ marginLeft: "1em" }}
                onClick={() => handleShortlist(ApplicationId)}
              >
                Shortlist
              </Button>
            )}
            {parseInt(ApplicationStatus) === 2 ? null : (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{ marginLeft: "1em" }}
                onClick={() => handleHire(ApplicationId)}
              >
                Hire
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleApplicationComponent;
