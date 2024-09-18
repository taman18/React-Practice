import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import HigherOrderComponent from "./components/HigherOrderComponent";

const App: React.FC = () => {
  const name: string = 'Taman'
  return (
    <>
      <First name={name} />
      <Second />
    </>
  )
}

export default App;
