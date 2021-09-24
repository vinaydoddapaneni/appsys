import React from 'react'
import { CareersList } from './List'

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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Careers
