import React from "react";
import "./FAQ.css";


class Faq extends React.Component{

    constructor(props){
        super(props);
        this.state={ isInternshipOpen: true, isJobOpen: false};
    }

    showInternshipBox(){
        this.setState({isInternshipOpen: true, isJobOpen: false});
    }

    showJobBox(){
        this.setState({isJobOpen: true, isInternshipOpen: false});
    }

    render(){
        return(
            <div className="root-container">
            <div className="box-controller">
                <div className={"controller " + (this.state.isInternshipOpen ? "selected-controller" : "")} 
                onClick={this.showInternshipBox.bind(this)}>
                    <div className="text-controller">
                        Internships
                    </div>
                </div>
                <div className={"controller " + (this.state.isJobOpen ? "selected-controller" : "")}
                onClick={this.showJobBox.bind(this)}>
                    <div className="text-controller">
                        Jobs
                    </div>
                </div>
            </div>

                {this.state.isInternshipOpen && <InternshipBox />}
                {this.state.isJobOpen && <JobBox />}
                
        </div>
        ); 
    }
}



class InternshipBox extends React.Component{

    constructor(props){
        super(props);
        this.state={ isGettingStartedOpen: true, isAccountOpen: false, isInternshipsPostedOpen: false, isApplicationRecievedOpen: false, isCandidatesSelectedOpen: false, isNeedAssistanceOpen: false };
    }

    submitStudent(e){
        
    }
    showGettingStartedBox(){
      this.setState({isGettingStartedOpen: true, isAccountOpen: false, isInternshipsPostedOpen: false, isApplicationRecievedOpen: false, isCandidatesSelectedOpen: false, isNeedAssistanceOpen: false});
  }

  showAccountBox(){
      this.setState({isGettingStartedOpen: false, isAccountOpen: true, isInternshipsPostedOpen: false, isApplicationRecievedOpen: false, isCandidatesSelectedOpen: false, isNeedAssistanceOpen: false});
  }

  showInternshipsPostedBox(){
    this.setState({isGettingStartedOpen: false, isAccountOpen: false, isInternshipsPostedOpen: true, isApplicationRecievedOpen: false, isCandidatesSelectedOpen: false, isNeedAssistanceOpen: false});

  }
  showCandidatesSelected(){
    this.setState({isGettingStartedOpen: false, isAccountOpen: false, isInternshipsPostedOpen: false, isApplicationRecievedOpen: false, isCandidatesSelectedOpen: true, isNeedAssistanceOpen: false});
  }

  showApplicationRecieved(){
    this.setState({isGettingStartedOpen: false, isAccountOpen: false, isInternshipsPostedOpen: false, isApplicationRecievedOpen: true, isCandidatesSelectedOpen: false, isNeedAssistanceOpen: false});
  }
  showNeedAssistance(){
    this.setState({isGettingStartedOpen: false, isAccountOpen: false, isInternshipsPostedOpen: false, isApplicationRecievedOpen: false, isCandidatesSelectedOpen: false, isNeedAssistanceOpen: true});
  }
  
