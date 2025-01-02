import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">Train Tickets</Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/booking"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/booking")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary/10"
              }`}
            >
              Book Ticket
            </Link>
            <Link
              to="/train-info"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/train-info")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary/10"
              }`}
            >
              Train Info
            </Link>
            <Link
              to="/guidelines"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/guidelines")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary/10"
              }`}
            >
              Guidelines
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;