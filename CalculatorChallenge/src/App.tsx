import Heading from './components/Heading';
import Numpad from './components/Numpad';
import Output from './components/Output';

function App() {

  return (
    <div className="w-full h-screen bg-very-dark-desaturated-blue text-white md:text-xl font-bold p-4 space-y-4">
    <Heading />
    <main className="flex flex-col justify-center items-center space-y-4 w-full">
      <Output />
      <Numpad />
    </main>
    </div>
  )
}

export default App
