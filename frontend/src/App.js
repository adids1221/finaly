import Header from './components/Header'
import Intro from './components/Intro'
import Solutions from './components/Solutions'
import Conatct from './components/Conatct'
function App() {
  return (
    <div className='bg-gradient-to-bl from-gray-300 to-blue-100 via-blue-900  w-full'>
      <Header />
      <Intro />
      <Solutions />
      <Conatct />
    </div>
  );
}

export default App;
