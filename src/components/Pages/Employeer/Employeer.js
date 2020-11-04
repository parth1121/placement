import React from 'react';
import DashboardNav from '../../ui/DashboardNav/DashboardNav'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from '../../ui/Dashboard/Dashboard'
import Footer from '../../ui/Footer/Footer'
import Form from '../../ui/Forms/InternshipForm/Form'
import JobForm from '../../ui/Forms/JobForm/JobForm'
import AllJobsPage from '../../ui/AllJobsPages/AllJobsPage'
import JobDetailPage from '../../ui/JobDetailPage/JobDetailPage'
import ViewInternship from '../../ui/ViewOpening/Internship/ViewInternship'
const Employeer = () => {
  return (
    <BrowserRouter>
      <DashboardNav />
      <Switch>
        <Route exact path="/dashboard/" component={Dashboard} />
        <Route
          exact
          path="/dashboard/post-internship/"
          component={Form}
        />
        <Route
          exact
          path="/dashboard/post-job/"
          component={JobForm}
        />
          <Route
          exact
          path="/dashboard/employer/applications/:type/:id"
          component={AllJobsPage}
        />
        <Route
          exact
          path="/dashboard/application_detail/:type/:apkid/:id"
          component={JobDetailPage}
        />
        <Route
          exact
          path="/dashboard/internships/:type/details/:id"
          component={ViewInternship}
        />
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Employeer;