    render() {
       return(
        
    
        <div class="container demo">
          <div className="box-controller Internship-body-box-controller">
                <div className={"controller " + (this.state.isGettingStartedOpen ? "selected-controller" : "")} 
                onClick={this.showGettingStartedBox.bind(this)}>
                    <div className="text-controller">
                        Getting Started
                    </div>
                </div>
                <div className={"controller " + (this.state.isAccountOpen ? "selected-controller" : "")}
                onClick={this.showAccountBox.bind(this)}>
                    <div className="text-controller">
                        Account
                    </div>
                </div>
                <div className={"controller " + (this.state.isInternshipsPostedOpen ? "selected-controller" : "")}
                onClick={this.showInternshipsPostedBox.bind(this)}>
                    <div className="text-controller">
                        Internships Posted
                    </div>
                </div>
                <div className={"controller " + (this.state.isApplicationRecievedOpen ? "selected-controller" : "")}
                onClick={this.showApplicationRecieved.bind(this)}>
                    <div className="text-controller">
                        Applications Received
                    </div>
                </div>
                <div className={"controller " + (this.state.isCandidatesSelectedOpen ? "selected-controller" : "")}
                onClick={this.showCandidatesSelected.bind(this)}>
                    <div className="text-controller">
                        Candidates Selected
                    </div>
                </div>
                <div className={"controller " + (this.state.isNeedAssistanceOpen ? "selected-controller" : "")}
                onClick={this.showNeedAssistance.bind(this)}>
                    <div className="text-controller">
                        Need Assistance
                    </div>
                </div>
            </div>
            {this.state.isGettingStartedOpen && <InternshipGettingStarted />}
            {this.state.isAccountOpen && <InternshipAccount />}
            {this.state.isInternshipsPostedOpen && <InternshipsPosted />}
            {this.state.isApplicationRecievedOpen && <InternshipApplicationsReceived />}
            {this.state.isCandidatesSelectedOpen && <InternshipCandidatesSelected />}
            {this.state.isNeedAssistanceOpen && <InternshipNeedAssistance />}
          </div>
       ); 
    }
}

class InternshipGettingStarted extends React.Component{
    constructor(props){
      super(props);
      this.state={ };
    }

    submitInternshipGettingStarted(e){

    }
    render(){
      return (
      <div class="container demo ">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
        <h4 class="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i class="more-less glyphicon glyphicon-plus"></i>
                Q. How do I hire interns Using Internshala?
            </a>
        </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
          1. Register yourself as an Employer here<br/>
          2. Post your internship requirements and wait for it to get approved<br/>
          3. Shortlist applications received in your account and hire awesome interns :)
        </div>
    </div>
</div>

<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
        <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <i class="more-less glyphicon glyphicon-plus"></i>
                Q. Do you charge money or have any premium services?
            </a>
        </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
        <div class="panel-body">
          No. We do not charge employers or students at any point in time and do not have any premium services at the moment.
        </div>
    </div>
</div>

<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <i class="more-less glyphicon glyphicon-plus"></i>
                Q. Will you share the list/database of candidates with me?
            </a>
        </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
    <div class="panel-body">
        We will share the list of students who have applied for your internship roles. You will be able to view their resume and contact details of the candidates on your dashboard.        </div>
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
        <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <i class="more-less glyphicon glyphicon-plus"></i>
                Q. What is the hiring process I should follow?
            </a>
        </h4>
    </div>
      <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
        <div class="panel-body">
          We would recommend using an easy 3-step hiring process given below:-
        </div>
        <div class="panel-body">
          1. Review the profile on your dashboard and shortlist them according to their skills<br/>
          2. Share an assignment with the shortlisted candidates and review their work<br/>
          3. Conduct interviews (telephonic/video call) with the candidates and select the best one(s)<br/>
          <br/>
          After these steps, it would be ideal to give them an offer letter. Hope you have a good hiring experience :)
        </div>
    </div>
</div>

</div>
      </div>
      );
    }
}

