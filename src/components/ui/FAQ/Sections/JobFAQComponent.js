import React from "react";
import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FAQuestionsList from "./FAQuestionsList";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "0px 0px 20px 0px rgba(15, 15, 15, 0.2)",
    marginBottom: "4em",
  },
}));

const jobFAQ = {
  "Getting Started": {
    "How do I hire freshers using Internshala ?": `Register yourself as an employer
    Post your fresher job requirements and wait for it to get approved
    Shortlist from the applications you have received and hire awesome freshers :)`,
    "Do you charge money or have any Premium Service ?": `No. We do not charge employers or students at any point in time and do not have any premium services at the moment.`,
    "Will you share the list/database of candidates with me ?": `We will share the list of students who have applied for your internship roles. You will be able to view their resume and contact details of the candidates on your dashboard.`,
    "What is the hiring process I should follow ?": `We would recommend using an easy 3-step hiring process given below:-

        1. Review the profile on your dashboard and shortlist them according to their skills
        2. Share an assignment with the shortlisted candidates and review their work
        3. Conduct interviews (telephonic/video call) with the candidates and select the best one(s)
        
        After these steps, it would be ideal to give them an offer letter. Hope you have a good hiring experience :)`,
  },
  Account: {
    "How do I change my organisation details (company name, logo, websites, social media handles,etc.) ?": `You can edit your organization description and logo in your account here.

      In case, you want to make any other changes please drop a query here.`,
    "How do I change my email-id ?": `Please write to us on employer@internshala.com from your existing email id regarding the change and also send a confirmation email from your new email id.`,
    "How do I change my phone number ?": `You can change your phone number on the details page by entering the new number and verifying the OTP here.`,
    "I wanted to create a student account but have incorrectly created an employer account. How do I proceed ?": `In case you want to delete your employer account and register as a student please drop a query here.`,
    "Which doccument can I upload for account verification ?": `In case you are posting on behalf of an organization, you can upload:-


      1. GST Certificate
      2. Company’s PAN Card
      3. Certificate of Incorporation
      4. Trademark Certificate
      5. Shops & Establishment Act License
      6. Udyog Aadhaar
      7. Gumasta License
      8. MSME Certificate
      9. ISO Certification
      10. Certificate of Commencement of Business
      
      
      In case you are posting as a freelancer, you can upload:-
      
      
      1. Medical License
      2. Certificate of Practice (Bar Council of India)
      3. Share/Stock Certificate`,
    "What should I keep in mind while drafting an internship ?": `We would recommend you to take note of the following to make your internship live at the earliest (without having to answer any clarification emails) :


      1. You should always post a paid internship unless you're posting for an NGO’s or for a niche profile
      2. You should not hire in bulk (i.e more than 20 applicants) in one posting
      3. You should not ask the candidates to do promotions via their personal social media handles (as per our terms and conditions)
      4. You should choose a suitable profile name for the internship, in order to save the load of going through vague applications
      5. The minimum stipend for a 'work from home' internship is 1000/ month and for an in-office internship, it is 2000/ month.`,
  },
  "Internships Posted": {
    "How do I change the details of live internship post ?": `It is recommended that you close the active internship and repost the same with the necessary changes. This is in order to avoid any discrepancy for the candidates who have already applied for the internship. In case there are any minor changes please enter your query here.`,
    "My internship post is under review. What to do ?": `Your internship status is 'under review' since we take upto 48 hours to review and process your internship post.`,
    "My internship post's status is 'Follow Up'. What is that ?": `Your internship status reads follow-up since we require some details/clarification in order to make them live on the platform. Please check your inbox for more details.`,
    "My internship post's status is 'Declined'. What is that ?": `Your internship might have been declined since it is not in accordance with our terms and conditions. Please check your inbox for more details.`,
    "I want to repost my internship. How do I proceed ?": `You can click the Repost icon on the dashboard and post your internship here.`,
    "I have not received any email regarding my follow up internship. How do I proceed ?": `Could you please write to us here as your account might be unsubscribed from our mailing list or it could be a technical issue?`,
  },
  "Applications Received": {
    "Can you extend access to the students' applications I have received ?": `It is recommended that you post a new internship in case you still have open positions.

      If you still want to extend access to your applications (for internships posted in the last two months) then please drop a query here.`,
    "I incorrectly changed the status of a student application. Can you change the status of the student ?": `You can use the undo option as soon as you change the status of the student application. In case you are not able to undo the changes you can share the names of the students and the status change you want to make here.`,
    "I am not receiving enough applications for the internships I posted ?": `Please find the best practices for posting an internship below -\n


      1. Intern's Responsibilities: You can make your job description more exciting by adding a few key pointers such as what the intern can learn from the internship and the perks
      2. Optimal Duration: You can consider providing internships of 2-3 months, as most applicants are interested in internships of shorter durations
      3. Optimal Stipend: Please provide a competitive stipend based on the standard of living of your location and industry standards
      4. Increase Visibility: Please share the links of the internship on your company's and other social media pages/groups such as LinkedIn, etc.`,
  },
  "Candidates Selected": {
    "Do you have any templates for offer letter or internship completion certificate ?": `Please find the links to offer letter template and internship completion certificate template below -

    1. Offer letter
    2. Completion certificate`,
    "The intern I hired is unprofessional or not up to the mark. What should I do ?": `Please follow-up with the candidate and take the issue up with him/her and in case it does not get resolved you can report the candidate for bad behaviour by navigating to his/her application from your dashboard.`,
  },
  "Need Assistance": "Private Service",
};

const JobFAQComponent = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderQuestionList = () => {
    switch (currentTab) {
      case 0:
        return <FAQuestionsList qa={jobFAQ["Getting Started"]} />;
      case 1:
        return <FAQuestionsList qa={jobFAQ["Account"]} />;
      case 2:
        return <FAQuestionsList qa={jobFAQ["Internships Posted"]} />;
      case 3:
        return <FAQuestionsList qa={jobFAQ["Applications Received"]} />;
      case 4:
        return <FAQuestionsList qa={jobFAQ["Candidates Selected"]} />;
      case 5:
        return <h1>Assistance Component</h1>;
      default:
        return null;
    }
  };
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item sm={12} xs={12} className={classes.tabContainer}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              aria-label="FAQ's Tab"
            >
              {Object.entries(jobFAQ).map((entry, idx) => (
                <Tab key={idx} label={entry[0]} />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">{renderQuestionList()}</Container>
    </React.Fragment>
  );
};

export default JobFAQComponent;
