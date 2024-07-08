import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Treebo App</h2>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
