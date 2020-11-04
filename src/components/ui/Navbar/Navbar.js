import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.css";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { UserContext } from "./../../App";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div>
      <IconButton
        onClick={() => setOpen(false)}
        color="secondary"
        aria-label="close"
        style={{ marginLeft: "908px" }}
      >
        <CloseIcon />
      </IconButton>
      <Login />
    </div>
  );
  return (
    <nav
      className="navbar black navbar-expand-md navbar-light sticky-top"
      style={{
        backgroundColor: "white",
        paddingTop: "10px",
        boxShadow: "0px -1px 22px 10px #888888",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="/section">
          <div className="icon-img">
            <img
              src="https://internshala.com/static/images/common/new_internshala_logo.svg"
              width="100%;"
              alt="img1"
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav " style={{ marginLeft: "300px" }}>
            
            <Link to="/internships/internship">
              <li
                className="nav-item menu-opt0 nav-link showbox"
                style={{ cursor: "pointer" }}
              >
                Internships
              </li>
            </Link>
            <Link to="/jobs/job">
              <li
                className="nav-item menu-opt0 nav-link"
                style={{ cursor: "pointer" }}
              >
                Fresher Jobs
              </li>
            </Link>
            <Link to="/help/">
              <li
                className="nav-item menu-opt0 nav-link"
                style={{ cursor: "pointer" }}
              >
                Help
              </li>
            </Link>
            {!state && (
              <>
                <li
                  onClick={handleOpen}
                  className="nav-item menu-opt0 nav-link"
                  style={{
                    borderRadius: "5px",
                    padding: "6px 26px",
                    border: "1px solid #00A5EC",
                    color: "#00A5EC",
                    cursor: "pointer",
                  }}
                >
                  Login
                </li>
                <li
                  className="nav-item nav-link dropdown"
                  style={{
                    borderRadius: "5px",
                    padding: "7px 18px 0px 20px",
                    backgroundColor: "#00A5EC",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Register
                  <div class="dropdown-content">
                    <Link to="/register/student/">As a Student</Link>
                    <Link to="/register/employeer/">As a Employeer</Link>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DialogContent>{body}</DialogContent>
        </Modal>
      </div>
    </nav>
  );
};
export default Navbar;
