import './App.css';
import ResetButton from './components/ResetButton';
import StopButton from './components/StopButton';
import StartButton from './components/StartButton';
import Chrono from './components/Chrono';

function App() {
  return (
    <div className="m-[auto] App w-[300px] border-4 h-[300px]">
      React Chrono
      <Chrono />
      <div>
        <StartButton />
        <StopButton />
        <ResetButton />
      </div>
    </div>
  );
}

export default App;
