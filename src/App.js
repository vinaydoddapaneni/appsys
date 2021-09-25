import React from 'react';
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>APPSYS</title>
          <meta name="description" content="AppSys Technologies is a global IT Services, Product Development, and Business Solutions firm based in Kansas. We focus on delivering flexible IT solutions for today’s complex business technology." />
          <meta name="keywords"
            content="IT Services Company, IT company, IT Training, Placement services, industry level training, technologies, Java UI, Big Data, .Net, Java, iOS/Android, Infomatica, Websphere Admin, Weblogin Admin, Selenium Automation QA, Sales Force, courses, IT companies, Google, Facebook, and Apple, it consulting companies, 
          top it companies, it outsourcing companies, usa it, stericycle shred it,
          atos it solutions, best it companies, it startup, it global,
          biggest it companies, largest it companies, top 10 it companies,
          fortune 500 it companies, big it companies, infosys it, tcs it,
          pwc it, it software company, men’s wearhouse i guarantee it,
          it solutions consulting, best it consulting firms, tcs it company,
          it consulting business, hcl it, it startup companies, top it services companies,
          largest it services companies, verizon it outsourcing, sterling it solutions, 
          small it companies, it companies in, exxonmobil it, global it company, cgi it company,
          it infrastructure companies, top 5 companies, ge healthcare it, pwc it support,
          firmit, top 100 it companies, largest it consulting companies, top it outsourcing companies,
          top it staffing firms, verizon it outsourcing to infosys, prudential everybody’s doing it,
          amadeus it holding, hcl it company, large it companies"
          />
        </Helmet>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
