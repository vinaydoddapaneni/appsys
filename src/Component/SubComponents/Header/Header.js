import React from 'react';
import { nav } from './NavList';
import { Link } from 'react-router-dom'
// import $ from 'jquery';


class Header extends React.Component {
    componentDidMount() {
        /*show menu and toggle between cross mark and hamburger menu*/
let navToggle = document.getElementById("navToggle");
let navItems = document.getElementById("navItems");
let closeMenu = document.getElementById("closeMenu");
let burgerMenu = document.getElementById('burgerMenu');
let headerContainerEle = document.getElementById("headerContainerEle");

navToggle.addEventListener('click', () => {
    navItems.classList.toggle('show_menu');
    burgerMenu.classList.toggle("d-none");
    closeMenu.classList.toggle("d-none");
    headerContainerEle.classList.remove("header-box");
})

// when on mobile view Tasty is clicked then drop down menu should close 
let navLogoEle = document.getElementById("navLogoEle");
navLogoEle.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})

// when on mobile view on clicking any of the menu item drop down list should close.
let navLinkHome = document.getElementById("navLinkHome");   //1
let navLinkCompany = document.getElementById("navLinkCompany"); //  2
let navLinkWhoAreWe = document.getElementById("navLinkWhoAreWe");   // 3
let navLinkmissionandvalues = document.getElementById("navLinkmissionandvalues");   // 4
let navLinkServices = document.getElementById("navLinkServices");   // 5
let navLinkClients = document.getElementById("navLinkClients"); //6
let navLinkCareers = document.getElementById("navLinkCareers"); //7
let navLinkContact = document.getElementById("navLinkContact"); //8



navLinkHome.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkCompany.addEventListener('click', ()=>{
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkWhoAreWe.addEventListener("click", ()=>{
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkmissionandvalues.addEventListener("click", ()=>{
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkServices.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkClients.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkCareers.addEventListener("click", ()=>{
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkContact.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})





//color of the active link is different 
navLinkHome.addEventListener('click', () => {
    navLinkHome.classList.add('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkCompany.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.add('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkWhoAreWe.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.add('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkmissionandvalues.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.add('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkServices.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.add('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkClients.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.add('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkCareers.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.add('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkContact.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkCompany.classList.remove('active-link');
    navLinkWhoAreWe.classList.remove('active-link');
    navLinkmissionandvalues.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkClients.classList.remove('active-link');
    navLinkCareers.classList.remove('active-link');
    navLinkContact.classList.add('active-link');
})
    }
    render() {

        return (
            <div>
                <header className="header-container" id="headerContainerEle">
                    {/* nav container */}
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
}

export default Header
