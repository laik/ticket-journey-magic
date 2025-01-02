import { useState } from "react";
import { trainTickets } from "../data/mockData";
import type { TrainTicket } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [tickets] = useState<TrainTicket[]>(trainTickets);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Train Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-primary">
                  {ticket.trainNumber}
                </span>
                <span className="text-accent font-bold">
                  ¥{ticket.price}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-medium">{ticket.departure}</p>
                    <p className="text-sm text-gray-600">{ticket.departureTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-medium">{ticket.arrival}</p>
                    <p className="text-sm text-gray-600">{ticket.arrivalTime}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">
                    {ticket.seatsAvailable} seats available
                  </span>
                  <button
                    onClick={() => navigate("/booking")}
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;