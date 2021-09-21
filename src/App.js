import React from 'react';
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
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
