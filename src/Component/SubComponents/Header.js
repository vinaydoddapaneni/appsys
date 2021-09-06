import React from 'react'

function Header() {
    const nav = [
        { name: "home", active: "active-link", id: "Home", tag: "Home", title: "Home" },
        { name: "company", active: "", id: "Company", title: "Company" },
        { name: "whoAreWe", active: "", id: "WhoAreWe", title: "Who Are We" },
        { name: "missionAndValues", active: "", id: "missionandvalues", title: "Mission And Values" },
        { name: "services", active: "", id: "Services", title: "Services" },
        { name: "clients", active: "", id: "Clients", title: "Clients" },
        { name: "careers", active: "", id: "Careers", title: "Careers" },
        { name: "contactUs", active: "", id: "Contact", title: "Contact Us" },
    ]
    return (
        <div>
            <header className="header-container" id="headerContainerEle">
                {/*nav container*/}
                <nav className="nav-container">
                    {/* Logo container */}
                    <div className="logo-container">
                        <a href="#" className="nav_logo" id="navLogoEle">
                            <img src="assets\img\logo.png" className="logo-image-appsys" />
                        </a>
                    </div>
                    {/*nav items */}
                    <div className="nav-items" id="navItems">
                        <ul className="nav-items-container">
                            {nav.map((list) => {
                                return (
                                    <li className="nav_item">
                                        <a
                                            href={`#${list.name}`}
                                            className={`nav_link ${list.active}`}
                                            id={`navLink${list.id}`}>{list.title}
                                        </a>
                                    </li>
                                )
                            })}
                            {/* <li className="nav_item"><a href="#home" className="nav_link active-link" id="navLinkHome">Home</a></li>
                            <li className="nav_item"><a href="#company" className="nav_link" id="navLinkCompany">Company</a></li>
                            <li className="nav_item"><a href="#whoAreWe" className="nav_link" id="navLinkWhoAreWe">Who Are We</a></li>
                            <li className="nav_item"><a href="#missionAndValues" className="nav_link" id="navLinkmissionandvalues">Mission And Values</a></li>
                            <li className="nav_item"><a href="#services" className="nav_link" id="navLinkServices">Services</a></li>
                            <li className="nav_item"><a href="#clients" className="nav_link" id="navLinkClients">Clients</a></li>
                            <li className="nav_item"><a href="#careers" className="nav_link" id="navLinkCareers">Careers</a></li>
                            <li className="nav_item"><a href="#contactUs" className="nav_link" id="navLinkContact">Contact Us</a></li> */}
                        </ul>
                    </div>
                    <div className="nav_toggle" id="navToggle">
                        <i className="bi bi-list burger-menu" id="burgerMenu" />
                        <i className="bi bi-x close-menu d-none" id="closeMenu" />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