class InternshipAccount extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }
  submitInternshipAccount(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How do I change my organisation details (company name, logo, websites, social media handles,etc.)?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      You can edit your organization description and logo in your account here.<br/>
      <br/>
      In case, you want to make any other changes please drop a query here.
      </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How do I change my email-id?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      Please write to us on employer@internshala.com from your existing email id regarding the change and also send a confirmation email from your new email id.
      </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How do I change my phone number?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      You can change your phone number on the details page by entering the new number and verifying the OTP here.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I wanted to create a student account but have incorrectly created an employer account. How do I proceed?
          </a>
      </h4>
  </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      In case you want to delete your employer account and register as a student please drop a query here.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Which doccument can I upload for account verification?
          </a>
      </h4>
  </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
      <div class="panel-body">
        In case you are posting on behalf of an organization, you can upload:-<br/>
        <br/>
        <br/>
        1. GST Certificate<br/>
        2. Company’s PAN Card<br/>
        3. Certificate of Incorporation<br/>
        4. Trademark Certificate<br/>
        5. Shops & Establishment Act License<br/>
        6. Udyog Aadhaar<br/>
        7. Gumasta License<br/>
        8. MSME Certificate<br/>
        9. ISO Certification<br/>
        10. Certificate of Commencement of Business<br/>
      </div>
      <div class="panel-body">
        In case you are posting as a freelancer, you can upload:-<br/>
        <br/>
        <br/>
        1. Medical License<br/>
        2. Certificate of Practice (Bar Council of India)<br/>
        3. Share/Stock Certificate<br/>
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. What should I keep in mind while drafting an internship?
          </a>
      </h4>
  </div>
    <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
      <div class="panel-body">
        We would recommend you to take note of the following to make your internship live at the earliest (without having to answer any clarification emails) :
      </div>
      <div class="panel-body">    
        1. You should always post a paid internship unless you're posting for an NGO’s or for a niche profile<br/>
        2. You should not hire in bulk (i.e more than 20 applicants) in one posting<br/>
        3. You should not ask the candidates to do promotions via their personal social media handles (as per our terms and conditions)<br/>
        4. You should choose a suitable profile name for the internship, in order to save the load of going through vague applications<br/>
        5. The minimum stipend for a 'work from home' internship is 1000/ month and for an in-office internship, it is 2000/ month.
      </div>
  </div>
</div>

</div>
    </div>
    );
  }
  
}

class InternshipsPosted extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitInternshipsPosted(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
                Q. How do I change the details of live internship post?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      It is recommended that you close the active internship and repost the same with the necessary changes. This is in order to avoid any discrepancy for the candidates who have already applied for the internship. In case there are any minor changes please enter your query here.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. My internship post is under review. What to do?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      Your internship status is 'under review' since we take upto 48 hours to review and process your internship post.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. My internship post's status is 'Follow Up'. What is that?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      Your internship status reads follow-up since we require some details/clarification in order to make them live on the platform. Please check your inbox for more details.       </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. My internship post's status is 'Declined'. What is that?
          </a>
      </h4>
  </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      Your internship might have been declined since it is not in accordance with our terms and conditions. Please check your inbox for more details.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I want to repost my internship. How do I proceed?
          </a>
      </h4>
  </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
      <div class="panel-body">
        You can click the Repost icon on the dashboard and post your internship here.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I have not received any email regarding my follow up internship. How do I proceed?
          </a>
      </h4>
  </div>
    <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
      <div class="panel-body">
        Could you please write to us here as your account might be unsubscribed from our mailing list or it could be a technical issue?
      </div>
  </div>
</div>
</div>
    </div>
    );
  }
}
class InternshipApplicationsReceived extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitInternshipApplicationsReceived(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Can you extend access to the students' applications I have received?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      It is recommended that you post a new internship in case you still have open positions. 
       <br/>
       <br/>
       If you still want to extend access to your applications (for internships posted in the last two months) then please drop a query here.     
    </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I incorrectly changed the status of a student application. Can you change the status of the student?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      You can use the undo option as soon as you change the status of the student application. In case you are not able to undo the changes you can share the names of the students and the status change you want to make here.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I am not receiving enough applications for the internships I posted?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      Please find the best practices for posting an internship below -
      </div>
      <div class="panel-body">
      1. Intern's Responsibilities: You can make your job description more exciting by adding a few key pointers such as what the intern can learn from the internship and the perks<br/>
      2. Optimal Duration: You can consider providing internships of 2-3 months, as most applicants are interested in internships of shorter durations<br/>
      3. Optimal Stipend: Please provide a competitive stipend based on the standard of living of your location and industry standards<br/>
      4. Increase Visibility: Please share the links of the internship on your company's and other social media pages/groups such as LinkedIn, etc.
      </div>
  </div>
</div>

</div>
    </div>
    );
  }
}
class InternshipCandidatesSelected extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitInternshipCandidatesSelected(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Do you have any templates for offer letter or internship completion certificate?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      Please find the links to offer letter template and internship completion certificate template below - 
       </div>
       <div class="panel-body">
           1. Offer letter<br/>
           2. Completion certificate
       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
                Q. The intern I hired is unprofessional or not up to the mark. What should I do?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      Please follow-up with the candidate and take the issue up with him/her and in case it does not get resolved you can report the candidate for bad behaviour by navigating to his/her application from your dashboard.
      </div>
  </div>
</div>

</div>
    </div>
    );
  }
}
class InternshipNeedAssistance extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitInternshipNeedAssistance(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="page-wrapper  p-t-100 p-b-50">
        <div class="wrapper wrapper--w900">
            <div class="card card-6">
                <div class="card-heading ">
                    <h2 class="title heading-colour">Hi, Submit your query below</h2>
                </div>
                <div class="card-body">
                    <form method="POST">
                        <div class="form-row">
                            <div class="name">Full name</div>
                            <div class="value">
                                <input class="input--style-6" type="text" name="full_name"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Email address</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-6" type="email" name="email" placeholder="example@email.com"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Drop your query</div>
                            <div class="value">
                                <div class="input-group">
                                    <textarea class="textarea--style-6" name="message" placeholder="Please type your query here"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Add attachments</div>
                            <div class="value">
                                <div class="input-group js-input-fil">
                                    <input class="input-file" type="file" name="file_cv" id="file"/>
                                    <label class="label--file" for="file">Choose file</label>
                                    <span class="input-file__info">No file chosen</span>
                                </div>
                                <div class="label--desc">Only zip, pdf, doc, docx, png, jpg, jpeg, xls, xlsx allowed</div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" type="submit">Send</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  }
}
class JobBox extends React.Component{

