import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header'
import Intro from './components/Intro'
import Solutions from './components/Solutions'
import Conatct from './components/Conatct'
import Values from './components/Values'
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <Router >
      <Header />
      <div className=' bg-gray-300 w-full' >
        <Intro />
        <Values />
        <Solutions />
        <Aboutus />
        <Conatct />
        {/* <Switch>
          <Route exact path='/'>
            <Intro />
            <Solutions />
            <Conatct />
          </Route>
          <Route path="/aboutus" component={Intro} />
          <Route exact path="/aboutus" component={App} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/contact" component={Conatct} />
        </Switch> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
