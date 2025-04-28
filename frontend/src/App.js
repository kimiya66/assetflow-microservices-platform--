import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Employees from './components/Employees';
import Assets from "./components/Assets";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <div>
          <Nav />
        </div>

        {/* <nav style={navStyle}>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">AssetFlow App</h2>
          <div>
            <Link style={linkStyle} to="/employees">Employees</Link>
            <Link style={linkStyle} to="/assets">Assets</Link>
          </div>
        </nav> */}

        {/* Main Content */}
        <div className="p-5">
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/assets" element={<Assets />} />
          </Routes>
        </div>
      </div> 
    </Router>
  );
}

export default App;
