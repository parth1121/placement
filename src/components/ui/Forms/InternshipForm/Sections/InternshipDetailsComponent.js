import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { profile, internshipType, cities } from "../../Data";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import NoSsr from "@material-ui/core/NoSsr";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 500,
  },
  formControl1: {
    minWidth: 200,
  },
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
  textField: {
    width: 200,
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

const InternshipDetailsComponent = (props) => {
  const classes = useStyles();

  const {
    handleInputChange,
    handleOptionAdd,
    NoOfOpenings,
    InternshipProfileId,
    InternshipType,
    InternshipDuration,
    Profile_Title,
  } = props;

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
    onChange: handleOptionAdd("EligibleCities"),
  });
  return (
    <React.Fragment>
      <h3 className={classes.formText}>Internship Details</h3>
      <Container className={classes.formContainer}>
        <FormControl style={{ width: "100%" }} component="fieldset">
          <h4 className={classes.formText}>Internship Title</h4>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input
                  onChange={handleInputChange("Profile_Title")}
                  type="text"
                />
              </InputWrapper>
            </Grid>
          </Grid>
          <h4 className={classes.formText}>Profile</h4>
          <RadioGroup
            aria-label="internshipProfile"
            name="internshipProfile"
            value={parseInt(InternshipProfileId)}
            onChange={handleInputChange("InternshipProfileId")}
          >
            <Grid container spacing={0}>
              {profile.map((profile, idx) => (
                <Grid key={idx} item xs={12} sm={6}>
                  <FormControlLabel
                    value={profile.profileId}
                    control={<Radio color="primary" />}
                    label={profile.profileName}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
          <h4 className={classes.formText}>Internship Type</h4>
          <RadioGroup
            aria-label="internshipType"
            name="internshipType"
            value={InternshipType}
            onChange={handleInputChange("InternshipType")}
          >
            <Grid container spacing={0}>
              {internshipType.map((internshipType, idx) => (
                <Grid key={idx} item xs={12} sm={6}>
                  <FormControlLabel
                    value={internshipType.internshipTypeName}
                    control={<Radio color="primary" />}
                    label={internshipType.internshipTypeName}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
          <h4 className={classes.formText}>City/Cities</h4>
          <div {...getRootProps()}>
            <InputWrapper ref={setAnchorEl} style={{ border: "None" }}>
              {selectedCities.map((option, index) => (
                <Tag label={option} {...getTagProps({ index })} />
              ))}
            </InputWrapper>
          </div>
          <Grid container spacing={0} style={{}}>
            <Grid item xs={12}>
              <NoSsr>
                <div>
                  <div {...getRootProps()}>
                    <InputWrapper
                      ref={setAnchorEl}
                      className={focused ? "focused" : ""}
                    >
                      <input {...getInputProps()} />
                    </InputWrapper>
                  </div>
                  {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                      {groupedOptions.map((option, index) => (
                        <li {...getOptionProps({ option, index })}>
                          <span>{option}</span>
                          <CheckIcon fontSize="small" />
                        </li>
                      ))}
                    </Listbox>
                  ) : null}
                </div>
              </NoSsr>
            </Grid>
          </Grid>
          <h4 className={classes.formText}>Number of Openings</h4>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input
                  onChange={handleInputChange("NoOfOpenings")}
                  type="text"
                />
              </InputWrapper>
            </Grid>
          </Grid>
          <h4 className={classes.formText}>Internship Start Date</h4>
          <RadioGroup
            value={props.selectedInternshipType}
            onChange={() => console.log("HEloo")}
          >
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    type="date"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleInputChange("InternshipStartDate")}
                  />
                </form>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
          </RadioGroup>
          <h4 className={classes.formText}>Internship Duration</h4>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <InputWrapper className={focused ? "focused" : ""}>
                <input
                  onChange={handleInputChange("InternshipDuration")}
                  type="text"
                  placeholder="e.g. 2 Months, 45 Days, etc."
                />
              </InputWrapper>
            </Grid>
          </Grid>
          <Grid container spacing={0} style={{}}>
            <Grid item xs={12}>
              <h4 className={classes.formText}>Intern's Responsibilty</h4>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={5}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  border: "1px solid",
                }}
                onChange={handleInputChange("InternshipResponsibilities")}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Container>
    </React.Fragment>
  );
};

export default InternshipDetailsComponent;
