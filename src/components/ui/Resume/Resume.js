import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  Button,
  Divider,
  IconButton,
  Chip,
  Modal,
  Fade,
  Backdrop,
  Input,
  InputLabel,
  FormControlLabel,
  Checkbox,
  TextareaAutosize,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import GetAppIcon from "@material-ui/icons/GetApp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  addEducation,
  getResume,
  addWorkExperience,
  addProjects,
} from "./ResumeHelper";
import { Link } from "react-router-dom";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formDate = (Month, Year) => {
  var newDate = new Date();
  newDate.setFullYear(Year);
  newDate.setMonth(months.indexOf(Month));

  return newDate;
};

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    textAlign: "center",
  },
  title: {
    fontFamily: "Noto Sans JP",
    fontWeight: "400",
    fontSize: "2em",
    display: "block",
    marginBottom: "0.2em",
  },
  subTitle: {
    display: "block",
    color: "#976666",
    marginBottom: "0.3em",
  },
  resumeContainer: {
    padding: "3em 4em 3em 4em",
  },
  downloadBtn: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
      display: "none",
    },
    marginLeft: "auto",
    float: "right",
  },
  dwnldIcon: {
    marginRight: "0.3em",
  },
  divider: {
    marginTop: "2em",
  },
  dataContainer: {
    marginTop: "2em",
  },
  entryContainer: {
    marginBottom: "1em",
  },
  skillChip: {
    marginBottom: "0.3em",
    marginRight: "0.6em",
  },
  modalContainer: {
    marginTop: "2em",
    padding: "2em 1em 2em 1em",
  },
  modalInput: {
    marginTop: "0.8em",
    marginBottom: "1.5em",
    border: "1px solid black",
    borderRadius: "0.2em",
    padding: "0 0.4em 0 0.4em",
  },
}));

