import React from 'react'

function Clients() {
    const imges = [{ names: "apple logo.jpg" },
    { names: "at&t-logo.png" },
    { names: "cdk global logo.png" },
    { names: "immegration logo.png" },
    { names: "verizon logo.png" },
    { names: "sangfilims logo.jpg" },
    { names: "pearson logo.png" }]
    return (
        <div>
            <section className="clients-section" id="clients">
                <div className="clients-content-container">
                    <div className="clients-content-heading-container">
                        <h1 className="clients-heading">Clients</h1>
                    </div>
                    <div className="clients-content-para-container">
                        <p className="clients-content-para">
                            The e-World has created innumerable opportunities for organizations to exploit their core
                            business competencies by transforming their technology infrastructure from business to e-Business.
                            It is imperative that organizations define the right strategy, adopt a viable business model, and
                            choose wisely among the varied technology options.
                        </p>
                    </div>
                </div>
                <div className="clients-images-container">
                    {imges.map(imgN => {
                        return (
                            <div className="clients-image-container">
                                <img src={`assets/img/${imgN.names}`} className="company-image" />
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Clients
