import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Checkbox from "@material-ui/core/Checkbox";
import Logo from "../../../assests/images/logocp.jpg"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: "30px 20px 30px 20px",
    fontSize:"22px",
    marginBottom:"14px",
    marginTop:"10px"
  },
  inputLabel: {
    marginTop: "0",
    marginBottom: "0.4em",
    fontStyle:"inherit",
    fontSize:"21px",
  },
  formInput: {
    marginBottom: "0",
  },
  uploadBtn: {
    width: "180%",
    height: "4em",
  },
}));

const OrganizationDetailsComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper elevation={3} className={classes.formContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} style={{paddingBottom:"0px"}}>
            <h3 className={classes.inputLabel}>Organization Name</h3>
            <Input
              disabled
              value="Code Planet Technologies Private Limited"
              className={classes.formInput}
              fullWidth="true"
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "0", marginTop: "0" }}>
            <FormControlLabel
              control={<Checkbox disabled color="primary" />}
              label="I am an independent practicioner (Freelancer, Architect, Lawyer, etc) posting for self."
            />
          </Grid>
          <Grid item xs={12} sm={12} style={{paddingBottom:"0px"}}>
            <h3 className={classes.inputLabel}>Organization Description</h3>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={5}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              style={{ width: "100%" }}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={12} style={{paddingBottom:"0px"}}>
            <h3 className={classes.inputLabel}>
              Organization Logo (Recommended)
            </h3>
          </Grid>
          <Grid item xs={12} sm={4} style={{paddingBottom:"0px"}}>
            <Paper elevation={2}>
              <img style={{ width: "100%", height: "100%" }} src={Logo} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}></Grid>
          <Grid item xs={12} sm={4} style={{paddingBottom:"0px"}}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Button
                className={classes.uploadBtn}
                variant="contained"
                color="primary"
                component="span"
              >
                Change Logo
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={8}></Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        className={classes.formContainer}
        style={{ marginTop: "2em" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} style={{paddingBottom:"0px"}}>
            <h3 className={classes.inputLabel}>
              Organization Name <VerifiedUserIcon style={{ color: "green" }} />
            </h3>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h3 style={{fontSize:"16px",fontStyle:"inherit"}}>
              Organization Website:   <a href="http://www.codeplanet.co.in/" style={{color:"blue",fontSize:"15px"}}>http://www.codeplanet.co.in/</a>
            </h3>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default OrganizationDetailsComponent;
