import React from 'react'
import { CareersList } from './CareersList'

function Careers() {
    return (
        <>
            <section className="careers-section" id="careers">
                <div className="expand-container">
                    <div className="careers-heading-container">
                        <h1 className="careers-heading"> Careers </h1>
                    </div>
                    <div id="accordion">
                        {/* Card -- card heading -- card content  */}
                        {/* Card 1 */}
                        {CareersList.map(carrer => {
                            return (
                                <div className="card" key={carrer.key}>
                                    <div className="card-header" id={`heading${carrer.role}`}>
                                        <h5 className="mb-0">
                                            <button className="btn btn-link role-main-heading" data-toggle="collapse" data-target={`#collapse${carrer.role}`} aria-expanded="true" aria-controls={`collapse${carrer.role}`}>
                                                {carrer.head}
                                            </button>
                                        </h5>
                                    </div>
                                    <div id={`collapse${carrer.role}`} className="collapse" aria-labelledby={`heading${carrer.role}`} data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="card-body-container">
                                                <p className="heading-para-text"><span className="role-heading">Position : &nbsp; &nbsp;</span>
                                                    {carrer.body.position}
                                                </p>
                                                <p className="heading-para-text"><span className="role-heading">Number Of Openings : &nbsp; &nbsp;</span>
                                                    {carrer.body.numberOfOpenings}
                                                </p>
                                                <p className="heading-para-text"><span className="role-heading">Location : &nbsp; &nbsp;</span>
                                                    {carrer.body.location}
                                                </p>
                                                <p className="heading-para-text"><span className="role-heading">Job Duties : &nbsp; &nbsp;</span>
                                                    {carrer.body.jobDuties}
                                                </p>
                                                <p className="heading-para-text"><span className="role-heading">Education Required : &nbsp; &nbsp;</span>
                                                    {carrer.body.educationRequired}
                                                </p>
                                                <p className="heading-para-text"><span className="role-heading">contact : &nbsp; &nbsp;</span>
                                                    {carrer.body.contact}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link role-main-heading" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Software Developer
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <div className="card-body-container">
                                        <p className="heading-para-text"><span className="role-heading">Position : &nbsp; &nbsp;</span>
                                            Fulltime job, 40 hours per week
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Number Of Openings : &nbsp; &nbsp;</span>
                                            Multiple
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Location : &nbsp; &nbsp;</span>
                                            AppSys Technologies, LLC  &nbsp; &nbsp;
                                            P.O. Box 3645
                                            Olathe, KS 66063
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Job Duties : &nbsp; &nbsp;</span>
                                            Develop, Create, Analyze and Modify web-based and cloud-based software systems using various software and cloud based technologies. Participate and Involve in entire Software Development Lifecycle (SDLC) to build enterprise level software applications. Design software or customize software for client use with the aim of optimizing operational efficiency. Develop by utilizing various UX development technologies for responsive user interfaces for software, utilize various backend technologies such as MS-SQL or ORACLE, apply appropriate algorithms to design efficient systems, use efficient programming languages such as Java or C# , utilize various mobile programming and systems based tools, various source control tools and various software testing frameworks to help in development of software systems. Work under supervision. Travel And/ Or Relocation to unanticipated client sites is required.
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Education Required : &nbsp; &nbsp;</span>
                                            Master’s Degree in Computers Science, Computer Information Systems, Information Technology, Computer Engineering, Electrical Engineering, Electronics Engineering, Software Engineering or Closely Related.
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">contact : &nbsp; &nbsp;</span>
                                            Mail application with resume ref job code 323 to Hiring Manager, AppSys Technologies, LLC, P.O.Box 3645, Olathe, KS 66063
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* Card 2 */}
                        {/* <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed role-main-heading" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Programmer Analyst
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    <div className="card-body-container">
                                        <p className="heading-para-text"><span className="role-heading">Position : &nbsp; &nbsp;</span>
                                            Fulltime job, 40 hours per week
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Number Of Openings : &nbsp; &nbsp;</span>
                                            Multiple
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Location : &nbsp; &nbsp;</span>
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Job Duties : &nbsp; &nbsp;</span>
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Education Required : &nbsp; &nbsp;</span>
                                            Bachelor’s Degree in Computer Science, Information Technology, or directly related field of study.
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">contact : &nbsp; &nbsp;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* card 3 */}
                        {/* <div className="card">
                            <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed role-main-heading" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        DevOps Engineer
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    <div className="card-body-container">
                                        <p className="heading-para-text"><span className="role-heading">Position : &nbsp; &nbsp;</span>
                                            Fulltime job, 40 hours per week
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Number Of Openings : &nbsp; &nbsp;</span>
                                            Multiple
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Location : &nbsp; &nbsp;</span>
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Job Duties : &nbsp; &nbsp;</span>
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">Education Required : &nbsp; &nbsp;</span>
                                            Bachelor’s Degree in Computer Science, Information Technology, or directly related field of study.
                                        </p>
                                        <p className="heading-para-text"><span className="role-heading">contact : &nbsp; &nbsp;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Careers
