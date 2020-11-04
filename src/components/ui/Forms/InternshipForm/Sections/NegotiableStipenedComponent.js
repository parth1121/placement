import React from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

const NegotiableStipenedComponent = (props) => {
  const { handleInputChange } = props;
  return (
    <React.Fragment>
      <h4
        style={{
          fontFamily: "Noto Sans JP",
          color: " rgb(158, 158, 158)",
          fontSize: "15px",
          marginBottom: "17px",
        }}
      >
        The stipend must be negotiated and finalised before the internship
        starts
      </h4>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={1}>
          <Input type="text" disabled value="    ₹" />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Input
            style={{ width: "100%" }}
            type="text"
            placeholder="e.g. 10000"
            onChange={handleInputChange("NegotiableFrom")}
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <Input type="text" disabled value=" to " />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Input
            style={{ width: "100%" }}
            type="text"
            placeholder="e.g. 10000"
            onChange={handleInputChange("NegotiableTo")}
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <Input type="text" disabled value="/month" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NegotiableStipenedComponent;
