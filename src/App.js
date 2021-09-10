import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <Route to="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
