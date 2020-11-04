import React from "react";
import { Container, Grid, Tab, Tabs, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InternshipFAQComponent from "./Sections/InternshipFAQComponent";
import JobFAQComponent from "./Sections/JobFAQComponent";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "0px 0px 20px 0px rgba(15, 15, 15, 0.2)",
    marginBottom: "4em",
  },
}));

const FAQ = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg" style={{paddingTop:"90px",marginTop:"20px"}}>
      <Container maxWidth="xs">
        <Grid container spacing={0}>
          <Grid item sm={12} xs={12} className={classes.tabContainer}>
            <Tabs
              
              value={currentTab}
              onChange={handleTabChange}
              aria-label="FAQ's Tab"
            >
              <Tab label="Internships" />
              <Tab label="Jobs" />
            </Tabs>
          </Grid>
        </Grid>
      </Container>
      {currentTab === 0 ? <InternshipFAQComponent /> : <JobFAQComponent />}
    </Container>
    <Footer/>
    </>
  );
};

export default FAQ;