    constructor(props){
        super(props);
        this.state={ isGettingStartedOpen: true,  isAccountOpen: false, isJobsPostedOpen: false, isApplicationRecievedOpen: false, isNeedAssistanceOpen: false};
    }

    submitJob(e){
        
    }
    showGettingStartedBox(){
      this.setState({ isGettingStartedOpen: true,  isAccountOpen: false, isJobsPostedOpen: false, isApplicationRecievedOpen: false, isNeedAssistanceOpen: false});
    }

    showAccountBox(){
      this.setState({ isGettingStartedOpen: false,  isAccountOpen: true, isJobsPostedOpen: false, isApplicationRecievedOpen: false, isNeedAssistanceOpen: false});
    }

    showJobsPostedBox(){
      this.setState({ isGettingStartedOpen: false,  isAccountOpen: false, isJobsPostedOpen: true, isApplicationRecievedOpen: false, isNeedAssistanceOpen: false});
    }

    showApplicationRecievedBox(){
      this.setState({ isGettingStartedOpen: false,  isAccountOpen: false, isJobsPostedOpen: false, isApplicationRecievedOpen: true, isNeedAssistanceOpen: false});
    }

    showNeedAssistanceBox(){
      this.setState({ isGettingStartedOpen: false,  isAccountOpen: false, isJobsPostedOpen: false, isApplicationRecievedOpen: false, isNeedAssistanceOpen: true});
    }
    render() {
        return(
          <div class="container demo">
          <div className="box-controller Internship-body-box-controller">
                <div className={"controller " + (this.state.isGettingStartedOpen ? "selected-controller" : "")} 
                onClick={this.showGettingStartedBox.bind(this)}>
                    <div className="text-controller">
                        Getting Started
                    </div>
                </div>
                <div className={"controller " + (this.state.isAccountOpen ? "selected-controller" : "")}
                onClick={this.showAccountBox.bind(this)}>
                    <div className="text-controller">
                        Account
                    </div>
                </div>
                <div className={"controller " + (this.state.isJobsPostedOpen ? "selected-controller" : "")}
                onClick={this.showJobsPostedBox.bind(this)}>
                    <div className="text-controller">
                        Jobs Posted
                    </div>
                </div>
                <div className={"controller " + (this.state.isApplicationRecievedOpen ? "selected-controller" : "")}
                onClick={this.showApplicationRecievedBox.bind(this)}>
                    <div className="text-controller">
                        Applications Received
                    </div>
                </div>
                <div className={"controller " + (this.state.isNeedAssistanceOpen ? "selected-controller" : "")}
                onClick={this.showNeedAssistanceBox.bind(this)}>
                    <div className="text-controller">
                        Need Assistance
                    </div>
                </div>
            </div>
          
            {this.state.isGettingStartedOpen && <JobGettingStarted />}
            {this.state.isAccountOpen && <JobAccount />}
            {this.state.isJobsPostedOpen && <JobJobsPosted />}
            {this.state.isApplicationRecievedOpen && <JobApplicationsReceived />}
            {this.state.isNeedAssistanceOpen && <JobNeedAssistance />}
          
      </div>
        );
    }
}
class JobGettingStarted extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitJobGettingStarted(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How can I hire freshers using Internshala?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        1. Register yourself as an employer here<br/>
        2. Post your fresher job requirements and wait for it to get approved<br/>
        3. Shortlist from the applications you have received and hire awesome freshers :)      </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Will you share the list/database of candidates with me?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      Yes, you get a daily list of most relevant profiles, curated by our AI-powered recommendation engine with their profiles and contact details.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Can I find candidates with prior work-experience on Internshala?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      You can only find/hire freshers with 0-2 years work experience.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Is there any criteria of a minimum CTC to post jobs on internshala?
          </a>
      </h4>
  </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      Yes, you may post fresher jobs with a minimum CTC of 4 LPA only.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. What is the hiring process I should follow?
          </a>
      </h4>
  </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
          We would recommend using an easy 3-step hiring process given below:
        </div>
        <div class="panel-body">
          1. Review the profile on your dashboard and shortlist them according to their skills<br/>
          2. Share an assignment with the shortlisted candidates and review their work<br/>
          3. Conduct interviews (in-office/telephonic) with the candidates and select the best one(s)<br/>
          <br/>
          After these steps, we recommend you to extend a formal offer letter. Hope you have a great hiring experience :)
        </div>
  </div>
