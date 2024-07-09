import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <body className="w-full h-screen flex items-center flex-1 flex-col text-gray-100 bg-gray-900" >
      <header className="w-full flex items-center bg-gray-900 text-left min-h-20">
        <Link className="text-3xl font-bold ml-20" to="/">Treebo App</Link>
      </header>
      <Outlet />
    </body>
  );
}

export default App;
