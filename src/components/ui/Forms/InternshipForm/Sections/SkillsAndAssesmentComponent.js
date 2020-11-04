import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { cities, skills } from "../../Data";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import NoSsr from "@material-ui/core/NoSsr";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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

const SkillsAndAssesmentComponent = (props) => {
  const classes = useStyles();
  const {
    handleInputChange,
    handleOptionAdd,
    CandidatePreference,
    AssesmentQuestions,
    handleAddQuestion,
    handleEditCustomizedQuestion,
    customizedQuestionsCount,
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
    defaultValue: [],
    multiple: true,
    options: skills,
    getOptionLabel: (option) => option,
    onChange: handleOptionAdd("Skills"),
  });
  return (
    <React.Fragment>
      <h3 className={classes.formText}>Skills {"&"} Assesment</h3>
      <Container className={classes.formContainer}>
        <FormControl style={{ width: "100%" }} component="fieldset">
          <h4 className={classes.formText}>Skills Required (Optional)</h4>
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
          <h4 className={classes.formText}>Assesment</h4>
          <h4
            className={classes.formText}
            style={{ color: "#9E9E9E", fontSize: "19px" }}
          >
            Question 1 {"&"} 2 will be asked to every applicant by default. If
            you wish you may ask two more customized questions.
          </h4>
          <h4 className={classes.formText} style={{ fontSize: "20px" }}>
            Question 1 :{" "}
            <span className={{ color: "#959595" }}>
              Why should we hire you ?
            </span>
          </h4>
          <h4 className={classes.formText} style={{ fontSize: "20px" }}>
            Question 2 :{" "}
            <span className={{ color: "#959595" }}>
              Are you available for 1 month, starting immediately, for a
              full-time internship ? If not, what is the time period you are
              available for and the earliest date you can start this internship
              on ?
            </span>
          </h4>
          <Grid container spacing={0} style={{ paddingTop: "10px" }}>
            {AssesmentQuestions.map((question, idx) => (
              <Grid item xs={12} key={idx}>
                <h4 className={classes.formText}>
                  Question {question.QuestionCount}
                </h4>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={5}
                  value={question.QuestionText}
                  style={{ width: "100%" }}
                  onChange={handleEditCustomizedQuestion(idx)}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            onClick={handleAddQuestion}
            color="primary"
            disabled={customizedQuestionsCount == 2 ? true : false}
          >
            + Add Another Question
          </Button>
        </FormControl>
      </Container>
    </React.Fragment>
  );
};

export default SkillsAndAssesmentComponent;
