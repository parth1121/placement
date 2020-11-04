import React from "react";
import new_image from "../../assests/images/new.svg";
import job_image from "../../assests/images/job.svg";
import "./NonePost.css";
import img from "../../assests/images/6mn_job_seekers_mobile.svg";
import img1 from "../../assests/images/database_access_mobile.svg";
import img2 from "../../assests/images/30_day_visibility_mobile.svg";
import img3 from "../../assests/images/application_manager_mobile.svg";
import img4 from "../../assests/images/advance_filters_mobile.svg";
import img5 from "../../assests/images/instant_messaging_mobile.svg";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const NonePost = ({ currentTab }) => {
  return (
    <div>
      <header
        id="header"
        className="header"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100" }}
      >
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1>
                    <div
                      className="heading"
                      style={{ fontFamily: "sans-serif", fontSize: "44px" }}
                    >
                      Hire freshers from 6 million+jobseekers
                      <span>
                        <img src={new_image} alt="" />
                      </span>
                      <p
                        className="p-large"
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "24px",
                          lineHeight: "31.92px",
                        }}
                      >
                        post your job for INR{" "}
                        <s style={{ color: "#FF8C00" }}>4999</s>{" "}
                        <span
                          className="free_text"
                          style={{ color: "#FF8C00" }}
                        >
                          FREE
                        </span>{" "}
                        <a
                          style={{
                            lineHeight: "21.98px",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                          }}
                          href="#gh"
                        >
                          (valid till 31st august)
                        </a>
                      </p>
                      <a
                        className="btn btn-primary"
                        href="#services"
                        style={{
                          height: "38px",
                          width: "214px",
                          fontSize: "18px",
                          marginTop: "-108px",
                        }}
                      >
                        Post {currentTab}
                        <ArrowForwardIosIcon
                          style={{
                            fontSize: "17px",
                            marginTop: "-3px",
                            marginLeft: "2px",
                          }}
                        />
                      </a>
                      <a href="#nh">
                        <h2
                          style={{
                            color: "Blue",
                            fontSize: "15px",
                            marginTop: "-3.5rem",
                            marginLeft: "-321px",
                          }}
                        >
                          Have a question?
                        </h2>
                      </a>
                    </div>
                  </h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src={job_image}
                    alt="alternative"
                    style={{ height: "320px", width: "496px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*-------------------  */}
      <h1>
        {" "}
        <div
          className="heading"
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "28px",
            lineHeight: "31.92px",
            marginBottom: "-41px",
            marginTop: "51px",
          }}
        >
          Why choose intershala?
        </div>
      </h1>

      <div className="container py-5" style={{ marginLeft: "-149px" }}>
        <div className="row mx-auto">
          <div
            className="col-12 col-xl bg"
            style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
          >
            <div className="item-container d-flex align-items-center">
              <div className="image-container">
                <img src={img} className="image" alt="" />
              </div>
              <div className="content-container">
                <h3
                  className="title"
                  style={{ fontSize: "16px", lineHeight: "20px" }}
                >
                  6 million job seekers
                </h3>
                <p
                  className="description"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Whether it be operatings systems like Windows, web browsers
                  like Chrome, or game engines like Unity 3D, C/C++ is
                  everywhere!
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-xl bg"
            style={{
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
              marginRight: "-224px",
            }}
          >
            <div className="item-container d-flex align-items-center">
              <div className="image-container">
                <img src={img1} className="image" alt="" />
              </div>
              <div className="content-container">
                <h3
                  className="title"
                  style={{ fontSize: "16px", lineHeight: "20px" }}
                >
                  Data base excess
                </h3>
                <p
                  className="description"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Due to the straightforwardness of the language, it serves as a
                  solid introduction to programming for any beginner.
                </p>
              </div>
            </div>
          </div>
          <div className="row mx-auto">
            <div
              className="col-12 col-xl bg"
              style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
            >
              <div className="item-container d-flex align-items-center">
                <div class="image-container">
                  <img src={img2} class="image" alt="" />
                </div>
                <div class="content-container">
                  <h3
                    class="title"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    30 day visibility
                  </h3>
                  <p
                    class="description"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Whether it be operatings systems like Windows, web browsers
                    like Chrome, or game engines like Unity 3D, C/C++ is
                    everywhere!
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-12 col-xl bg"
              style={{
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
                marginRight: "-224px",
              }}
            >
              <div class="item-container d-flex align-items-center">
                <div class="image-container">
                  <img src={img3} class="image" alt="" />
                </div>
                <div class="content-container">
                  <h3
                    class="title"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    application Manager
                  </h3>
                  <p
                    class="description"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Due to the straightforwardness of the language, it serves as
                    a solid introduction to programming for any beginner.
                  </p>
                </div>
              </div>
            </div>
            <div class="row mx-auto">
              <div
                class="col-12 col-xl bg"
                style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
              >
                <div class="item-container d-flex align-items-center">
                  <div class="image-container">
                    <img src={img4} class="image" alt="" />
                  </div>
                  <div class="content-container">
                    <h3
                      class="title"
                      style={{ fontSize: "16px", lineHeight: "20px" }}
                    >
                      Advance Filters
                    </h3>
                    <p
                      class="description"
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                    >
                      Whether it be operatings systems like Windows, web
                      browsers like Chrome, or game engines like Unity 3D, C/C++
                      is everywhere!
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-xl bg"
                style={{
                  paddingTop: "2.5rem",
                  paddingBottom: "2.5rem",
                  marginRight: "-224px",
                }}
              >
                <div class="item-container d-flex align-items-center">
                  <div class="image-container">
                    <img src={img5} class="image" alt="" />
                  </div>
                  <div class="content-container">
                    <h3
                      class="title"
                      style={{ fontSize: "16px", lineHeight: "20px" }}
                    >
                      Instant messanging
                    </h3>
                    <p
                      class="description"
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "14px",
                        lineHeight: "22px",
                      }}
                    >
                      Due to the straightforwardness of the language, it serves
                      as a solid introduction to programming for any beginner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
        <a
          class="btn btn-primary"
          href="#huu"
          style={{
            margin: "0px 342px",
            height: "44px",
            width: "232px",
            fontSize: "18px",
          }}
        >
          Post job{" "}
          <ArrowForwardIosIcon
            style={{ fontSize: "17px", marginTop: "-3px", marginLeft: "2px" }}
          />
        </a>
      </p>

      {/* --------------------------------------------- */}
      <div class="col-sm">
        <h2
          class="section-heading"
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "30px",
            lineHeight: "31.92px",
            paddingTop: "35px",
          }}
        >
          Frequently asked questions
        </h2>
        <div id="example4"></div>
        <div class="faq_category_content">
          <div id="accordion">
            <div className="card">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse1"
                faq_id="1"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div
                  className="card-header"
                  id="heading1"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="content"
                    style={{
                      color: "Black",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Q. How does hiring freshers through Internshala work?
                  </div>
                </div>
              </button>

              <div
                id="collapse1"
                className="answer collapse"
                aria-labelledby="heading1"
                data-parent="#accordion"
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Simply register and post your job on Internshala for free till
                  31st Oct 2020. Jobseekers will start applying once your job is
                  made live. Meanwhile, invite candidates from a curated list of
                  jobseekers most suitable for your job.{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse2"
                faq_id="2"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div
                  className="card-header"
                  id="heading2"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="content"
                    style={{
                      color: "Black",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Q. I need a candidate with prior work experience. Can I post
                    my job on Internshala?
                  </div>
                </div>
              </button>
              <div
                id="collapse2"
                className="collapse answer "
                aria-labelledby="heading2"
                data-parent="#accordion"
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  You may only post jobs for freshers (0-2 years work
                  experience) on Internshala.{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse3"
                faq_id="3"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div
                  className="card-header"
                  id="heading3"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="content"
                    style={{
                      color: "Black",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Q. Is there any criteria of minimum CTC to post jobs on
                    Internshala?
                  </div>
                </div>
              </button>

              <div
                id="collapse3"
                className="collapse answer "
                aria-labelledby="heading3"
                data-parent="#accordion"
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Yes, you may post fresher jobs with a minimum CTC of 4 LPA
                  only.{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse4"
                faq_id="4"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div
                  className="card-header"
                  id="heading4"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="content"
                    style={{
                      color: "Black",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Q. Is job posting always free?
                  </div>
                </div>
              </button>

              <div
                id="collapse4"
                className="collapse answer "
                aria-labelledby="heading4"
                data-parent="#accordion"
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Posting a job is free only till 31st Oct 2020 due to COVID 19.
                  Thereafter, the price is <i className="fa fa-inr"></i> 4999
                  inclusive of all taxes.{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse5"
                faq_id="5"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div
                  className="card-header"
                  id="heading5"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="content"
                    style={{
                      color: "Black",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Q. Will I be able to integrate applications received on
                    Internshala into our ATS?
                  </div>
                </div>
              </button>

              <div
                id="collapse5"
                className="collapse answer "
                aria-labelledby="heading5"
                data-parent="#accordion"
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  No, you won’t be able to integrate the applications into your
                  ATS but we provide our own ATS to review, shortlist, hire, and
                  reject applications.{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse6"
                faq_id="6"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div
                  className="card-header"
                  id="heading6"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="content"
                    style={{
                      color: "Black",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    Q. For how long can I access the applications after my job
                    post expires?
                  </div>
                </div>
              </button>

              <div
                id="collapse6"
                className="collapse answer "
                aria-labelledby="heading6"
                data-parent="#accordion"
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  You can access the applications for 30 days after your post is
                  closed on Internshala and extend your access for 15 more days
                  after that.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NonePost;
