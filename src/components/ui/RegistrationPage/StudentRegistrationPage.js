import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import Background from "./assets/images/studentRegBackground.png";
import BrushStroke from "./assets/images/brush_stroke.svg";
import CheckBox from "./assets/images/check_box.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import RegisterIcon from "./assets/images/register.png";
import PostIcon from "./assets/images/post.png";
import HireIcon from "./assets/images/hire.png";
import { googleLogin } from "./../Login/LoginHelper";
import GoogleLogin from "react-google-login";
import { ClientSecret } from "../../Login Helper/ClientSecret";
import "../Login/Login.css";
import { userSignup } from "./RegistrationHelper";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "100vh",
  },
  contentContainer: {
    marginLeft: "8em",
  },
  contentTitle: {
    fontSize: "3em",
    marginBottom: "0",
  },
  contentSubTitle: {
    fontSize: "1.8em",
    fontWeight: "500",
    marginTop: "0.4em",
    marginBottom: "0.4em",
  },
  extraContent: {
    fontSize: "1.2em",
    display: "flex",
    alignItems: "center",
    margin: "0",
    color: "#333333",
    fontWeight: "400",
  },
  utilImg: {
    padding: "0",
    margiTop: "1px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "4em",
    width: "65%",
    marginRight: "8em",
  },
  formInput: {
    width: "100%",
    marginTop: "0.8em",
    border: "1px solid #333333",
    padding: "2px 5px 2px 5px",
  },
  formLabel: {
    width: "100%",
    textAlign: "left",
    marginBottom: "0",
    color: "#000000",
  },

  contentTitle1: {
    fontSize: "2.8em",
    fontWeight: "700",
    marginBottom: "0.2em",
  },
  featureCard: {
    width: "100%",
  },
  featureContainer: {
    marginTop: "4em",
  },
  media: {
    height: 140,
    width: 140,
    display: "block",
    margin: "auto",
    padding: "2em",
  },
}));

const StudentRegistrationPage = () => {
  const [state, setState] = React.useState({
    EmailId: "",
    Password: "",
    FirstName: "",
    LastName: "",
    error: "",
    message: "",
  });

  // Function When Google Login Works Successfully
  const responseGoogle = async (response) => {
    console.log(response);
    const tokenId = response.tokenId;
    const userData = await googleLogin(tokenId);
    console.log(userData);
  };

  // Function for Handling Input Change
  const handleInputChange = (name) => (e) => {
    setState({
      ...state,
      error: false,
      [name]: e.target.value,
    });
  };

  // Function for Handling Signup Functionality
  const handleSignup = async () => {
    const { EmailId, Password, FirstName, LastName } = state;
    const userData = { EmailId, Password, FirstName, LastName };

    const signUpStats = await userSignup(userData);

    if (signUpStats && signUpStats.status) {
      console.log("Signup Successful");
      setState({
        ...state,
        message: "Signup Successful",
      });
    } else {
      console.log("Signup Unsuccessful");
      setState({
        ...state,
        error: signUpStats.error[0].message,
      });
    }
  };

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "600px",
        }}
        className={classes.mainContainer}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
            <Container className={classes.contentContainer}>
              <h1
                className={classes.contentTitle}
                style={{ marginTop: "121px" }}
              >
                A{" "}
                <span
                  style={{
                    backgroundImage: `url(${BrushStroke})`,
                    color: "#ffffff",
                    backgroundSize: "cover",
                  }}
                >
                  free
                </span>{" "}
                ride to your dream career
              </h1>
              <h3 className={classes.contentSubTitle}>
                Register and apply to 10000+ opportunities
              </h3>
              <h5 className={classes.extraContent}>
                <span className={classes.utilImg}>
                  <img src={CheckBox} alt="" />
                </span>
                Internships
              </h5>
              <h5 className={classes.extraContent}>
                <span className={classes.utilImg}>
                  <img src={CheckBox} alt="" />
                </span>
                Freshers Jobs
              </h5>
              <h5 className={classes.extraContent}>
                <span className={classes.utilImg}>
                  <img src={CheckBox} alt="" />
                </span>
                Work From Home Jobs
              </h5>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <GoogleLogin
                      clientId={ClientSecret}
                      buttonText="Sign up with Google"
                      style={{ border: "1px solid black" }}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </Grid>
                  <Grid container style={{ marginTop: "10px" }}>
                    <Grid item xs={0} sm={5}>
                      <hr />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      OR
                    </Grid>
                    <Grid item xs={0} sm={5}>
                      <hr />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12}>
                      <h4
                        className={classes.formLabel}
                        style={{ fontSize: "16px" }}
                      >
                        Email-ID
                      </h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Input
                        disableUnderline
                        className={classes.formInput}
                        type="email"
                        value={state.EmailId}
                        onChange={handleInputChange("EmailId")}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} style={{ marginTop: "9px" }}>
                      <h4
                        className={classes.formLabel}
                        style={{ fontSize: "16px" }}
                      >
                        Password
                      </h4>
                    </Grid>
                    <Grid item xs={12} sm={12} style={{ marginTop: "-7px" }}>
                      <Input
                        disableUnderline
                        className={classes.formInput}
                        type="password"
                        onChange={handleInputChange("Password")}
                        value={state.Password}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={5} style={{ marginTop: "9px" }}>
                      <h4
                        className={classes.formLabel}
                        style={{ fontSize: "16px" }}
                      >
                        First Name
                      </h4>
                      <Input
                        disableUnderline
                        className={classes.formInput}
                        type="text"
                        style={{ marginTop: "5px" }}
                        onChange={handleInputChange("FirstName")}
                        value={state.FirstName}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item xs={12} sm={5} style={{ marginTop: "9px" }}>
                      <h4
                        className={classes.formLabel}
                        style={{ fontSize: "16px" }}
                      >
                        Last Name
                      </h4>
                      <Input
                        disableUnderline
                        className={classes.formInput}
                        type="text"
                        style={{ marginTop: "5px" }}
                        onChange={handleInputChange("LastName")}
                        value={state.LastName}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} style={{ marginTop: "13px" }}>
                      <h5 style={{ fontSize: "12px" }}>
                        By Signing Up, you agree our{" "}
                        <a href="#">Terms and Conditions</a>
                      </h5>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        style={{ width: "100%" }}
                        onClick={handleSignup}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <h5 style={{ fontSize: "13px", paddingTop: "12px" }}>
                        Already Registered ?{" "}
                        <a href="#se" style={{ fontSize: "15px" }}>
                          Login
                        </a>
                      </h5>
                    </Grid>
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
                className={classes.contentTitle1}
                style={{ textAlign: "center", marginTop: "1em" }}
              >
                Get Job/Internship in 3 Small Steps
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
                            <b>Apply</b>
                          </center>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <center>
                            Apply for internships/Job for any profile and
                            location
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

        <Footer />
      </div>
    </>
  );
};

export default StudentRegistrationPage;
