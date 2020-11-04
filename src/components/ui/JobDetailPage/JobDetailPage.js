import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { getApplicationData } from "./JobDetailhelper";
import { getAllApplications, updateApplicationStatus } from "../AllJobsPages/AllJobsHelper";

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

const Skills = [
  "Python",
  "Java",
  "UI-UX",
  "Web Development",
  "Machine Learning",
];

const resume = {
  Education: [
    {
      CourseName: "Bachelor Of Technology",
      InstituteName: "Birla Institute Of Technology",
      Duration: "May 2018 - July 2022",
      Grade: "10 CGPA",
    },
    {
      CourseName: "Bachelor Of Technology",
      InstituteName: "Birla Institute Of Technology",
      Duration: "May 2018 - July 2022",
      Grade: "10 CGPA",
    },
  ],
  Internships: [
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
  ],
  "Work Experience": [
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
  ],
  Projects: [
    {
      ProjectTitle: "Restaurants",
      Duration: "Jan 2019 - Mar 2019",
      ProjectDescription:
        "This Application is made by using spring framework. And it is Dynamic Web Application.",
    },
    {
      ProjectTitle: "Restaurants",
      Duration: "Jan 2019 - Mar 2019",
      ProjectDescription:
        "This Application is made by using spring framework. And it is Dynamic Web Application.csbhcvjhcvdcdhbsjdvk sccdcdcdcdcdevevesvbjsvdvkdvndfjkvd",
    },
  ],
  Contact: [{ Phone: "+91 9782078240" }],
};

