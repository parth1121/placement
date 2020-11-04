import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import { stipenedOptions, perks } from "./../../Data";
import UnpaidStipenedComponent from "./UnpaidStipenedComponent";
import FixedStipenedComponent from "./FixedStipenedComponent";
import PerformanceBasedStipenedComponent from "./PerformanceBasedStipenedComponent";
import NegotiableStipenedComponent from "./NegotiableStipenedComponent";

const useStyles = makeStyles((theme) => ({
  formText: {
    fontFamily: "Noto Sans JP",
    fontSize: "22px",
    marginBottom: "14px",
    marginTop: "10px",
  },
  formContainer: {
    border: "2px solid #ccc",
    width: "100%",
  },
}));

const StipenedAndPerksComponent = (props) => {
  const { handleInputChange, handleOptionCheck, StipenedTypeId, Perks } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
      <h3 className={classes.formText}>Stipened And Perks</h3>
      <Container className={classes.formContainer}>
        <h4 className={classes.formText}>Stipened</h4>
        {console.log(StipenedTypeId)}
        <RadioGroup
          aria-label="stipenedType"
          name="stipenedType"
          value={parseInt(StipenedTypeId)}
          onChange={handleInputChange("StipenedTypeId")}
        >
          <Grid container spacing={0}>
            {stipenedOptions.map((stipenedOptions, idx) => (
              <Grid key={idx} item xs={12} sm={3}>
                <FormControlLabel
                  value={stipenedOptions.typeId}
                  control={<Radio color="primary" />}
                  label={stipenedOptions.name}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
        {parseInt(StipenedTypeId) === 1 ? (
          <FixedStipenedComponent handleInputChange={handleInputChange} />
        ) : null}
        {parseInt(StipenedTypeId) === 2 ? (
          <NegotiableStipenedComponent handleInputChange={handleInputChange} />
        ) : null}
        {parseInt(StipenedTypeId) === 3 ? (
          <PerformanceBasedStipenedComponent
            handleInputChange={handleInputChange}
          />
        ) : null}
        {parseInt(StipenedTypeId) === 4 ? (
          <UnpaidStipenedComponent handleInputChange={handleInputChange} />
        ) : null}
        <FormGroup>
          <h4 className={classes.formText}>Perks (Optional)</h4>
          <Grid container spacing={0}>
            {perks.map((perk) => (
              <Grid item xs={6} key={perk.perkId}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      onChange={handleOptionCheck("Perks", perk.perkName)}
                    />
                  }
                  label={perk.perkName}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Container>
    </React.Fragment>
  );
};

export default StipenedAndPerksComponent;
