import "./styles/global.css";
import Habit from "./components/Habit";

const App = () => {
  return (
    <div>
      <Habit completed={2} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
    </div>
  );
};

export default App;
