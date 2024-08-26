import Heading from './components/Heading';
import Numpad from './components/Numpad';
import Output from './components/Output';

function App() {

  return (
    <div className="w-full h-screen bg-very-dark-desaturated-blue text-white md:text-xl font-bold p-4">
    <Heading />
    <main>
      <Output />
      <Numpad />
    </main>
    </div>
  )
}

export default App
