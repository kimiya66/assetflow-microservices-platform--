import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">AssetFlow</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/assets" className="text-gray-300 hover:text-white">Assets</a>
          <a href="/employees" className="text-gray-300 hover:text-white">Employees</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
