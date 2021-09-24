// Contact, FooterSection and Icon we are passing as a props and in the Home Component
export const Contact = [
    { email: "hr", label: "Email", key: 1 },
    { email: "sl", label: "HR & Payroll", key: 2 },
    { email: "ss", label: "Immigration", key: 3 },
    { email: "vb", label: "Accounting", key: 4 },
    { email: "as", label: "Escalation", key: 5 }
]
export const FooterSection = [
    {
        label: "Services",
        items: [
            "Application Development",
            "Business Intelligence",
            "Workforce Solutions",
            "Technology Services"
        ],
        key: 1
    },
    {
        label: "OUR MISSION",
        items: [
            "Integrity in Services",
            "Commitment to the Solutionss",
            "Exceptional Approach to Business",
            "Quality of Services or Products"
        ],
        key: 2
    }
]
export const Icon = [
    { name: "instagram", key: 1 },
    { name: "facebook", key: 2 },
    { name: "twitter", key: 3 },
    { name: "linkedin", key: 4 }
]

// nav list of objects for Header's Component
export const nav = [
    { name: "home", active: "active-link", id: "Home", tag: "Home", title: "Home", key: 1 },
    { name: "company", active: "", id: "Company", title: "Company", key: 2 },
    { name: "whoAreWe", active: "", id: "WhoAreWe", title: "Who Are We", key: 3 },
    { name: "missionAndValues", active: "", id: "missionandvalues", title: "Mission And Values", key: 4 },
    { name: "services", active: "", id: "Services", title: "Services", key: 5 },
    { name: "clients", active: "", id: "Clients", title: "Clients", key: 6 },
    { name: "careers", active: "", id: "Careers", title: "Careers", key: 7 },
    { name: "contactUs", active: "", id: "Contact", title: "Contact Us", key: 8 },
]

// Careers List of Objects for Career's Component
export const CareersList = [
    {
        role: "One",
        head: "Software Developer",
        body: {
            position: "Fulltime job, 40 hours per week",
            numberOfOpenings: "Multiple",
            location: `AppSys Technologies,  LLC P.O. Box 3645   Olathe, KS 66063`,
            jobDuties: "Develop, Create, Analyze and Modify web-based and cloud-based software systems using various software and cloud based technologies. Participate and Involve in entire Software Development Lifecycle (SDLC) to build enterprise level software applications. Design software or customize software for client use with the aim of optimizing operational efficiency. Develop by utilizing various UX development technologies for responsive user interfaces for software, utilize various backend technologies such as MS-SQL or ORACLE, apply appropriate algorithms to design efficient systems, use efficient programming languages such as Java or C# , utilize various mobile programming and systems based tools, various source control tools and various software testing frameworks to help in development of software systems. Work under supervision. Travel And/ Or Relocation to unanticipated client sites is required.",
            educationRequired: "Master’s Degree in Computers Science, Computer Information Systems, Information Technology, Computer Engineering, Electrical Engineering, Electronics Engineering, Software Engineering or Closely Related.",
            contact: "Mail application with resume ref job code 323 to Hiring Manager, AppSys Technologies, LLC, P.O.Box 3645, Olathe, KS 66063"
        },
        key: 1
    },
    {
        role: "Two",
        head: "Programmer Analyst",
        body: {
            position: "Fulltime job, 40 hours per week",
            numberOfOpenings: "Multiple",
            location: `AppSys Technologies,  LLC P.O. Box 3645   Olathe, KS 66063`,
            jobDuties: "Develop, Create, Analyze and Modify web-based and cloud-based software systems using various software and cloud based technologies. Participate and Involve in entire Software Development Lifecycle (SDLC) to build enterprise level software applications. Design software or customize software for client use with the aim of optimizing operational efficiency. Develop by utilizing various UX development technologies for responsive user interfaces for software, utilize various backend technologies such as MS-SQL or ORACLE, apply appropriate algorithms to design efficient systems, use efficient programming languages such as Java or C# , utilize various mobile programming and systems based tools, various source control tools and various software testing frameworks to help in development of software systems. Work under supervision. Travel And/ Or Relocation to unanticipated client sites is required.",
            educationRequired: "Bachelor’s Degree in Computer Science, Information Technology, or directly related field of study.",
            contact: "Mail application with resume ref job code 323 to Hiring Manager, AppSys Technologies, LLC, P.O.Box 3645, Olathe, KS 66063"
        },
        key: 2
    },
    {
        role: "Three",
        head: "DevOps Engineer",
        body: {
            position: "Fulltime job, 40 hours per week",
            numberOfOpenings: "Multiple",
            location: `AppSys Technologies,  LLC P.O. Box 3645   Olathe, KS 66063`,
            jobDuties: "Develop, Create, Analyze and Modify web-based and cloud-based software systems using various software and cloud based technologies. Participate and Involve in entire Software Development Lifecycle (SDLC) to build enterprise level software applications. Design software or customize software for client use with the aim of optimizing operational efficiency. Develop by utilizing various UX development technologies for responsive user interfaces for software, utilize various backend technologies such as MS-SQL or ORACLE, apply appropriate algorithms to design efficient systems, use efficient programming languages such as Java or C# , utilize various mobile programming and systems based tools, various source control tools and various software testing frameworks to help in development of software systems. Work under supervision. Travel And/ Or Relocation to unanticipated client sites is required.",
            educationRequired: "Bachelor’s Degree in Computer Science, Information Technology, or directly related field of study.",
            contact: "Mail application with resume ref job code 323 to Hiring Manager, AppSys Technologies, LLC, P.O.Box 3645, Olathe, KS 66063"
        },
        key: 3
    }
]

// Images Object List for Client's component
export const imges = [{ names: "apple", type: 'jpg', key: 1 },
{ names: "at&t", type: 'png', key: 2 },
{ names: "cdk global", type: 'png', key: 3 },
{ names: "immegration", type: 'png', key: 4 },
{ names: "verizon", type: 'png', key: 5 },
{ names: "sangfilims", type: 'jpg', key: 6 },
{ names: "pearson", type: 'png', key: 7 }]

// Slide Image list of Object that we are using at Home componnet
export const slideImage = [
    { id: 0, img: '1', active: "active", alt: "First" },
    { id: 1, img: '2', active: "", alt: "Second" },
    { id: 2, img: '3', active: "", alt: "Third" },
]