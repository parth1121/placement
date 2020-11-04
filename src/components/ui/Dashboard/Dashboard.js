import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link, withRouter, useHistory, Redirect } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Tab, Tabs } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import NonePost from "../NonePost/NonePost";
import { UserContext } from "../../App";

import {
  getPostedJobs,
  getPostedInternships,
  closeInternship,
  closeJob,
} from "./DashboardHelper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [postedJobs, setPostedJobs] = React.useState([]);
  const [postedInternships, setPostedInternships] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const CompanyId = JSON.parse(localStorage.getItem("User")).CompanyId;
      const Type = "internship";

      const applicationStats = await getPostedInternships(CompanyId, Type);

      if (applicationStats && applicationStats.status) {
        console.log(applicationStats);
        setPostedInternships(applicationStats.data[0].ApplicationList);
      }
    }
    if (localStorage.getItem("User")) {
      fetchData();
    }
  }, []);

  const handleTabChange = (e, selectedTab) => {
    setCurrentTab(selectedTab);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const internClick = async () => {
    const CompanyId = JSON.parse(localStorage.getItem("User")).CompanyId;
    const Type = "internship";

    const applicationStats = await getPostedInternships(CompanyId, Type);

    if (applicationStats && applicationStats.status) {
      console.log(applicationStats);
      setPostedInternships(applicationStats.data[0].ApplicationList);
    }
  };

  const jobClick = async () => {
    const CompanyId = JSON.parse(localStorage.getItem("User")).CompanyId;
    const Type = "job";

    const applicationStats = await getPostedJobs(CompanyId, Type);

    if (applicationStats && applicationStats.status) {
      console.log(applicationStats);
      setPostedJobs(applicationStats.data[0].ApplicationList);
    }
  };

  const closeOpening = async (name, Id) => {
    const CompanyId = JSON.parse(localStorage.getItem("User")).CompanyId;
    if (name === 1) {
      const closeStatus = await closeJob(CompanyId, Id);
      if (closeStatus && closeStatus.status) {
        const newPostedJobs = [
          ...postedJobs.filter(
            (job) => job.JobId !== closeStatus.data[0].ApplicationList.JobId
          ),
          closeStatus.data[0].ApplicationList,
        ];
        setPostedJobs(newPostedJobs);
        console.log(closeStatus);
        console.log("Opening Closed");
      } else {
        console.log("kcuh TOh Locha Hai");
      }
    } else {
      const closeStatus = await closeInternship(CompanyId, Id);
      if (closeStatus && closeStatus.status) {
        const newPostedInternships = [
          ...postedInternships.filter(
            (internship) =>
              internship.InternshipId !==
              closeStatus.data[0].ApplicationList.InternshipId
          ),
          closeStatus.data[0].ApplicationList,
        ];
        setPostedInternships(newPostedInternships);
        console.log(closeStatus);
        console.log("Opening Closed");
      } else {
        console.log("kcuh TOh Locha Hai");
      }
    }
  };

  const viewOpening = (type, id) => {
    if (type === 0) {
      history.push(`/internships/details/${id}`);
    }
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            className={classes.tabsContainer}
            style={{ marginBottom: "24px" }}
          >
            <Tab
              className={classes.tab}
              label="Internships"
              onClick={internClick}
            />
            <Tab className={classes.tab} label="Jobs" onClick={jobClick} />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
      {currentTab === 1 ? (
        postedJobs.length > 0 ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>PROFILE</StyledTableCell>
                  <StyledTableCell align="center">STATUS</StyledTableCell>
                  <StyledTableCell align="center">ACTION</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {postedJobs.map((job, idx) => (
                  <StyledTableRow key={job.JobId}>
                    <StyledTableCell component="th" scope="row">
                      {job.JobTitle}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {job.IsActive}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/dashboard/employer/applications/jobs/${job.JobId}`}
                        disableElevation
                      >
                        View Applications
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>
                          <VisibilityIcon style={{ marginRight: "10px" }} />{" "}
                          View Job Details
                        </MenuItem>
                        <MenuItem
                          disabled={!job.IsActive ? true : false}
                          onClick={() => closeOpening(1, job.JobId)}
                        >
                          <HighlightOffIcon style={{ marginRight: "10px" }} />{" "}
                          Close Opening
                        </MenuItem>
                        <MenuItem
                          onClick={handleClose}
                          style={{
                            paddingTop: "2px",
                            paddingBottom: "2px",
                          }}
                        >
                          <AddCircleOutlineIcon
                            style={{ marginRight: "10px" }}
                          />
                          <p>
                            Extend Deadline <br />
                            <span style={{ color: "#d6d6d6" }}>
                              (Expires on 01/09/2020)
                            </span>
                          </p>
                        </MenuItem>
                      </Menu>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <NonePost currentTab="Job" />
        )
      ) : postedInternships.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>PROFILE</StyledTableCell>
                <StyledTableCell align="center">STATUS</StyledTableCell>
                <StyledTableCell align="center">ACTION</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postedInternships.map((internship, idx) => (
                <StyledTableRow key={internship.InternshipId}>
                  <StyledTableCell component="th" scope="row">
                    {internship.Profile_Title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {internship.IsActive}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/dashboard/employer/applications/internship/${internship.InternshipId}`}
                      disableElevation
                    >
                      View Applications
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      aria-controls={`internship-menu-${idx}`}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id={`internship-menu-${idx}`}
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem
                        component={Link}
                        to={`/dashboard/internships/internship/details/${internship.InternshipId}`}
                      >
                        <VisibilityIcon style={{ marginRight: "10px" }} /> View
                        Internship
                      </MenuItem>
                      <MenuItem
                        disabled={internship.IsActive === 0}
                        onClick={() => closeOpening(0, internship.InternshipId)}
                      >
                        <HighlightOffIcon style={{ marginRight: "10px" }} />{" "}
                        Close Internship
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        style={{ paddingTop: "2px", paddingBottom: "2px" }}
                      >
                        <AddCircleOutlineIcon style={{ marginRight: "10px" }} />
                        <p>
                          Extend Deadline <br />
                          <span style={{ color: "#d6d6d6" }}>
                            (Expires on 01/09/2020)
                          </span>
                        </p>
                      </MenuItem>
                    </Menu>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NonePost currentTab="Internship" />
      )}
    </Container>
  );
};

export default Dashboard;
