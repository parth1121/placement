import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ClientSecret } from "../../Login Helper/ClientSecret";
import "./Login.css";
import { googleLogin, userLogin, employerLogin } from "./LoginHelper";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStudentOpen: true, isEmployeeOpen: false };
  }

  showStudentBox() {
    this.setState({ isStudentOpen: true, isEmployeeOpen: false });
  }

  showEmployeeBox() {
    this.setState({ isEmployeeOpen: true, isStudentOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isStudentOpen ? "selected-controller" : "")
            }
            onClick={this.showStudentBox.bind(this)}
          >
            Student
          </div>
          <div
            className={
              "controller " +
              (this.state.isEmployeeOpen ? "selected-controller" : "")
            }
            onClick={this.showEmployeeBox.bind(this)}
          >
            Employee
          </div>
        </div>

        {this.state.isStudentOpen && <StudentBox />}
        {this.state.isEmployeeOpen && <EmployeeBox />}
      </div>
    );
  }
}

const StudentBox = () => {
  const [state1, setState1] = React.useState({
    EmailId: "",
    Password: "",
    error: "",
  });

  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Function When Google Login Works Successfully
  const responseGoogle = async (response) => {
    console.log(response);
    const tokenId = response.tokenId;
    const userData = await googleLogin(tokenId);
    console.log(userData);
  };

  // Function for Handling Input Change
  const handleInputChange = (name) => (e) => {
    setState1({
      ...state1,
      error: false,
      [name]: e.target.value,
    });
  };

  // Function for Handling Login
  const handleLogin = async (e) => {
    const EmailId = state1.EmailId;
    const Password = state1.Password;

    const userData = await userLogin({ EmailId, Password });

    if (userData.status) {
      console.log("Login Successful");
      console.log(userData);
      localStorage.setItem("User", JSON.stringify(userData.data.User_Details));
      dispatch({
        type: "USER",
        payload: JSON.stringify(userData.data.User_Details),
      });
      history.push("/home/");
    } else {
      setState1({
        ...state1,
        error: userData.error[0].message,
      });
      handleClick();
    }
  };
  return (
    <div className="control">
      <GoogleLogin
        className="btn-google m-b-20 "
        clientId={ClientSecret}
        buttonText="Sign up with Google"
        style={{ border: "1px solid black" }}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <div className="btn-special">
        <div className="special">
          <form>
            <label>Email</label>
            <input
              name="EmailId"
              className="StudentLoginEmail"
              type="email"
              placeholder="john@example.com"
              onChange={handleInputChange("EmailId")}
              value={state1.EmailId}
              required
            />

            <label>Password</label>
            <input
              name="Password"
              className="StudentLoginPassword"
              type="password"
              placeholder="Must be atleast 6 characters"
              onChange={handleInputChange("Password")}
              value={state1.Password}
              required
            />
            <br />
            <br />
            <input
              onClick={handleLogin}
              className="InputTypeSubmit"
              value="Log In"
            />

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {state1.error}
              </Alert>
            </Snackbar>
            <a className="href__Link" href="#sec">
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
      <p className="already__registerd">
        <strong>New To Internshala? Register (</strong>
        <a className="href__Link" href="#mk">
          Student
        </a>{" "}
        /{" "}
        <a className="href__Link" href="#mk">
          Employer
        </a>
        )
      </p>
    </div>
  );
};

const EmployeeBox = () => {
  const [state1, setState1] = React.useState({
    CompanyEmailId: "",
    Password: "",
    error: "",
  });

  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Function for Handling Input Change
  const handleInputChange = (name) => (e) => {
    setState1({
      ...state1,
      error: false,
      [name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { CompanyEmailId, Password } = state1;
    const employerData = { CompanyEmailId, Password };
    console.log("Came Here");
    const loginStats = await employerLogin(employerData);
    console.log(loginStats);

    if (loginStats && loginStats.status) {
      console.log("login Successful");
      setState1({
        CompanyEmailId: "",
        Password: "",
        error: "",
      });
      localStorage.setItem(
        "User",
        JSON.stringify(loginStats.data.Company_Details)
      );
      dispatch({
        type: "USER",
        payload: JSON.stringify(loginStats.data.Company_Details),
      });
      history.push("/dashboard/");
    } else {
      setState1({
        ...state1,
        error: loginStats.error[0].message,
      });
      console.log(state1);
      console.log(loginStats.error[0].message);
      handleClick();
    }
  };

  return (
    <div className="control">
      <div className="btn-special">
        <div className="special">
          <label>Email</label>
          <input
            className="StudentLoginEmail"
            type="email"
            placeholder="john@example.com"
            value={state1.CompanyEmailId}
            required
            onChange={handleInputChange("CompanyEmailId")}
          />
          <label>Password</label>
          <input
            className="StudentLoginPassword"
            type="password"
            placeholder="Must be atleast 6 characters"
            value={state1.Password}
            required
            onChange={handleInputChange("Password")}
          />
          <br />
          <br />
          <button onClick={handleLogin} className="InputTypeSubmit">
            Log In
          </button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {state1.error}
            </Alert>
          </Snackbar>
          <a className="href__Link" href="/login">
            Forgot Password?
          </a>
        </div>
      </div>
      <p className="already__registerd">
        <strong>New To Internshala? Register (</strong>
        <a className="href__Link" href="#mk">
          Student
        </a>{" "}
        /{" "}
        <a className="href__Link" href="#mk">
          Employer
        </a>
        )
      </p>
    </div>
  );
};

export default Login;
