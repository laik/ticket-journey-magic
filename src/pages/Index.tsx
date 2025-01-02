import { useState } from "react";
import { trainTickets } from "../data/mockData";
import type { TrainTicket } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [tickets] = useState<TrainTicket[]>(trainTickets);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Company Header */}
      <div className="bg-[#C8181B] text-white py-4 px-4 shadow-md">
        <h1 className="text-xl font-bold text-center">广汽公司</h1>
        <p className="text-sm text-center mt-1">员工福利车票预订系统</p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-[#C8181B]">
                  {ticket.trainNumber}
                </span>
                <span className="text-[#C8181B] font-bold">
                  ¥{ticket.price}
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">出发站</p>
                    <p className="font-medium">{ticket.departure}</p>
                    <p className="text-sm text-gray-600">{ticket.departureTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">到达站</p>
                    <p className="font-medium">{ticket.arrival}</p>
                    <p className="text-sm text-gray-600">{ticket.arrivalTime}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600">
                    剩余座位: {ticket.seatsAvailable}
                  </span>
                  <button
                    onClick={() => navigate("/booking")}
                    className="bg-[#C8181B] text-white px-4 py-2 rounded-md hover:bg-[#A01416] transition-colors"
                  >
                    立即预订
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