</div>

</div>
    </div>
    );
  }
}
class JobAccount extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitJobAccount(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How do I change my organisation details(company name, logo, website, social media handles, etc)?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
  <div class="panel-body">
      You can edit your organization description and logo in your account here.<br/>
      <br/>
      In case, you want to make any other changes please drop a query here.
      </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How do I change my Email-Id?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      Please write to us on employer@internshala.com from your existing email id regarding the change and also send a confirmation email from your new email id.
      </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How do I change my phone number?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      You can change your phone number on the details page by entering the new number and verifying the OTP here.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I want to create a student account but have incorrectly created an employer account. How do I proceed?
          </a>
      </h4>
  </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      In case you want to delete your employer account and register as a student please drop a query here.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Which doccument can I upload for account verification?
          </a>
      </h4>
  </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
      <div class="panel-body">
        In case you are posting on behalf of an organization, you can upload:-<br/>
        <br/>
        <br/>
        1. GST Certificate<br/>
        2. Company’s PAN Card<br/>
        3. Certificate of Incorporation<br/>
        4. Trademark Certificate<br/>
        5. Shops & Establishment Act License<br/>
        6. Udyog Aadhaar<br/>
        7. Gumasta License<br/>
        8. MSME Certificate<br/>
        9. ISO Certification<br/>
        10. Certificate of Commencement of Business<br/>
      </div>
      <div class="panel-body">
        In case you are posting as a freelancer, you can upload:-<br/>
        <br/>
        <br/>
        1. Medical License<br/>
        2. Certificate of Practice (Bar Council of India)<br/>
        3. Share/Stock Certificate<br/>
      </div>
  </div>
</div>
</div>
    </div>
    );
  }
}
class JobJobsPosted extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitJobJobsPosted(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. How can I change the details of a live job post?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      It is recommended that you close the active job post and repost the same with the necessary changes. This is in order to avoid any discrepancy for the candidates who have already applied. In case there are any minor changes please enter your query here.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. My job post is under review. What should I do?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      Your job status is 'under review' since we take up to 48 hours to review and process your job post.      </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. My job post's status is 'Needs attention'. What is that?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
      Your job post status reads ‘Needs attention’ since we require some details/clarification in order to make it live on the platform. Please check your dashboard for more details.       </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. My job post's status is 'Declined'. What is that?
          </a>
      </h4>
  </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      Your job post might have been declined since it is not in accordance with our terms and conditions. Please check your dashboard for more details.      </div>
  </div>
  <div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I want to repost my job. How do I proceed?
          </a>
      </h4>
  </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      You can click the repost icon on the dashboard or post a new job here. 
      </div>
  </div>

</div>
    </div>
    </div>
    </div>
    );
  }
}
class JobApplicationsReceived extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitJobApplicationsReceived(e){

  }
  render(){
    return (
    <div class="container demo">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Can you extend access to the applications I have received?
          </a>
      </h4>
  </div>
  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      You get access to applications for 30 days after the job post has been closed on Internshala. You may extend your access by 15 more days after that.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. I incorrectly changed the status of an application. Can it be reverted?
          </a>
      </h4>
  </div>
  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
      You can use the undo option as soon as you change the status of the application. In case you are not able to undo the changes, you can share the names of the applicants and the status change you want to make here.       </div>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
          <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. Will I be able to integrate the applications I have received on Internshala into our ATS?
          </a>
      </h4>
  </div>
  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">         
        No, you won't be able to integrate the applications into your ATS, but we provide our own ATS to review, shortlist, hire, and reject applications.
      </div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="more-less glyphicon glyphicon-plus"></i>
              Q. The candidate I hired is unprofessional. What should I do?
          </a>
      </h4>
  </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
      Please follow-up with the candidate and take the issue up with him/her and in case it does not get resolved you can report the candidate for bad behaviour by navigating to his/her application from your dashboard.      </div>
  </div>
</div>

</div>
    </div>
    );
  }
}
class JobNeedAssistance extends React.Component{
  constructor(props){
    super(props);
    this.state={ };
  }