const Resume = (props) => {
  const classes = useStyles();

  const [resume, setResume] = React.useState({
    UserId: JSON.parse(localStorage.getItem("User")).UserId,
    Name: "",
    EmailId: "",
    EducationDetail: [],
    Internship: [],
    WorkExperience: [],
    Projects: [],
    Skills: [],
    Contact: "",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const id = JSON.parse(localStorage.getItem("User")).UserId;
      const getDataStats = await getResume(id);
      if (getDataStats && getDataStats.status) {
        setResume({ ...getDataStats.data[0] });
        console.log(getDataStats.data[0]);
        console.log("Request Successful");
      } else {
        console.log("Kuch toh Locha Hai");
        console.log(getDataStats);
      }
    };

    fetchData();
  }, []);

  const [openEducationModal, setOpenEducationModal] = React.useState(false);
  const [educationState, setEducationState] = React.useState({
    EducationId: -1,
    CourseName: "",
    InstituteName: "",
    StartDuration: new Date(),
    EndDuration: new Date(),
    Duration: "",
    Grade: "",
  });
  const handleOpenEducationModal = () => {
    setOpenEducationModal(true);
  };
  const handleCloseEducationModal = () => {
    setOpenEducationModal(false);
    setEducationState({
      CourseName: "",
      InstituteName: "",
      StartDuration: new Date(),
      EndDuration: new Date(),
      Duration: "",
      Grade: "",
    });
  };

  const [openJobModal, setOpenJobModal] = React.useState(false);
  const [jobState, setJobState] = React.useState({
    OrganizationName: "",
    Position: "",
    StartDuration: new Date(),
    EndDuration: new Date(),
    Duration: "",
    WorkDescription: "",
    CurrentlyWorksHere: false,
  });
  const handleOpenJobModal = () => {
    setOpenJobModal(true);
  };
  const handleCloseJobModal = () => {
    setOpenJobModal(false);
    setJobState({
      OrganizationName: "",
      Position: "",
      StartDuration: new Date(),
      EndDuration: new Date(),
      Duration: "",
      WorkDescription: "",
      CurrentlyWorksHere: false,
    });
  };

  const [openInternshipModal, setOpenInternshipModal] = React.useState(false);
  const [internshipState, setInternshipState] = React.useState({
    OrganizationName: "",
    Position: "",
    StartDuration: new Date(),
    EndDuration: new Date(),
    Duration: "",
    WorkDescription: "",
    CurrentlyWorksHere: false,
  });
  const handleOpenInternshipModal = () => {
    setOpenInternshipModal(true);
  };
  const handleCloseInternshipModal = () => {
    setOpenInternshipModal(false);
    setInternshipState({
      OrganizationName: "",
      Position: "",
      StartDuration: new Date(),
      EndDuration: new Date(),
      Duration: "",
      WorkDescription: "",
      CurrentlyWorksHere: false,
    });
  };

  const [openProjectModal, setOpenProjectModal] = React.useState(false);
  const [projectState, setProjectState] = React.useState({
    ProjectTitle: "",
    StartDuration: new Date(),
    EndDuration: new Date(),
    Duration: "",
    ProjectDescription: "",
    CurrentlyWorkingOnIt: false,
  });
  const handleOpenProjectModal = () => {
    setOpenProjectModal(true);
  };
  const handleCloseProjectModal = () => {
    setOpenProjectModal(false);
    setProjectState({
      ProjectTitle: "",
      StartDuration: new Date(),
      EndDuration: new Date(),
      Duration: "",
      ProjectDescription: "",
      CurrentlyWorkingOnIt: false,
    });
  };

  const handleInputChange = (idx, name) => (e) => {
    if (idx === 1) {
      setEducationState({
        ...educationState,
        [name]: e.target.value,
      });
      console.log(educationState);
    } else if (idx === 2) {
      setJobState({
        ...jobState,
        [name]: e.target.value,
      });
      console.log(jobState);
    } else if (idx === 3) {
      setInternshipState({
        ...internshipState,
        [name]: e.target.value,
      });
      console.log(internshipState);
    } else {
      setProjectState({
        ...projectState,
        [name]: e.target.value,
      });
      console.log(projectState);
    }
  };

  const handleDateChange = (idx, name, date) => {
    if (idx === 1) {
      setEducationState({
        ...educationState,
        [name]: date,
      });
    } else if (idx === 2) {
      setJobState({
        ...educationState,
        [name]: date,
      });
    } else if (idx === 3) {
      setInternshipState({
        ...internshipState,
        [name]: date,
      });
    } else {
      setProjectState({
        ...projectState,
        [name]: date,
      });
    }
  };

  const handleAddEducation = async () => {
    const duration = `${
      months[educationState.StartDuration.getMonth()]
    } ${educationState.StartDuration.getFullYear()} - ${
      months[educationState.EndDuration.getMonth()]
    } ${educationState.EndDuration.getFullYear()}`;

    const data = {
      ...educationState,
      Duration: duration,
      UserId: JSON.parse(localStorage.getItem("User")).UserId,
    };

    console.log(data);

    const addStatus = await addEducation(data);

    if (addStatus && addStatus.status) {
      setResume({
        ...resume,
        EducationDetail: [...addStatus.data[0].EducationList],
      });
      handleCloseEducationModal();
    } else {
      setEducationState({
        ...educationState,
      });
    }
  };

  const handleAddWorkExperience = async (idx) => {
    var duration = "";
    if (idx === 1) {
      if (jobState.CurrentlyWorksHere) {
        duration = `${
          months[jobState.StartDuration.getMonth()]
        } ${jobState.StartDuration.getFullYear()} - Present`;
      } else {
        duration = `${
          months[jobState.StartDuration.getMonth()]
        } ${jobState.StartDuration.getFullYear()} - ${
          months[jobState.EndDuration.getMonth()]
        } ${jobState.EndDuration.getFullYear()}`;
      }
    } else {
      if (internshipState.CurrentlyWorksHere) {
        duration = `${
          months[internshipState.StartDuration.getMonth()]
        } ${internshipState.StartDuration.getFullYear()} - Present`;
      } else {
        duration = `${
          months[internshipState.StartDuration.getMonth()]
        } ${internshipState.StartDuration.getFullYear()} - ${
          months[internshipState.EndDuration.getMonth()]
        } ${internshipState.EndDuration.getFullYear()}`;
      }
    }

    const data =
      idx === 1
        ? {
            ...jobState,
            Duration: duration,
            UserId: JSON.parse(localStorage.getItem("User")).UserId,
            WorkType: "job",
          }
        : {
            ...internshipState,
            Duration: duration,
            UserId: JSON.parse(localStorage.getItem("User")).UserId,
            WorkType: "internship",
          };

    console.log(data);
    console.log("This Data", jobState);

    const addStatus = await addWorkExperience(data);

    if (addStatus && addStatus.status) {
      data.UserId = null;
      data.StartDuration = null;
      data.EndDuration = null;
      if (idx === 1) {
        setResume({
          ...resume,
          WorkExperience: [...resume.WorkExperience, data],
        });
        handleCloseJobModal();
      } else {
        setResume({
          ...resume,
          Internship: [...resume.Internship, data],
        });
        handleCloseInternshipModal();
      }
    } else {
      if (idx === 1) {
        setJobState({
          ...jobState,
        });
      } else {
        setInternshipState({
          ...internshipState,
        });
      }
    }
  };

  const handleAddProject = async () => {
    var duration = "";
    if (projectState.CurrentlyWorkingOnIt) {
      duration = `${
        months[projectState.StartDuration.getMonth()]
      } ${projectState.StartDuration.getFullYear()} - Present`;
    } else {
      duration = `${
        months[projectState.StartDuration.getMonth()]
      } ${projectState.StartDuration.getFullYear()} - ${
        months[projectState.EndDuration.getMonth()]
      } ${projectState.EndDuration.getFullYear()}`;
    }

    const data = {
      ...projectState,
      Duration: duration,
      UserId: JSON.parse(localStorage.getItem("User")).UserId,
    };

    const addStatus = await addProjects(data);

    if (addStatus && addStatus.status) {
      setResume({
        ...resume,
        Projects: [...addStatus.data[0].ProjectList],
      });
      handleCloseProjectModal();
    } else {
      setProjectState({
        ...projectState,
      });
    }
  };

  const handleEditEducation = (educationData) => {
    handleOpenEducationModal();
    const durationSplit = educationData.Duration.split(" ");
    var startDuration = formDate(durationSplit[0], Number(durationSplit[1]));
    var endDuration;
    if (durationSplit[3] === "Present") {
      endDuration = new Date();
    } else {
      endDuration = formDate(durationSplit[3], Number(durationSplit[4]));
    }
    console.log(educationData);
    setEducationState({
      ...educationData,
      StartDuration: startDuration,
      EndDuration: endDuration,
    });
  };

  const handleEditJob = (jobData) => {
    handleOpenJobModal();
    const durationSplit = jobData.Duration.split(" ");
    var startDuration = formDate(durationSplit[0], Number(durationSplit[1]));
    var endDuration;
    if (durationSplit[3] === "Present") {
      endDuration = new Date();
    } else {
      endDuration = formDate(durationSplit[3], Number(durationSplit[4]));
    }
    console.log(jobData);
    setJobState({
      ...jobData,
      StartDuration: startDuration,
      EndDuration: endDuration,
    });
  };

  const handleEditInternship = (internshipData) => {
    handleOpenInternshipModal();
    const durationSplit = internshipData.Duration.split(" ");
    var startDuration = formDate(durationSplit[0], Number(durationSplit[1]));
    var endDuration;
    if (durationSplit[3] === "Present") {
      endDuration = new Date();
    } else {
      endDuration = formDate(durationSplit[3], Number(durationSplit[4]));
    }
    console.log(internshipData);
    setInternshipState({
      ...internshipData,
      StartDuration: startDuration,
      EndDuration: endDuration,
    });
  };

  const handleEditProject = (projectData) => {
    handleOpenProjectModal();
    const durationSplit = projectData.Duration.split(" ");
    var startDuration = formDate(durationSplit[0], Number(durationSplit[1]));
    var endDuration;
    if (durationSplit[3] === "Present") {
      endDuration = new Date();
    } else {
      endDuration = formDate(durationSplit[3], Number(durationSplit[4]));
    }
    console.log(projectData);
    setProjectState({
      ...projectData,
      StartDuration: startDuration,
      EndDuration: endDuration,
    });
  };

  return (
    <React.Fragment>
      <h1 className={classes.pageTitle}>Resume</h1>
      <Container
        maxWidth={"md"}
        component={Paper}
        className={classes.resumeContainer}
      >
        <Grid container>
          <Grid item xs={12} sm={12}>
            <span className={classes.title}>
              {resume.Name}{" "}
              <Button
                className={classes.downloadBtn}
                variant="outlined"
                color="primary"
              >
                <GetAppIcon className={classes.dwnldIcon} /> Download
              </Button>
            </span>
          </Grid>
          <Grid item xs={12} sm={12}>
            <span className={classes.subTitle}>{resume.EmailId}</span>
          </Grid>
          <Grid item xs={12} sm={12}>
            <span className={classes.subTitle}>+91 {resume.Contact}</span>
          </Grid>
        </Grid>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container className={classes.dataContainer}>
          <Grid item xs={12} sm={4}>
            <span className={classes.subTitle}>EDUCATION</span>
          </Grid>
          <Grid item xs={12} sm={8}>
            {resume.EducationDetail.map((education, idx) => (
              <Grid
                key={`${education} ${idx}`}
                container
                className={classes.entryContainer}
              >
                <Grid item xs={10} sm={10}>
                  <span
                    className={classes.subTitle}
                    style={{ color: "black", fontWeight: "600" }}
                  >
                    {education.CourseName}
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton
                    onClick={() => handleEditEducation(education)}
                    size="small"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {education.InstituteName}
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>{education.Duration}</span>
                </Grid>
              </Grid>
            ))}
            <Grid container className={classes.entryContainer}>
              <Grid item xs={12} sm={12}>
                <Button color="primary" onClick={handleOpenEducationModal}>
                  + Add Education
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Add Education Modal */}
        <Modal
          open={openEducationModal}
          onClose={handleCloseEducationModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openEducationModal}>
            <Container
              component={Paper}
              maxWidth="sm"
              className={classes.modalContainer}
            >
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <span
                    className={classes.subTitle}
                    style={{
                      textAlign: "center",
                      fontSize: "1.5em",
                      marginBottom: "2em",
                    }}
                  >
                    Education Details
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">
                    Course Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={educationState.CourseName}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(1, "CourseName")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">
                    Institute Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={educationState.InstituteName}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(1, "InstituteName")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={6} sm={6}>
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        Start Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={educationState.StartDuration}
                          onChange={(date) =>
                            handleDateChange(1, "StartDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        End Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={educationState.EndDuration}
                          onChange={(date) =>
                            handleDateChange(1, "EndDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel
                    style={{ marginTop: "0.8em" }}
                    htmlFor="component-simple"
                  >
                    Grades
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={educationState.Grade}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(1, "Grade")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    style={{ float: "right", marginTop: "0.6em" }}
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={handleAddEducation}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </Modal>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container className={classes.dataContainer}>
          <Grid item xs={12} sm={4}>
            <span className={classes.subTitle}>JOBS</span>
          </Grid>
          <Grid item xs={12} sm={8}>
            {resume.WorkExperience.map((job, idx) => (
              <Grid
                key={`${job} ${idx}`}
                container
                className={classes.entryContainer}
              >
                <Grid item xs={10} sm={10}>
                  <span
                    className={classes.subTitle}
                    style={{ color: "black", fontWeight: "600" }}
                  >
                    {job.Position}
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton onClick={() => handleEditJob(job)} size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {job.OrganizationName}
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>{job.Duration}</span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {job.WorkDescription}
                  </span>
                </Grid>
              </Grid>
            ))}
            <Grid container className={classes.entryContainer}>
              <Grid item xs={12} sm={12}>
                <Button color="primary" onClick={handleOpenJobModal}>
                  + Add Jobs
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Add Job Modal */}
        <Modal
          open={openJobModal}
          onClose={handleCloseJobModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openJobModal}>
            <Container
              component={Paper}
              maxWidth="sm"
              className={classes.modalContainer}
            >
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <span
                    className={classes.subTitle}
                    style={{
                      textAlign: "center",
                      fontSize: "1.5em",
                      marginBottom: "2em",
                    }}
                  >
                    Job Details
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">
                    Organization Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={jobState.OrganizationName}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(2, "OrganizationName")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">Position</InputLabel>
                  <Input
                    id="component-simple"
                    value={jobState.Position}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(2, "Position")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={6} sm={6}>
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        Start Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={jobState.StartDuration}
                          onChange={(date) =>
                            handleDateChange(2, "StartDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid
                      style={
                        jobState.CurrentlyWorksHere
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      item
                      xs={6}
                      sm={6}
                    >
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        End Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={jobState.EndDuration}
                          onChange={(date) =>
                            handleDateChange(2, "EndDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={jobState.CurrentlyWorksHere}
                            onChange={() =>
                              setJobState({
                                ...jobState,
                                CurrentlyWorksHere: !jobState.CurrentlyWorksHere,
                              })
                            }
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Currently Work Here"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel
                    style={{ marginTop: "0.8em" }}
                    htmlFor="component-simple"
                  >
                    Work Description
                  </InputLabel>
                  <TextareaAutosize
                    className={classes.modalInput}
                    rowsMax={5}
                    rowsMin={3}
                    style={{ width: "100%" }}
                    value={jobState.WorkDescription}
                    disableUnderline
                    onChange={handleInputChange(2, "WorkDescription")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    style={{ float: "right", marginTop: "0.6em" }}
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => handleAddWorkExperience(1)}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </Modal>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container className={classes.dataContainer}>
          <Grid item xs={12} sm={4}>
            <span className={classes.subTitle}>INTERNSHIPS</span>
          </Grid>
          <Grid item xs={12} sm={8}>
            {resume.Internship.map((internship, idx) => (
              <Grid container className={classes.entryContainer}>
                <Grid item xs={10} sm={10}>
                  <span
                    className={classes.subTitle}
                    style={{ color: "black", fontWeight: "600" }}
                  >
                    {internship.Position}
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton
                    onClick={() => handleEditInternship(internship)}
                    size="small"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {internship.OrganizationName}
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {internship.Duration}
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {internship.WorkDescription}
                  </span>
                </Grid>
              </Grid>
            ))}
            <Grid container className={classes.entryContainer}>
              <Grid item xs={12} sm={12}>
                <Button color="primary" onClick={handleOpenInternshipModal}>
                  + Add Internships
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Add Internship Modal */}
        <Modal
          open={openInternshipModal}
          onClose={handleCloseInternshipModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openInternshipModal}>
            <Container
              component={Paper}
              maxWidth="sm"
              className={classes.modalContainer}
            >
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <span
                    className={classes.subTitle}
                    style={{
                      textAlign: "center",
                      fontSize: "1.5em",
                      marginBottom: "2em",
                    }}
                  >
                    Internship Details
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">
                    Organization Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={internshipState.OrganizationName}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(3, "OrganizationName")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">Position</InputLabel>
                  <Input
                    id="component-simple"
                    value={internshipState.Position}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(3, "Position")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={6} sm={6}>
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        Start Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={internshipState.StartDuration}
                          onChange={(date) =>
                            handleDateChange(3, "StartDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid
                      style={
                        internshipState.CurrentlyWorksHere
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      item
                      xs={6}
                      sm={6}
                    >
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        End Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={internshipState.EndDuration}
                          onChange={(date) =>
                            handleDateChange(3, "EndDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={internshipState.CurrentlyWorksHere}
                            onChange={() =>
                              setInternshipState({
                                ...internshipState,
                                CurrentlyWorksHere: !internshipState.CurrentlyWorksHere,
                              })
                            }
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Currently Work Here"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel
                    style={{ marginTop: "0.8em" }}
                    htmlFor="component-simple"
                  >
                    Work Description
                  </InputLabel>
                  <TextareaAutosize
                    className={classes.modalInput}
                    rowsMax={5}
                    rowsMin={3}
                    style={{ width: "100%" }}
                    value={internshipState.WorkDescription}
                    disableUnderline
                    onChange={handleInputChange(3, "WorkDescription")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    style={{ float: "right", marginTop: "0.6em" }}
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => handleAddWorkExperience(2)}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </Modal>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container className={classes.dataContainer}>
          <Grid item xs={12} sm={4}>
            <span className={classes.subTitle}>SKILLS</span>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container className={classes.entryContainer}>
              <Grid item xs={12} sm={12}>
                {resume.Skills.map((skill, idx) => (
                  <Chip
                    key={`${skill} ${idx}`}
                    className={classes.skillChip}
                    label="Python"
                    color="primary"
                  />
                ))}
              </Grid>
            </Grid>
            <Grid container className={classes.entryContainer}>
              <Grid item xs={12} sm={12}>
                <Button color="primary">+ Add Skills</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container className={classes.dataContainer}>
          <Grid item xs={12} sm={4}>
            <span className={classes.subTitle}>PROJECTS</span>
          </Grid>
          <Grid item xs={12} sm={8}>
            {resume.Projects.map((project, idx) => (
              <Grid
                key={`${project} ${idx}`}
                container
                className={classes.entryContainer}
              >
                <Grid item xs={10} sm={10}>
                  <span
                    className={classes.subTitle}
                    style={{ color: "black", fontWeight: "600" }}
                  >
                    {project.ProjectTitle}
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton
                    onClick={() => handleEditProject(project)}
                    size="small"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>{project.Duration}</span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <span className={classes.subTitle}>
                    {project.ProjectDescription}
                  </span>
                </Grid>
              </Grid>
            ))}
            <Grid container className={classes.entryContainer}>
              <Grid item xs={12} sm={12}>
                <Button color="primary" onClick={handleOpenProjectModal}>
                  + Add Project
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Add Project Modal */}
        <Modal
          open={openProjectModal}
          onClose={handleCloseProjectModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openProjectModal}>
            <Container
              component={Paper}
              maxWidth="sm"
              className={classes.modalContainer}
            >
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <span
                    className={classes.subTitle}
                    style={{
                      textAlign: "center",
                      fontSize: "1.5em",
                      marginBottom: "2em",
                    }}
                  >
                    Project Details
                  </span>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel htmlFor="component-simple">
                    Project Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={projectState.ProjectTitle}
                    className={classes.modalInput}
                    fullWidth
                    disableUnderline
                    onChange={handleInputChange(5, "ProjectTitle")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={6} sm={6}>
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        Start Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={projectState.StartDuration}
                          onChange={(date) =>
                            handleDateChange(5, "StartDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <InputLabel style={{ marginBottom: "0.6em" }}>
                        End Year
                      </InputLabel>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          variant="inline"
                          inputVariant="outlined"
                          fullWidth
                          openTo="year"
                          views={["year", "month"]}
                          value={projectState.EndDuration}
                          onChange={(date) =>
                            handleDateChange(5, "EndDuration", date)
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel
                    style={{ marginTop: "0.8em" }}
                    htmlFor="component-simple"
                  >
                    Project Description
                  </InputLabel>
                  <TextareaAutosize
                    className={classes.modalInput}
                    rowsMax={5}
                    rowsMin={3}
                    style={{ width: "100%" }}
                    value={projectState.ProjectDescription}
                    onChange={handleInputChange(5, "ProjectDescription")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    style={{ float: "right", marginTop: "0.6em" }}
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={handleAddProject}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </Modal>

        <Button
          className={classes.downloadBtn}
          variant="outlined"
          color="primary"
          style={{ float: "right" }}
          component={Link}
          to={`/apply/${props.match.params.type}/${props.match.params.id}/${props.match.params.cid}`}
        >
          Proceed to Application
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Resume;
