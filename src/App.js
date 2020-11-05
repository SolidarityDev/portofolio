import '/Users/supermac/Desktop/portofolio-react/src/App.scss';
import Header from "/Users/supermac/Desktop/portofolio-react/src/components/header.js";
import Aboutme from "/Users/supermac/Desktop/portofolio-react/src/components/aboutme.js";
import Cv from "/Users/supermac/Desktop/portofolio-react/src/components/cv.js";
import Projects from "/Users/supermac/Desktop/portofolio-react/src/components/projects.js";
import Contact from "/Users/supermac/Desktop/portofolio-react/src/components/contact.js";
import Footer from "/Users/supermac/Desktop/portofolio-react/src/components/footer.js";
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
