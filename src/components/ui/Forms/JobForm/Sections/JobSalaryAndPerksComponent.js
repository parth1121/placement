import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { profile, internshipType, cities, perks } from "../../Data";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

const useStyles = makeStyles(() => ({
  formContainer: {
    border: "2px solid #ccc",
    width: "100%",
  },
  formText: {
    fontFamily: "Noto Sans JP",
    fontSize: "22px",
    marginBottom: "14px",
    marginTop: "10px",
  },
}));

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")`
  width: 100%;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  color: #ffffff;
  line-height: 22px;
  background-color: #0b72b9;
  border: 1px solid #ffffff;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled("ul")`
  width: 100%;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected="true"] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus="true"] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

const JobSalaryAndPerksComponent = (props) => {
  const classes = useStyles();
  const { handleOptionCheck, handleInputChange } = props;
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value: selectedCities,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [],
    multiple: true,
    options: cities,
    getOptionLabel: (option) => option,
  });
  return (
    <React.Fragment>
      <h3 className={classes.formText}>Salary And Perks</h3>
      <Container className={classes.formContainer}>
        <FormControl style={{ width: "100%" }} component="fieldset">
          <h4 className={classes.formText}>CTC</h4>
          <Grid container spacing={0}>
            <Grid item sm={4} xs={12}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input onChange={handleInputChange("MinimumCTC")} type="text" />
              </InputWrapper>
            </Grid>
            <Grid item sm={1} xs={12}>
              <InputWrapper
                className={focused ? "focused" : ""}
                style={{
                  paddingLeft: "19px",
                  marginLeft: "3px",
                  background: "ghostwhite",
                }}
              >
                <input type="text" disabled value="to" />
              </InputWrapper>
            </Grid>
            <Grid item sm={4} xs={6}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input onChange={handleInputChange("MaximumCTC")} type="text" />
              </InputWrapper>
            </Grid>
            <Grid item sm={3} xs={6}>
              <InputWrapper
                className={focused ? "focused" : ""}
                style={{
                  width: "32%",
                  paddingLeft: "11px",
                  marginLeft: "3px",
                  background: "ghostwhite",
                }}
              >
                <input type="text" disabled value="LPA" />
              </InputWrapper>
            </Grid>
          </Grid>
          <h4 className={classes.formText}>CTC Breakup</h4>
          <h4
            className={classes.formText}
            style={{ color: "#ccc", fontSize: "14px", marginBottom: "2px" }}
          >
            Transparent CTC breakup attracts top candidates.
          </h4>

          <h4 className={classes.formText}>Fixed Pay</h4>
          <h4
            className={classes.formText}
            style={{ color: "#ccc", marginTop: "0", fontSize: "14px" }}
          >
            Fixed Pay is the fixed Component of CTC.
          </h4>
          <Grid container spacing={0}>
            <Grid item sm={6} xs={6}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input onChange={handleInputChange("FixedPay")} type="text" />
              </InputWrapper>
            </Grid>
            <Grid item sm={6} xs={6}>
              <InputWrapper
                className={focused ? "focused" : ""}
                style={{
                  width: "18%",
                  paddingLeft: "15px",
                  marginLeft: "6px",
                  background: "ghostwhite",
                }}
              >
                <input type="text" disabled value="LPA" />
              </InputWrapper>
            </Grid>
          </Grid>
          <h4 className={classes.formText}>Variable Pay</h4>
          <h4
            className={classes.formText}
            style={{ color: "#ccc", marginTop: "0", fontSize: "14px" }}
          >
            Variable pay includes performance based cash incentives and bonuses.
          </h4>
          <Grid container spacing={0}>
            <Grid item sm={6} xs={6}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input
                  onChange={handleInputChange("VariablePay")}
                  type="text"
                />
              </InputWrapper>
            </Grid>
            <Grid item sm={6} xs={6}>
              <InputWrapper
                className={focused ? "focused" : ""}
                style={{
                  width: "18%",
                  paddingLeft: "15px",
                  marginLeft: "6px",
                  background: "ghostwhite",
                }}
              >
                <input type="text" disabled value="LPA" />
              </InputWrapper>
            </Grid>
          </Grid>

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
        </FormControl>
      </Container>
    </React.Fragment>
  );
};

export default JobSalaryAndPerksComponent;
