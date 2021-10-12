import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ Contact, FooterSection, Icon }) {

    return (
        <>
            <footer className="footer-section" id="footerSection">
                <div className="footer-section-block">
                    <div className="footer-logo-container">
                        <Link to="#" className="nav_logo" id="navLogoEle">
                            <img src="assets\img\logo.png" className="logo-image-appsys" alt="logo" />
                        </Link>
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
                            return <Link  to="#" className="socila-icons" key={solIcon.name}><i className={`bi bi-${solIcon.name} icon`} /></Link>
                        })}
                    </div>
                </div>
                {FooterSection.map(list => {
                    return (
                        <div className="footer-section-block" key={list.label}>
                            <h1 className="footer-section-heading">{list.label}</h1>
                            <ul className="footer-list-items">
                                {list.items.map(items => { return <li className="footer-list-item" key={items}>{items}</li> })}
                            </ul>
                        </div>
                    )
                })}
                <div className="footer-section-block">
                    <h1 className="footer-section-heading">Contact Us</h1>
                    <ul className="footer-list-items">
                        <li className="footer-list-item">Phone: +1913-626-6825</li>
                        {Contact.map(cList => {
                            return <li className="footer-list-item" key={cList.label}>{cList.label}: {cList.email}@AppSystechnologies.com</li>
                        })}
                    </ul>
                </div>
                <div className="text-center">© 2021 Copyright:
                    <a href="https://appsys.netlify.app/"> appsys.netlify.app</a>
                    <Link to="/loading" className="ml-5">Loading</Link>
                </div>

            </footer>
        </>
    )
}

export default Footer
