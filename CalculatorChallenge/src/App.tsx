import Heading from './components/Heading';
import Numpad from './components/Numpad';
import Output from './components/Output';

function App() {

  return (
    <div className="w-full h-screen bg-very-dark-desaturated-blue text-white md:text-xl font-bold flex justify-center items-center font-league-spartan">
    <div className="w-11/12 h-full sm-md:w-1/2 xl:w-1/3 p-1 space-y-4"> 
      <Heading />
      <main className="flex flex-col justify-center items-center space-y-4 w-full">
        <Output />
        <Numpad />
      </main>
    </div>
    </div>
  )
}

export default App
