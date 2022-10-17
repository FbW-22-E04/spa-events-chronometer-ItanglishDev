import './App.css';
import Chrono from './components/Chrono';
import './index.css'

function App() {
  return (
    <div className=" font-serif m-[auto] pt-[40px] App w-[300px] border-4 h-[300px]">
      React Chrono
      <Chrono />
      <div className='flex items-center justify-around mt-[40px]'>

      </div>
    </div>
  );
}

export default App;
