
import './App.scss';
import Header from "./components/header.js";
import Aboutme from "./components/aboutme.js";
import Cv from "./components/cv.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Aboutme />
      <Cv />
      <Switch>
      <Projects />
      </Switch>
      <Contact />
      <Footer />
      <header className="App-header">
      </header>
      </Router>
    </div>
  );
}
export default App;
