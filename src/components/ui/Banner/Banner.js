import React from 'react';
import './Banner.css'
const Banner =()=>{
    
    return(
        <>
				<div className="row b" style={{margin:"40px 50px 60px 50px"}}>
                <div className="col-md-12 b" >
                    <form className="b">
                        <center>
                        <input className="b search-bar" type="text" placeholder="What are you looking for?" aria-label="Search"
                        style={{	border:"1px solid gray",
                            borderRadius:"5px",
                            padding:"10px 0px 10px 20px",
                            width:"50%"}}/>
                        </center>
                    </form>
                </div>
            </div>
			{/* carousel starting */}
            <div id="demo" className="carousel slide b" data-ride="carousel">
			  <div className="carousel-inner" style={{width:"95%",margin:"0px 67px"}}>
			    <div className="carousel-item active">
			      <img src="https://internshala.com/cached_uploads/banner-images/home/home_internships-1920.png" alt="img2" width="95%" height="400px"/>
			      <div className="carousel-caption capt-loc b">
				    <h2 className="" style={{textAlign:"left",color:"black",marginBottom: "30px"}}>Get ahead. Get an Internship!</h2>
				    <h4 className="txt-h1" style={{color:"black"}}>10,000+ internship with stipend</h4>
				    <h5 className="txt-h1" style={{color:"black"}}>100% verified </h5>
				    <h5 className="txt-h1" style={{color: "black"}}>Apply for free</h5>

				  </div>
			    </div>
			    <div className="carousel-item">
			      <img src="https://internshala.com/cached_uploads/banner-images/home/home_jobs-1920.png" alt="img3" width="95%" height="400px"/>
			      <div className="carousel-caption capt-loc b">
				    <h4 className="" style={{textAlign:"left"}}>Introducing</h4>
				    <h1 className="txt-h" style={{textAlign:"left"}}>Freher Jobs</h1>
				    <h3 className="" style={{textAlign:"left"}}>Apply to premium fresher jobs for free</h3>
				    <h5 className="txt-h1">Minimum CTC 3 LPA</h5>
				    <h5 className="txt-h1">100% verified jobs</h5>

				  </div>
			    </div>
			     <div className="carousel-item">
			      <img src="https://internshala.com/cached_uploads/banner-images/home/trainings_mega_contest-1920.png" alt="img4" width="95%" height="400px"/>
			      <div className="carousel-caption capt-loc b">
				    <h1 className="">Learn in-demand skills and win cash rewards!</h1>
					<div style={{marginTop:"30px"}}>
						<img src="https://trainings.internshala.com/static/images/contest/medals/medal_1.svg" alt="img"/>
						<span>35,000</span>
						<img src="https://trainings.internshala.com/static/images/contest/medals/medal_2.svg" alt="img1"/>
						<span>20,000</span>
						<img src="https://trainings.internshala.com/static/images/contest/medals/medal_3.svg" alt="img2"/>
						<span>10,000</span>
					</div>

				  </div>
			    </div>
			  </div>
			  

			  <a className="carousel-control-prev" href="#demo" data-slide="prev">
			    <span className="carousel-control-prev-icon"></span>
			  </a>
			  <a className="carousel-control-next" href="#demo" data-slide="next">
			    <span className="carousel-control-next-icon"></span>
			  </a>
			</div>
            </>
    )
}
export default Banner;
