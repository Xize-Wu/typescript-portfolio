import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#tech-stack" className="hover:underline">Tech Stack</a>
        <a href="#projects" className="hover:underline">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
