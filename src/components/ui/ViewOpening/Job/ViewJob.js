import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Avatar,
  Paper,
  Button,
  Chip,
  Tab,
  Tabs,
} from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { getJobDetail } from "../ViewDetailHelper";
import Navbar from "./../../Navbar/Navbar";
import Footer from "../../../ui/Footer/Footer";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em",
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: "0.4rem",
    padding: "1em 2em 1em 2em",
    marginBottom: "2rem",
  },
  jobTitle: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  companyTitle: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  applyBtn: {
    padding: "0.5rem 2rem 0.5rem 2rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  dataContainer: {
    padding: "1em 2em 1em 2em",
    marginBottom: "2rem",
  },
  heading: {
    marginTop: 0,
    fontWeight: 600,
    marginBottom: "1rem",
  },
  skillChip: {
    marginTop: "1rem",
    marginBottom: "0.5rem",
    marginRight: "1rem",
    padding: "1em 2em 1em 2em",
    borderRadius: "0.4rem",
    fontSize: "1rem",
    fontWeight: 500,
  },
  companyLogo: {
    width: "5rem",
    height: "5rem",
  },
  detailsTabGroup: {
    marginBottom: "1rem",
    borderBottom: "1px solid #ccc",
  },
  detailsTab: {
    fontWeight: 600,
    outline: "none",
    textTransform: "capitalize",
    fontSize: "1.2rem",
  },
}));

const ViewJob = (props) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [jobData, setJobData] = React.useState({
    JobId: "",
    CompanyId: "",
    CompanyName: "",
    JobTitle: "",
    JobType: "",
    EligibleCities: [],
    NoOfOpenings: "",
    Perks: [],
    Skills: [],
    CTC: "",
    MinimumCTC: "",
    MaximumCTC: "",
    FixedPay: "",
    VariablePay: "",
    IsActive: "",
    ComapnyDescription: "",
    ComapanyWebsite: "",
    CompanyEmailId: "",
  });

  React.useEffect(() => {
    async function fetchData() {
      const id = props.match.params.id;
      //props.match.params.id;
      const jobdata = await getJobDetail(id);
      if (jobdata && jobdata.status) {
        setJobData({
          ...jobdata.data[0],
        });
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />

      <Container
        component={Paper}
        elevation={4}
        className={classes.mainContainer}
        maxWidth="md"
      >
        <Grid component={Paper} className={classes.headingContainer} container>
          <Grid item sm={3} xs={3}>
            <Avatar
              className={classes.companyLogo}
              variant="square"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F174%2F174857.png&f=1&nofb=1"
            ></Avatar>
          </Grid>
          <Grid item sm={9} xs={9}>
            <Grid style={{ display: "flex", alignItems: "center" }} container>
              <Grid item xs={12} sm={12}>
                <h1 className={classes.jobTitle}>Hiring {jobData.JobTitle}</h1>
              </Grid>
              <Grid item xs={12} sm={12}>
                <h4 className={classes.companyTitle}>{jobData.CompanyName}</h4>
              </Grid>
              <Grid item xs={12} sm={3}>
                <h6>
                  <AccountBalanceWalletIcon /> {jobData.CTC}
                </h6>
              </Grid>
              <Grid item xs={12} sm={9}>
                <h6>
                  <LocationOnIcon /> {jobData.EligibleCities.toString()} (India)
                </h6>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  className={classes.applyBtn}
                  variant="contained"
                  color="primary"
                >
                  Apply Now
                </Button>
              </Grid>
              <Grid item xs={8} sm={8}>
                <h6>Openings : {jobData.NoOfOpenings}</h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid component={Paper} className={classes.dataContainer} container>
          <Grid item xs={12} sm={12}>
            <h3 className={classes.heading}>Key Skills</h3>
          </Grid>
          <Grid item xs={12} sm={12}>
            {jobData.Skills.map((skill, idx) => (
              <Chip
                key={idx}
                className={classes.skillChip}
                label={skill}
                color="secondary"
              />
            ))}
          </Grid>
        </Grid>

        <Grid component={Paper} className={classes.dataContainer} container>
          <Grid item xs={12} sm={12}>
            <Tabs
              value={currentTab}
              onChange={(event, newValue) => {
                setCurrentTab(newValue);
              }}
              className={classes.detailsTabGroup}
            >
              <Tab
                className={classes.detailsTab}
                disableFocusRipple={true}
                label="Job Details"
              />
              <Tab
                className={classes.detailsTab}
                disableFocusRipple={true}
                label="Company Details"
              />
            </Tabs>
          </Grid>
          <Grid
            style={
              currentTab === 0 ? { display: "none" } : { display: "block" }
            }
            item
            xs={12}
            sm={12}
          >
            {jobData.ComapnyDescription}
          </Grid>
          <Grid
            style={
              currentTab === 0 ? { display: "none" } : { display: "block" }
            }
            item
            xs={12}
            sm={12}
          >
            <br />
          </Grid>
          <Grid
            style={
              currentTab === 0 ? { display: "none" } : { display: "block" }
            }
            item
            xs={12}
            sm={6}
          >
            <a href={jobData.ComapanyWebsite}>{jobData.ComapanyWebsite}</a>
          </Grid>
          <Grid
            style={
              currentTab === 0 ? { display: "none" } : { display: "block" }
            }
            item
            xs={12}
            sm={6}
          >
            {jobData.CompanyEmailId}
          </Grid>
          <Grid
            style={
              currentTab === 1 ? { display: "none" } : { display: "block" }
            }
            item
            xs={12}
            sm={12}
          >
            Selected intern's day-to-day responsibilities include:
            <br />
            <br />
            {jobData.InternshipResponsibilities}
            <br />
            <br />
            If this is something that interests you, let's talk.
          </Grid>
        </Grid>

        <Grid component={Paper} className={classes.dataContainer} container>
          <Grid item xs={12} sm={12}>
            <h3 className={classes.heading}>Perks</h3>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ul>
              {jobData.Perks.map((perk, idx) => (
                <li key={idx}>{perk}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ViewJob;
