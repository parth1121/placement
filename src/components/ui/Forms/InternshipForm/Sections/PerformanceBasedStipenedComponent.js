import React from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  formText: {
    fontFamily: "Noto Sans JP",
  },
}));

const PerformanceBasedStipenedComponent = (props) => {
  const { handleInputChange } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <h4
        className={classes.formText}
        style={{
          color: " rgb(158, 158, 158)",
          fontSize: "15px",
          marginBottom: "17px",
        }}
      >
        For output-driven performance-based internships, such as Business
        Development (Sales), etc. we insist on a minimum assured stipend (₹1000
        for a work from home internship and ₹2000 for an in-office internship)
        and the rest could be incentive-based
      </h4>
      <h5 className={classes.formText}>Minimum Assured</h5>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={1}>
          <Input type="text" disabled value="    ₹" />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Input
            style={{ width: "100%" }}
            type="text"
            placeholder="e.g. 10000"
            onChange={handleInputChange("PerformanceMinimumAssured")}
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Input type="text" disabled value="/month" />
        </Grid>
      </Grid>
      <h5 className={classes.formText} style={{ marginTop: "10px" }}>
        Incentives Based
      </h5>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={1}>
          <Input type="text" disabled value="    ₹" />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Input
            style={{ width: "100%" }}
            type="text"
            placeholder="e.g. 10000"
            onChange={handleInputChange("PerformanceIncentiveAmount")}
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Input type="text" disabled value="/month" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PerformanceBasedStipenedComponent;
