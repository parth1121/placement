import React from "react";
import { Grid, Input } from "@material-ui/core";

const FixedStipenedComponent = (props) => {
  const { handleInputChange } = props;
  return (
    <Grid container spacing={1}>
      <Grid item xs={1} sm={1}>
        <Input type="text" disabled value="    ₹" />
      </Grid>
      <Grid item xs={4} sm={4}>
        <Input
          style={{ width: "100%" }}
          type="text"
          placeholder="e.g. 10000"
          onChange={handleInputChange("FixedAmount")}
        />
      </Grid>
      <Grid item xs={3} sm={3}>
        <Input type="text" disabled value="/month" />
      </Grid>
    </Grid>
  );
};

export default FixedStipenedComponent;
