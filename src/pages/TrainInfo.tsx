import { trainInfo } from "../data/mockData";
import Navigation from "../components/Navigation";

const TrainInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Train Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600">{trainInfo.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {trainInfo.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Schedule</h3>
              <p className="text-gray-600">{trainInfo.schedule}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Routes</h3>
              <ul className="list-disc list-inside space-y-2">
                {trainInfo.routes.map((route, index) => (
                  <li key={index} className="text-gray-600">{route}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainInfo;