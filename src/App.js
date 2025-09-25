import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/header';
import Portfolio from './Pages/Home/portfolio';
import About from './Pages/About/about';
import Projects from './Pages/Projects/projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
      <Router>
        <Route exact path="/" component={Portfolio}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </Router>
    </div>
  );
}

export default App;
