import ScroolToTop from './components/ScroolToTop'
import Header from './components/Header'
import Intro from './components/Intro'
import Solutions from './components/Solutions'
import Conatct from './components/Conatct'
import Values from './components/Values'
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div >
      <ScroolToTop />
      <Header />
      <div className=' bg-gray-300 w-full' >
        <Intro />
        <Values />
        <Solutions />
        <Aboutus />
        <Conatct />
      </div>
      <Footer />
    </div>
  );
}

export default App;