const JobDetailPage = (props) => {
  const classes = useStyles();
  const [assesment, setAssesment] = React.useState([]);
  const [Resume, setResume] = React.useState({});
  const [skills, setSkills] = React.useState([]);
  const [personalData, setPersonalData] = React.useState({});


  const handleShortlist = async (appId) => {
    const type = props.match.params.type;
    const updateStatus = await updateApplicationStatus(type, {
      ApplicationId: props.match.params.apkid,
      CompanyId:  JSON.parse(localStorage.getItem("User")).CompanyId,
      ApplicationStatus: 1,
    });
    if (updateStatus && updateStatus.status) {
     
      setPersonalData({
        ...personalData,
        ApplicationStatus: "1",
      });
    } else {
      console.log("Kuch Toh Locha Hai");
    }
  };

  const handleReject = async (appId) => {
    const type = props.match.params.type;
    const updateStatus = await updateApplicationStatus(type, {
      ApplicationId:props.match.params.apkid,
      CompanyId:  JSON.parse(localStorage.getItem("User")).CompanyId,
      ApplicationStatus: -1,
    });

    if (updateStatus && updateStatus.status) {
      setPersonalData({
        ...personalData,
        ApplicationStatus: "-1",
      });
    } else {
      console.log("Kuch Toh Locha Hai");
    }
  };
  const handleHire = async (appId) => {
    const type = props.match.params.type;
    const updateStatus = await updateApplicationStatus(type, {
      ApplicationId: props.match.params.apkid,
      CompanyId:  JSON.parse(localStorage.getItem("User")).CompanyId,
      ApplicationStatus: 2,
    });

    if (updateStatus && updateStatus.status) {
      setPersonalData({
        ...personalData,
        ApplicationStatus: "2",
      });
    } else {
      console.log("Kuch Toh Locha Hai");
    }
  };
  
  React.useEffect(() => {
    const fetchData = async () => {
      const apkId = props.match.params.apkid;
      const compId = JSON.parse(localStorage.getItem("User")).CompanyId;
      const type =props.match.params.type;
      const jId = props.match.params.id;

      const appData = await getApplicationData(compId, type, jId, apkId);

      if (appData && appData.status) {
        console.log("Data", appData);

        var tempAssesment = [];
        for (
          var idx = 0;
          idx < appData.data[0].AssesmentQuestion.length;
          idx++
        ) {
          const qna = {
            Question: appData.data[0].AssesmentQuestion[idx].Questions,
            UserAnswer: appData.data[0].ApplicationData.AssesmentAnswers[idx],
          };
          tempAssesment = [...tempAssesment, qna];
        }
        setAssesment(tempAssesment);
        setSkills(appData.data[0].Resume.Skills);

        setPersonalData({
          UserId: appData.data[0].Resume.UserId,
          Name: appData.data[0].Resume.Name,
          EmailId: appData.data[0].Resume.EmailId,
          Contact: appData.data[0].Resume.Contact,
          ApplicationStatus: appData.data[0].ApplicationData.ApplicationStatus,
        });

        setResume({
          EducationDetail: appData.data[0].Resume.EducationDetail,
          Internship: appData.data[0].Resume.Internship,
          WorkExperience: appData.data[0].Resume.WorkExperience,
          Projects: appData.data[0].Resume.Projects,
        });
      } else {
        console.log("kuch toh locha hai");
      }
    };
    fetchData();
  }, []);

  return (
    <Container style={{ padding: "2em" }} maxWidth="lg">
      <h1 className={classes.jobTitle}>
        Applications for Video Making/Editing Internship
      </h1>

      <Paper elevation={3} className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={8} sm={8}>
            <h2 style={{ margin: "0px", textAlign: "inherit" }}>
              {personalData.Name}
            </h2>
          </Grid>
          <Grid item xs={4} sm={4} style={{ textAlign: "right" }}>
            <Chip
              label={
                parseInt(personalData.ApplicationStatus) === 0
                  ? "Application Received"
                  : parseInt(personalData.ApplicationStatus) === 1
                  ? "Shortlisted"
                  : parseInt(personalData.ApplicationStatus) === -1
                  ? "Rejected"
                  : parseInt(personalData.ApplicationStatus) === 2
                  ? "Hired"
                  : null
              }
              color={
                parseInt(personalData.ApplicationStatus) === 0
                  ? "primary"
                  : parseInt(personalData.ApplicationStatus) === 1
                  ? "secondary"
                  : parseInt(personalData.ApplicationStatus) === -1
                  ? "#FF0000"
                  : parseInt(personalData.ApplicationStatus) === 2
                  ? "#008000"
                  : "secondary"
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            {personalData.EmailId} | {personalData.Contact}
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          <Grid item xs={12} sm={2}>
            <h3 style={{ margin: "0" }}>Skills</h3>
          </Grid>
          <Grid item xs={12} sm={8}>
            {skills.map((skill) => (
              <Chip
                className={classes.skillChip}
                color="primary"
                key={skill}
                label={skill}
              />
            ))}
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h2 style={{ margin: "0", textAlign: "inherit" }}>Assesment</h2>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {assesment.map((qna, idx) => (
            <Grid key={qna} item xs={12} sm={12}>
              <h4 style={{ margin: "0", fontSize: "19px" }}>{`Q${idx + 1} ${
                qna.Question
              }`}</h4>
              <p>{qna.UserAnswer}</p>
              <br />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={3} className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h2 style={{ margin: "0", textAlign: "inherit" }}>Resume</h2>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {Resume.EducationDetail ? (
            <Grid container spacing={0}>
              <Grid item xs={2} sm={3}>
                <b>Education</b>
              </Grid>
              <Grid item xs={10} sm={9}>
                <Grid container spacing={0}>
                  {Resume.EducationDetail.map((entry) => (
                    <Grid
                      container
                      spacing={0}
                      style={{ paddingBottom: "6px" }}
                    >
                      <Grid item xs={12} sm={12}>
                        <b>{entry.CourseName}</b>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.InstituteName}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.Duration}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <br />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {Resume.WorkExperience ? (
            <Grid container spacing={0}>
              <Grid item xs={2} sm={3}>
                <b>Work Experience</b>
              </Grid>
              <Grid item xs={10} sm={9}>
                <Grid container spacing={0}>
                  {Resume.WorkExperience.map((entry) => (
                    <Grid
                      container
                      spacing={0}
                      style={{ paddingBottom: "6px" }}
                    >
                      <Grid item xs={12} sm={12}>
                        <b>{entry.Position}</b>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.OrganizationName}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.Duration}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <br />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {Resume.Internship ? (
            <Grid container spacing={0}>
              <Grid item xs={2} sm={3}>
                <b>Internships</b>
              </Grid>
              <Grid item xs={10} sm={9}>
                <Grid container spacing={0}>
                  {Resume.Internship.map((entry) => (
                    <Grid
                      container
                      spacing={0}
                      style={{ paddingBottom: "6px" }}
                    >
                      <Grid item xs={12} sm={12}>
                        <b>{entry.Position}</b>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.OrganizationName}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.Duration}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <br />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {Resume.EducationDetail ? (
            <Grid container spacing={0}>
              <Grid item xs={2} sm={3}>
                <b>Projects</b>
              </Grid>
              <Grid item xs={10} sm={9}>
                <Grid container spacing={0}>
                  {Resume.Projects.map((entry) => (
                    <Grid
                      container
                      spacing={0}
                      style={{ paddingBottom: "6px" }}
                    >
                      <Grid item xs={12} sm={12}>
                        <b>{entry.ProjectTitle}</b>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.ProjectDescription}
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        {entry.Duration}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <br />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Paper>

      <Grid className={classes.btnContainer} container spacing={1}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={1}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleHire}
          >
            Hire
          </Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button fullWidth variant="contained" color="danger" onClick={handleReject} disableElevation>
            Reject
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button fullWidth variant="outlined" color="primary" onClick={handleShortlist} disableElevation>
            Short List
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobDetailPage;
