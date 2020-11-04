import React from "react";
import { Container, Grid, Paper, Button, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import SingleApplicationComponent from "./Sections/SingleApplicationComponent";
import { getAllApplications, updateApplicationStatus } from "./AllJobsHelper";

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

const AllJobsPage = (props) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [applicationsList, setApplicationsList] = React.useState([]);
  
  React.useEffect(() => {
    const type = props.match.params.type;
    const id = props.match.params.id;
    const companyId = JSON.parse(localStorage.getItem("User")).CompanyId;
    const fetchData = async () => {
      const getDataStatus = await getAllApplications(type, id, companyId);

      if (getDataStatus && getDataStatus.status) {
        setApplicationsList(getDataStatus.data[0].ApplicationsList);
        console.log(getDataStatus.data[0].ApplicationsList);
      } else {
        console.log("Kuch toh Locha Hai");
      }
    };
    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleShortlist = async (appId) => {
    const type = props.match.params.type;
    const updateStatus = await updateApplicationStatus(type, {
      ApplicationId: parseInt(appId),
      CompanyId:  JSON.parse(localStorage.getItem("User")).CompanyId,
      ApplicationStatus: 1,
    });

    if (updateStatus && updateStatus.status) {
      const newAppList = applicationsList.map((application) =>
        parseInt(application.ApplicationId) === parseInt(appId)
          ? { ...application, ApplicationStatus: "1" }
          : application
      );
      setApplicationsList(newAppList);
    } else {
      console.log("Kuch Toh Locha Hai");
    }
  };

  const handleReject = async (appId) => {
    const type = props.match.params.type;
    const updateStatus = await updateApplicationStatus(type, {
      ApplicationId: parseInt(appId),
      CompanyId:  JSON.parse(localStorage.getItem("User")).CompanyId,
      ApplicationStatus: -1,
    });

    if (updateStatus && updateStatus.status) {
      const newAppList = applicationsList.map((application) =>
        parseInt(application.ApplicationId) === parseInt(appId)
          ? { ...application, ApplicationStatus: "-1" }
          : application
      );
      setApplicationsList(newAppList);
    } else {
      console.log("Kuch Toh Locha Hai");
    }
  };
  const handleHire = async (appId) => {
    const type = props.match.params.type;
    const updateStatus = await updateApplicationStatus(type, {
      ApplicationId: parseInt(appId),
      CompanyId:  JSON.parse(localStorage.getItem("User")).CompanyId,
      ApplicationStatus: 2,
    });

    if (updateStatus && updateStatus.status) {
      const newAppList = applicationsList.map((application) =>
        parseInt(application.ApplicationId) === parseInt(appId)
          ? { ...application, ApplicationStatus: "2" }
          : application
      );
      setApplicationsList(newAppList);
    } else {
      console.log("Kuch Toh Locha Hai");
    }
  };
  return (
    <Container style={{ padding: "2em" }} maxWidth="lg">
      <h1 className={classes.jobTitle}>
        Applications for Video Making/Editing Internship
      </h1>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="simple tabs example"
      >
        <Tab label="Applications Received" />
        <Tab label="Shortlisted" />
        <Tab label="Hire" />
        <Tab label="Rejected" />
      </Tabs>
      {currentTab === 0
        ? applicationsList.map((data) => (
            <SingleApplicationComponent
              candidateData={data}
              type={props.match.params.type}
              mainid={props.match.params.id}
              handleShortlist={handleShortlist}
              handleReject={handleReject}
              handleHire={handleHire}
            />
          ))
        : null}

      {currentTab === 1
        ? applicationsList.map((data) => {
            if (parseInt(data.ApplicationStatus) === 1) {
              return (
                <SingleApplicationComponent
                  candidateData={data}
                  type={props.match.params.type}
                  mainid={props.match.params.id}
                  handleShortlist={handleShortlist}
                  handleReject={handleReject}
                  handleHire={handleHire}
                />
              );
            } else {
              return <></>;
            }
          })
        : null}

      {currentTab === 2
        ? applicationsList.map((data) => {
            if (parseInt(data.ApplicationStatus) === 2) {
              return (
                <SingleApplicationComponent
                  candidateData={data}
                  type={props.match.params.type}
                  mainid={props.match.params.id}
                  handleShortlist={handleShortlist}
                  handleReject={handleReject}
                  handleHire={handleHire}
                />
              );
            } else {
              return <></>;
            }
          })
        : null}

      {currentTab === 3
        ? applicationsList.map((data) => {
            if (parseInt(data.ApplicationStatus) === -1) {
              return (
                <SingleApplicationComponent
                  candidateData={data}
                  type={props.match.params.type}
                  mainid={props.match.params.id}
                  handleShortlist={handleShortlist}
                  handleReject={handleReject}
                  handleHire={handleHire}
                />
              );
            } else {
              return <></>;
            }
          })
        : null}
    </Container>
  );
};

export default AllJobsPage;
