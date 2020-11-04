import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Desktop from "./assets/images/desktop.png";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import RegisterIcon from "./assets/images/register.png";
import PostIcon from "./assets/images/post.png";
import HireIcon from "./assets/images/hire.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { employerSignup } from "./RegistrationHelper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "2em",
    width: "70%",
  },
  contentContainer: {
    paddingLeft: "8em",
  },
  contentTitle: {
    fontSize: "2.8em",
    fontWeight: "700",
    marginBottom: "0.2em",
  },
  contentSubTitle: {
    fontSize: "1.6em",
    fontWeight: "700",
    marginTop: "0",
    marginBottom: "0.4em",
  },
  contentImage: {
    width: "100%",
    marginTop: "4em",
  },
  extraContent: {
    marginTop: "0",
    fontSize: "1.4em",
    fontWeight: "100",
  },
  formInput: {
    width: "100%",
    marginTop: "1em",
  },
  formLabel: {
    width: "100%",
    textAlign: "left",
    marginBottom: "0",
  },
  media: {
    height: 140,
    width: 140,
    display: "block",
    margin: "auto",
    padding: "2em",
  },
  featureCard: {
    width: "100%",
  },
  featureContainer: {
    marginTop: "4em",
  },
}));

const RegistrationPage = () => {
  const [state, setState] = React.useState({
    CompanyEmailId: "",
    Password: "",
    CompanyName: "",
    ContactNo: "",
    error: "",
    message: "",
  });

  // Function for Handling Input Change
  const handleInputChange = (name) => (e) => {
    setState({
      ...state,
      error: false,
      [name]: e.target.value,
    });
  };

  // Function for Handling Employer Signup
  const handleSignup = async () => {
    const { CompanyEmailId, Password, CompanyName, ContactNo } = state;
    const employerData = { CompanyEmailId, Password, CompanyName, ContactNo };

    const signupStats = await employerSignup(employerData);

    if (signupStats && signupStats.status) {
      setState({
        CompanyEmailId: "",
        Password: "",
        CompanyName: "",
        ContactNo: "",
        error: "",
        message: "Company Signedup Successfully.",
      });
      console.log("Company Data", signupStats.data.Company_Details);
    } else {
      setState({
        ...state,
        error: signupStats.error[0].message,
      });
    }
  };

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <React.Fragment>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
            <Container className={classes.contentContainer}>
              <h1
                className={classes.contentTitle}
                style={{ marginTop: "74px" }}
              >
                Hire the best Interns
              </h1>
              <h3 className={classes.contentSubTitle}>
                Register and Post your Internships for free now!
              </h3>
              <h5 className={classes.extraContent}>
                4 Mn+ internships seekers from 30,000+ colleges across India
              </h5>
            </Container>
            <img
              className={classes.contentImage}
              src={Desktop}
              alt=""
              style={{ marginTop: "-37px" }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <h4
                      className={classes.formLabel}
                      style={{ fontSize: "19px" }}
                    >
                      Official Email-ID
                    </h4>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "-16px" }}>
                    <Input
                      onChange={handleInputChange("CompanyEmailId")}
                      className={classes.formInput}
                      type="email"
                      value={state.CompanyEmailId}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "7px" }}>
                    <h4
                      className={classes.formLabel}
                      style={{ fontSize: "19px" }}
                    >
                      Password
                    </h4>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "-16px" }}>
                    <Input
                      onChange={handleInputChange("Password")}
                      className={classes.formInput}
                      type="password"
                      value={state.Password}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "7px" }}>
                    <h4
                      className={classes.formLabel}
                      style={{ fontSize: "19px" }}
                    >
                      Company Name
                    </h4>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "-16px" }}>
                    <Input
                      onChange={handleInputChange("CompanyName")}
                      className={classes.formInput}
                      type="text"
                      value={state.CompanyName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "7px" }}>
                    <h4
                      className={classes.formLabel}
                      style={{ fontSize: "19px" }}
                    >
                      Mobile Number
                    </h4>
                  </Grid>
                  <Grid item xs={12} sm={2} style={{ marginTop: "-16px" }}>
                    <Input
                      className={classes.formInput}
                      type="text"
                      defaultValue="+91"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={1}></Grid>
                  <Grid item xs={12} sm={9} style={{ marginTop: "-16px" }}>
                    <Input
                      onChange={handleInputChange("ContactNo")}
                      className={classes.formInput}
                      type="text"
                      value={state.ContactNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
                    <h5 style={{ fontSize: "13px" }}>
                      By registering, you agree our{" "}
                      <a href="#">Terms and Conditions</a>
                    </h5>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      onClick={handleSignup}
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      Register Now
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <h5 style={{ marginTop: "11px" }}>
                      <Link to="/help/">Have a Question ?</Link>
                    </h5>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={12}>
              <h4
                className={classes.contentTitle}
                style={{ textAlign: "center", marginTop: "0.6em" }}
              >
                Hire Interns in 3 Small Steps
              </h4>
            </Grid>
            <Container maxWidth="lg" className={classes.featureContainer}>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.featureCard}>
                    <CardActionArea style={{ padding: "11px" }}>
                      <CardMedia
                        className={classes.media}
                        image={RegisterIcon}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          <center>
                            <b>Register</b>
                          </center>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <center> Get started by creating your account</center>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.featureCard}>
                    <CardActionArea style={{ padding: "11px" }}>
                      <CardMedia
                        className={classes.media}
                        image={PostIcon}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          <center>
                            <b>Post</b>
                          </center>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <center>
                            Post internships for any profile and location
                          </center>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className={classes.featureCard}>
                    <CardActionArea style={{ padding: "11px" }}>
                      <CardMedia
                        className={classes.media}
                        image={HireIcon}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          <center>
                            <b>Hire</b>
                          </center>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <center>Screen and hire at your fingertips</center>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Container>
      </React.Fragment>
      <Footer />
    </>
  );
};

export default RegistrationPage;