  submitJobNeedAssistance(e){

  }
  render(){
    return (
        <div class="container demo">
        <div class="page-wrapper  p-t-100 p-b-50">
          <div class="wrapper wrapper--w900">
              <div class="card card-6">
                  <div class="card-heading ">
                      <h2 class="title heading-colour">Hi, Submit your query below</h2>
                  </div>
                  <div class="card-body">
                      <form method="POST">
                          <div class="form-row">
                              <div class="name">Full name</div>
                              <div class="value">
                                  <input class="input--style-6" type="text" name="full_name"/>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Email address</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-6" type="email" name="email" placeholder="example@email.com"/>
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Drop your query</div>
                              <div class="value">
                                  <div class="input-group">
                                      <textarea class="textarea--style-6" name="message" placeholder="Please type your query here"></textarea>
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Add attachments</div>
                              <div class="value">
                                  <div class="input-group js-input-fil">
                                      <input class="input-file" type="file" name="file_cv" id="file"/>
                                      <label class="label--file" for="file">Choose file</label>
                                      <span class="input-file__info">No file chosen</span>
                                  </div>
                                  <div class="label--desc">Only zip, pdf, doc, docx, png, jpg, jpeg, xls, xlsx allowed</div>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="card-footer">
                      <button class="btn btn--radius-2 btn--blue-2" type="submit">Send</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}
export default Faq;

