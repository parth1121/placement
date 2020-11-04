import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const PersonalDetailsComponent = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.formContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <h3 className={classes.inputLabel}>First Name</h3>
          <Input
            disabled
            className={classes.formInput}
            value="Divyanshu"
            fullWidth="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3 className={classes.inputLabel}>Last Name</h3>
          <Input
            disabled
            className={classes.formInput}
            value="Rawat"
            fullWidth="true"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <h3 className={classes.inputLabel}>Email ID</h3>
          <Input
            disabled
            className={classes.formInput}
            type="email"
            value="dev.divyanshu19@gmail.com"
            fullWidth="true"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <h3 className={classes.inputLabel}>Mobile Number</h3>
          <Grid container spacing={4}>
            <Grid item xs={2} sm={2}>
              <Input
                className={classes.formInput}
                type="email"
                fullWidth="true"
                disabled
                value="+91"
              />
            </Grid>
            <Grid item xs={10} sm={10}>
              <Input
                disabled
                className={classes.formInput}
                type="email"
                value="9782078240"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PersonalDetailsComponent;
