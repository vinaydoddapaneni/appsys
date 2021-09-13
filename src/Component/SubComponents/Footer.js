import React from 'react'

function Footer({ Contact, FooterSection, Icon }) {


    // console.log(footerSection.map(list=>{return list}))
    return (
        <>
            <footer className="footer-section" id="footerSection">
                <div className="footer-section-block">
                    <div className="footer-logo-container">
                        <a href="#" className="nav_logo" id="navLogoEle">
                            <img src="assets\img\logo.png" className="logo-image-appsys" />
                        </a>
                    </div>
                    <div className="discription-section">
                        <p className="description-para">
                            AppSys Technologies is a global IT Services, Product Development, and Business Solutions firm based in
                            Kansas. We focus on delivering flexible IT solutions for today’s complex
                            business technology.
                        </p>
                    </div>
                    <div className="social-icons">
                        {Icon.map(solIcon => {
                            return <a href="#" className="socila-icons"><i className={`bi bi-${solIcon.name} icon`} /></a>
                        })}
                    </div>
                </div>
                {FooterSection.map(list => {
                    return (
                        <div className="footer-section-block">
                            <h1 className="footer-section-heading">{list.label}</h1>
                            <ul className="footer-list-items">
                                {list.items.map(items => { return <li className="footer-list-item">{items}</li> })}
                            </ul>
                        </div>
                    )
                })}
                <div className="footer-section-block">
                    <h1 className="footer-section-heading">Contact Us</h1>
                    <ul className="footer-list-items">
                        <li className="footer-list-item">Phone: +1913-626-6825</li>
                        {Contact.map(cList => {
                            return <li className="footer-list-item">{cList.label}: {cList.email}@AppSystechnologies.com</li>
                        })}
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
