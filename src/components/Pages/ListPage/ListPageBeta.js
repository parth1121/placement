import React from "react";
import {
  Container,
  Grid,
  Paper,
  NoSsr,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useAutocomplete } from "@material-ui/lab";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import { profile, cities } from "../../ui/Forms/Data";
import { getFilteredInternships } from "./FilterHelper";
import FilterListIcon from "@material-ui/icons/FilterList";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import Navbar from "./../../ui/Navbar/Navbar";
import Footer from "../../ui/Footer/Footer";
import { UserContext } from "../../App";
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
  width: "auto";
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

const useStyles = makeStyles((theme) => ({
  jobCard: {
    marginBottom: "1.5rem",
  },
  jobTitle: {
    fontSize: "1.5rem",
    marginBottom: "0.4rem",
    fontWeight: 600,
  },
  companyTitle: {
    fontSize: "1.1rem",
    marginBottom: "0.4rem",
  },
  jobLocation: {
    marginBottom: "0.4rem",
  },
  postedDate: {
    textAlign: "right",
  },
}));

const ListPageBeta = (props) => {
  const classes = useStyles();
  const history=useHistory();
  const { state, dispatch } = React.useContext(UserContext);
  const [filterData, setFilterData] = React.useState({
    EligibleCities: [],
    JobProfile: [],
    IsRemote: 0,
  });
  const [filteredInternships, setFilteredInternships] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const fd = { EligibleCities: [], JobProfile: [], IsRemote: 0 };
      const filterStats = await getFilteredInternships(fd);

      if (filterStats && filterStats.status) {
        setFilteredInternships(filterStats.data[0].Matching_Jobs);
        console.log(filterStats.data[0].Matching_Jobs);
      } else {
        console.log("Kuch Toh Locha Hai");
        setFilteredInternships([]);
      }
    };
    if(props.match.params.type!=="internship"){
        history.push("/");
    }
    fetchData();
  
  }, [setFilteredInternships]);

  const updateFilterData = (name) => (e, value) => {
    if (name === "JobProfile") {
      value = value.map((profile) => {
        return `${profile.profileId}`;
      });
    }
    setFilterData({
      ...filterData,
      [name]: value ? value : [],
    });
    console.log(filterData);
  };

  const handleCheckChange = (e) => {
    setFilterData({
      ...filterData,
      IsRemote: e.target.checked ? 1 : 0,
    });
  };

  const getFilterData = async () => {
    const fd = { ...filterData };
    const filterStats = await getFilteredInternships(fd);

    if (filterStats && filterStats.status) {
      setFilteredInternships(filterStats.data[0].Matching_Jobs);
      console.log(filterStats.data[0].Matching_Jobs);
    } else {
      console.log("Kuch Toh Locha Hai");
      setFilteredInternships([]);
    }
  };

  const {
    getRootProps: getRootProps1,
    getInputProps: getInputProps1,
    getTagProps: getTagProps1,
    getListboxProps: getListboxProps1,
    getOptionProps: getOptionProps1,
    groupedOptions: groupedOptions1,
    focused: focused1,
    setAnchorEl: setAnchorEl1,
  } = useAutocomplete({
    defaultValue: [],
    multiple: true,
    options: cities,
    getOptionLabel: (option) => option,
    onChange: updateFilterData("EligibleCities"),
  });

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    getTagProps: getTagProps2,
    getListboxProps: getListboxProps2,
    getOptionProps: getOptionProps2,
    groupedOptions: groupedOptions2,
    focused: focused2,
    setAnchorEl: setAnchorEl2,
    value: selectedProfiles,
  } = useAutocomplete({
    defaultValue: [],
    multiple: true,
    options: profile,
    getOptionLabel: (option) => option.profileName,
    onChange: updateFilterData("JobProfile"),
  });

  return (
    <React.Fragment>
      <Navbar />
      <Container style={{ paddingTop: "2rem" }} maxWidth="lg">
        <Grid
          style={{ padding: "1rem", marginBottom: "2rem" }}
          component={Paper}
          container
          elevation={4}
        >
          <Grid item xs={12} sm={12}>
            <h6 style={{ fontWeight: "600", textAlign: "center" }}>
              Filter Internships
            </h6>
          </Grid>

          <Grid
            style={
              filterData.EligibleCities.length === 0
                ? { display: "none" }
                : { display: "block", marginBottom: 0 }
            }
            item
            xs={12}
            sm={12}
          >
            <div {...getRootProps1()}>
              <InputWrapper ref={setAnchorEl1} style={{ border: "None" }}>
                {filterData.EligibleCities.map((option, index) => (
                  <Tag label={option} {...getTagProps1({ index })} />
                ))}
              </InputWrapper>
            </div>
          </Grid>

          <Grid item sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <NoSsr>
                  <div>
                    <div {...getRootProps1()}>
                      <InputWrapper
                        ref={setAnchorEl1}
                        className={focused1 ? "focused" : ""}
                      >
                        <input
                          placeholder="Select Cities"
                          {...getInputProps1()}
                        />
                      </InputWrapper>
                    </div>
                    {groupedOptions1.length > 0 ? (
                      <Listbox {...getListboxProps1()}>
                        {groupedOptions1.map((option, index) => (
                          <li {...getOptionProps1({ option, index })}>
                            <span>{option}</span>
                            <CheckIcon fontSize="small" />
                          </li>
                        ))}
                      </Listbox>
                    ) : null}
                  </div>
                </NoSsr>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className=" ">
                  <NoSsr>
                    <div>
                      <div {...getRootProps2()}>
                        <InputWrapper
                          ref={setAnchorEl2}
                          className={focused2 ? "focused" : ""}
                        >
                          <input
                            placeholder="Select Job Profile"
                            {...getInputProps2()}
                          />
                        </InputWrapper>
                      </div>
                      {groupedOptions2.length > 0 ? (
                        <Listbox {...getListboxProps2()}>
                          {groupedOptions2.map((option, index) => (
                            <li {...getOptionProps2({ option, index })}>
                              <span>{option.profileName}</span>
                              <CheckIcon fontSize="small" />
                            </li>
                          ))}
                        </Listbox>
                      ) : null}
                    </div>
                  </NoSsr>
                </div>
              </Grid>
              <Grid style={{ textAlign: "center" }} item xs={12} sm={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterData.IsRemote === 1 ? true : false}
                      color="primary"
                    />
                  }
                  label="Include Remote Internships"
                  onChange={handleCheckChange}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button
                  endIcon={<FilterListIcon />}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={getFilterData}
                >
                  Filter
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            style={
              selectedProfiles.length === 0
                ? { display: "none" }
                : { display: "block" }
            }
            item
            xs={12}
            sm={12}
          >
            <div {...getRootProps2()}>
              <InputWrapper ref={setAnchorEl2} style={{ border: "None" }}>
                {selectedProfiles.map((option, index) => (
                  <Tag
                    label={option.profileName}
                    {...getTagProps2({ index })}
                  />
                ))}
              </InputWrapper>
            </div>
          </Grid>
        </Grid>

        <Container style={{ padding: "2rem" }} component={Paper}>
          {filteredInternships.map((internship) => (
            <Grid
              style={{
                marginBottom: "3rem",
              }}
              component={Paper}
              elevation={4}
              container
              spacing={4}
              key={`${internship} ${internship.InternshipId}`}
            >
              <Grid item sm={1} xs={1}>
                <AccountBoxIcon fontSize="large" />
              </Grid>
              <Grid item sm={11} xs={11}>
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Grid container>
                      <Grid className={classes.jobTitle} item xs={12} sm={12}>
                        <Link
                          to={`/internships/details/internship/${internship.InternshipId}`}
                        >
                          {" "}
                          {internship.Profile_Title}
                        </Link>
                      </Grid>
                      <Grid
                        className={classes.companyTitle}
                        item
                        xs={12}
                        sm={12}
                      >
                        {internship.CompanyName}
                      </Grid>
                      <Grid
                        className={classes.jobLocation}
                        item
                        xs={12}
                        sm={12}
                      >
                        <LocationOnIcon />{" "}
                        {internship.InternshipType === "Work From Home"
                          ? "Work From Home"
                          : internship.EligibleCities.toString()}
                      </Grid>
                      <Grid className={classes.jobSalary} item xs={6} sm={6}>
                        <AccountBalanceWalletIcon /> {internship.Stipend}
                      </Grid>
                      <Grid className={classes.postedDate} item xs={6} sm={6}>
                        Posted On: {internship.InternshipStartDate}
                      </Grid>
                      <Grid
                        style={{ marginTop: "0.5rem" }}
                        item
                        xs={12}
                        sm={12}
                      >
                        Openings : {internship.NoOfOpenings}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      disabled={state ? false : true}
                      endIcon={<ExitToAppIcon />}
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/resume/${props.match.params.type}/${internship.InternshipId}/${internship.CompanyId}`}
                      fullWidth
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ListPageBeta;
