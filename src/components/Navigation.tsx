import { Link, useLocation } from "react-router-dom";
import { Home, Ticket, Train, FileText } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          <Link
            to="/"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              isActive("/")
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            <Home size={20} />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/booking"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              isActive("/booking")
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            <Ticket size={20} />
            <span className="text-xs">Book</span>
          </Link>
          <Link
            to="/train-info"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              isActive("/train-info")
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            <Train size={20} />
            <span className="text-xs">Train Info</span>
          </Link>
          <Link
            to="/guidelines"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              isActive("/guidelines")
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            <FileText size={20} />
            <span className="text-xs">Guidelines</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;