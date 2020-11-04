import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employeer from "../Pages/Employeer/Employeer";
import Home from "../Pages/Home/Home";
import RegistrationPage from "../ui/RegistrationPage/EmployerRegistrationPage";
import StudentRegistrationPage from "../ui/RegistrationPage/StudentRegistrationPage";
import FAQ from "../ui/FAQ/FAQ";
import ViewJob from "./../ui/ViewOpening/Job/ViewJob";
import ListPageBeta from "./../Pages/ListPage/ListPageBeta";
import ListJobsPage from "./../Pages/ListPage/ListJobsPage";
import Resume from "./../ui/Resume/Resume";
import ViewInternship from "./../ui/ViewOpening/Internship/ViewInternship";
import ApplyJob from "./../ui/ApplyPage/ApplyJob/ApplyJob";
import AdminRoute from "./PrivateRoutes/AdminRoute";
import HomeRoute from "./PrivateRoutes/HomeRoute";
import AllJobsPage from "./../ui/AllJobsPages/AllJobsPage";

const MainRouter = () => {
  return (
    <Switch>
      <HomeRoute exact path="/" component={Home} />
      <Route exact path="/home/" component={Home} />
      <AdminRoute path="/dashboard/" component={Employeer} />
      <Route
        exact
        path="/register/student/"
        component={StudentRegistrationPage}
      />
      <Route exact path="/register/employeer/" component={RegistrationPage} />
      <Route
        exact
        path="/internships/details/:type/:id/"
        component={ViewInternship}
      />
      <Route
        exact
        path="/job/details/:id/"
        component={ViewJob}
      />
      {/* <Route exact path="/job/details/:id" component={ViewJob} /> */}
      <Route exact path="/help/" component={FAQ} />
      <Route exact path="/viewJob/" component={ViewJob} />
      {/* <Route exact path="/viewIntern/" component={ViewInternship} /> */}
      <Route exact path="/internships/:type" component={ListPageBeta} />
      <Route exact path="/jobs/:type" component={ListJobsPage} />
      <Route exact path="/resume/:type/:id/:cid" component={Resume} />
      <Route exact path="/apply/:type/:id/:cid" component={ApplyJob} />
    </Switch>
  );
};
export default MainRouter;
