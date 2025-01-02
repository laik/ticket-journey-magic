import { bookingGuidelines } from "../data/mockData";
import Navigation from "../components/Navigation";

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Guidelines</h2>
          <ul className="space-y-4">
            {bookingGuidelines.map((guideline, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-gray-600"
              >
                <span className="inline-block w-6 h-6 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <span>{guideline}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;