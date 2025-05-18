import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">LearnSphere</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
