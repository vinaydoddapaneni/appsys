import React from 'react';
import Header from './SubComponents/Header';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="app-container">
                    {/*Header Container*/}
                    <Header />
                    <main className="main-container">
                        {/*section Home Page*/}
                        <section className="corosel-container" id="home">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="assets\img\slide bar 1.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="assets\img\slide bar 2.jpg" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="assets\img\slide bar 3.jpg" alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </section>
                        {/*section Company Page */}
                        <section className="home-page-container" id="company">
                            <div className="home-page-content-container">
                                <div className="home-heading-container">
                                    <h1 className="home-heading">Company</h1>
                                </div>
                                <div className="home-content-container">
                                    <p className="content-para">AppSys Technologies is a one-stop hub for IT Training and Placement services.
                                        With many years of experience and high quality team of experts, we have established ourselves as a
                                        pioneer in the Industry. We help individuals with IT backgrounds, either graduates or post graduates,
                                        through industry level training in major advance technologies such as Java UI, Big Data, .Net, Java,
                                        iOS/Android, Infomatica, Websphere Admin, Weblogin Admin, Selenium Automation QA, Sales Force and many others.
                                        All these courses are developed according to the rising demands of IT professionals proficient in these technologies.
                                        We will not only provide the industry level training but also place the candidates at good positions in well-known IT
                                        companies such as Google, Facebook, and Apple etc. With our quality efforts and hard work, today we are the market leaders
                                        in UI training and placement services.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/*section Who Are we */}
                        <section className="who-page-container" id="whoAreWe">
                            <div className="whoAreWe-container">
                                <div className="whoAreWe-image-container">
                                    <img src="assets\img\brain.png" className="whoarewe-image" />
                                </div>
                                <div className="whoarewe-content-container">
                                    <div className="whoarewe-content-container-heading">
                                        <h1 className="whoarewe-heading">Who Are We</h1>
                                    </div>
                                    <div className="whoarewe-content-container-para">
                                        <p className="whoarewe-para">
                                            We are an End to End IT Solutions provider with an experience in Business Consulting, IT Integration,
                                            Project Management and Staff Augmentation.
                                            We take prode in our philosophy of "Organic Growth". We are a fast growing software consulting company
                                            offering development solutions to all our clients through offshore and onsite services.
                                            Our strength lies in leveraging innovation and a global onsite-offshore delivery model to provide best
                                            Return on Investments(ROI) for our clients. With an established offshore service centers we are able to
                                            provide our customers cost effective and customized solutions.
                                            In this highly competitive global marketplace with unlimited oppurtunities, Where growth and consolidation
                                            brings upon the distinction, Our clients face a host of new challenges continously.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* mission and values container */}
                        <section className="mission-values-container" id="missionAndValues">
                            <div className="mission-values-container">
                                <div className="mission-values-content-container">
                                    <div className="mission-values-content-heading-container">
                                        <h2 className="mission-values-content-heading">Mission And Values</h2>
                                    </div>
                                    <div className="mission-values-content-para">
                                        <p className="mission-values-para">
                                            Our business has evolved to meet the changing needs of our clients.
                                            Our team of highly experienced and qualified
                                            business management consultants take pride in adding real value to
                                            organisations and individuals.
                                            From business processes and working practices to culture, values and attitudes,
                                            our team has the necessary skills and experience to achieve the outcomes that our clients need.
                                            Our management consultants have held leadership positions, have strong academic backgrounds,
                                            broad sector experience and are passionate about service, quality and delivery.
                                            This enables us to offer a flexible consulting model where we can act as coach,
                                            facilitator, advisor and developer.
                                        </p>
                                    </div>
                                </div>
                                <div className="mission-values-image-container">
                                    <img src="assets\img\pencils.png" className="mission-value-image" />
                                </div>
                            </div>
                        </section>
                        {/* Our services */}
                        <section className="service-page-container" id="services">
                            <div className="service-heading-container">
                                <h1 className="service-heading">Our Services</h1>
                            </div>
                            {/* Consulting Service Section */}
                            <div className="consulting-service-section">
                                <div className="consultion-content-page">
                                    <div className="consulting-heading-container">
                                        <h1 className="consulting-heading">Consulting</h1>
                                    </div>
                                    <div className="consulting-content">
                                        <p className="consulting-para">
                                            We, at AppSys Technologies, have the required expertise in offering technical guidance,
                                            customized enterprise solutions through various development methods. Having successfully
                                            executed numerous projects in a variety of verticals, we have a real-world pulse on what
                                            works and ways to improve IT operations. Our massive network has delivered proven results with real impact.
                                            Our global team of world-class technologists combine domain, business, and technological expertise with
                                            a touch of customization to navigate today’s borderless IT landscape
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Staffing Service Section */}
                            <div className="staffing-section">
                                <div className="staffing-content-page">
                                    <div className="staffing-heading-container">
                                        <h1 className="staffing-heading">Staffing</h1>
                                    </div>
                                    <div className="staffing-content">
                                        <p className="staffing-para">
                                            Our Staffing Solutions has a proven and well-defined approach to hire top IT talent. We offer
                                            highy skilled IT proffessionals as a contract, Contract-to-hire or direct placement basis. In order
                                            to find top talent, We employ referral-based sourcing strategyand utilize our intense network of IT proffessionals.
                                            We proactively address any issues related with our staffing thus enabling to retain with our top talents through
                                            continous employment oppurtunities, career progression, and smooth project transitions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Application Service  section */}
                            <div className="application-section">
                                <div className="application-section-content-page">
                                    <div className="application-heading-container">
                                        <h1 className="application-heading">Application Development</h1>
                                    </div>
                                    <div className="application-content">
                                        <p className="application-para">
                                            With our strong expertise in product development,
                                            we take pride in developing applications that are adaptive and scalable as
                                            the company grows. We specialize in delivering custom web application development
                                            solutions that can fit perfectly in our clients’ organizational culture.
                                            Our clients get the best ROI due to our ability to provide them with a team of
                                            experts in one or more locations. We strategically plan our Onsite/Offshore model
                                            and fine-tune the ratio of resources to reduce costs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Training service section */}
                            <div className="training-section">
                                <div className="traing-content-page">
                                    <div className="training-heading-container">
                                        <h1 className="training-heading">Training</h1>
                                    </div>
                                    <div className="training-content">
                                        <p className="training-para">
                                            We offer training in leading Java technologies including but not limited to
                                            HTML5, CSS3, Bootstrap4, JavaScript/Jquery. Angular 4 withhands-on practical experience.
                                            Our trainees get ample chance to deploy the learnt technologies in a real-time project
                                            to gain practical exposure to the company, product and market environment. We also provide
                                            employment oppurtunities in top fortune global 500 companies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* clients section */}
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
                                <div className="clients-image-container">
                                    <img src="assets\img\apple logo.jpg" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\at&t logo.png" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\cdk global logo.png" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\cisco logo.png" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\immegration logo.png" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\verizon logo.png" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\sangfilims logo.jpg" className="company-image" />
                                </div>
                                <div className="clients-image-container">
                                    <img src="assets\img\pearson logo.png" className="company-image" />
                                </div>
                            </div>
                        </section>
                        {/* careers section page */}
                        <section className="careers-section" id="careers">
                            <div className="expand-container">
                                <div className="careers-heading-container">
                                    <h1 className="careers-heading"> Careers </h1>
                                </div>
                                <div id="accordion">
                                    {/* Card -- card heading -- card content  */}
                                    {/* Card 1 */}
                                    <div className="card">
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
                                    </div>
                                    {/* Card 2 */}
                                    <div className="card">
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
                                    </div>
                                    {/* card 3 */}
                                    <div className="card">
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
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* contact section page */}
                        <secion className="contact-section" id="contactUs">
                            <div className="contact-container">
                                <div className="contact-heading-container">
                                    <h1 className="contact-heading">Contact Us </h1>
                                </div>
                                <div className="contact-map-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.438283740677!2d-94.74880068465049!3d38.86821317957512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0bf9508ec7d09%3A0xde013a4a87a79604!2s13975%20W%20143rd%20Ct%2C%20Olathe%2C%20KS%2066062!5e0!3m2!1sen!2sus!4v1629381284329!5m2!1sen!2sus" height={300} frameBorder={0} style={{ border: 0 }} allowFullScreen="true" aria-hidden="false" tabIndex={0} className="map-image">
                                    </iframe>
                                    {/*-  <iframe src=
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
      
      height="300"
      frameborder="0"
      style="border:0;"
      allowfullscreen="true"
      aria-hidden="false"
      tabindex="0" class="map-image">
    </iframe> */}
                                </div>
                                <div className="address-content-container">
                                    <div className="address-container">
                                        <h1 className="address-heading"> Address </h1>
                                        <p className="address-para">AppSys Technologies LLC Corporate</p>
                                        <p className="address-para">P.O.Box 3645 Olathe, Kansas, 66063</p>
                                    </div>
                                    <div className="address-container">
                                        <h1 className="address-heading"> Contact Us </h1>
                                        <p className="address-para"><span className="contact-us-subheading">Email : </span>hr@AppSystechnologies.com</p>
                                        <p className="address-para"><span className="contact-us-subheading">HR &amp; Payroll : </span>hr@AppSystechnologies.com</p>
                                        <p className="address-para"><span className="contact-us-subheading">Immigration : </span>hr@AppSystechnologies</p>
                                        <p className="address-para"><span className="contact-us-subheading">Accounting : </span>hr@AppSystechnologies</p>
                                        <p className="address-para"><span className="contact-us-subheading">Escalation : </span>hr@AppSystechnologies</p>
                                    </div>
                                </div>
                            </div>
                        </secion>
                        {/*footer section */}
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
                                    <a href="#" className="socila-icons"><i className="bi bi-instagram icon" /></a>
                                    <a href="#" className="socila-icons"><i className="bi bi-facebook icon" /></a>
                                    <a href="#" className="socila-icons"><i className="bi bi-twitter icon" /></a>
                                    <a href="#" className="socila-icons"><i className="bi bi-linkedin icon" /></a>
                                </div>
                            </div>
                            <div className="footer-section-block">
                                <h1 className="footer-section-heading">Services</h1>
                                <ul className="footer-list-items">
                                    <li className="footer-list-item">Application Development</li>
                                    <li className="footer-list-item">Business Intelligence</li>
                                    <li className="footer-list-item">Workforce Solutions</li>
                                    <li className="footer-list-item">Technology Services</li>
                                </ul>
                            </div>
                            <div className="footer-section-block">
                                <h1 className="footer-section-heading">OUR MISSION</h1>
                                <ul className="footer-list-items">
                                    <li className="footer-list-item">Integrity in Services</li>
                                    <li className="footer-list-item">Commitment to the Solutionss</li>
                                    <li className="footer-list-item">Exceptional Approach to Business</li>
                                    <li className="footer-list-item">Quality of Services or Products</li>
                                </ul>
                            </div>
                            <div className="footer-section-block">
                                <h1 className="footer-section-heading">Contact Us</h1>
                                <ul className="footer-list-items">
                                    <li className="footer-list-item">Phone: +1913-626-6825</li>
                                    <li className="footer-list-item">HR &amp; Payroll: sl@AppSystechnologies</li>
                                    <li className="footer-list-item">Immigration: ss@AppSystechnologies</li>
                                    <li className="footer-list-item">Accounting: vb@AppSystechnologies</li>
                                    <li className="footer-list-item">Escalation: as@AppSystechnologies</li>
                                </ul>
                            </div>
                        </footer>
                    </main>
                </div>

            </>
        )
    }
}

export default Home