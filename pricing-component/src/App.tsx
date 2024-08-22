import "./App.css";
import Heading from './Pricing/Heading';
import Card from './Pricing/Card';

function App() {

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-grayish-blue text-sm">
      <Heading />
      <Card />
    </div>
  );
}

export default App;
