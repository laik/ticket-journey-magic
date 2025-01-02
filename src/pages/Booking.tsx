import { useState } from "react";
import { stations, trainInfo, bookingGuidelines } from "../data/mockData";
import { useToast } from "../hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    idCard: "",
    destination: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "预订已提交",
      description: "您的订票申请已成功提交。",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Company Header */}
      <div className="bg-[#C8181B] text-white py-4 px-4 shadow-md">
        <h1 className="text-xl font-bold text-center">广汽公司</h1>
        <p className="text-sm text-center mt-1">员工福利车票预订系统</p>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Train Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">列车信息</h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-600">{trainInfo.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">列车特点</h3>
              <ul className="list-disc list-inside space-y-2">
                {trainInfo.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">预订车票</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓名
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="请输入姓名"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                电话号码
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="请输入电话号码"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                身份证号码
              </label>
              <input
                type="text"
                name="idCard"
                value={formData.idCard}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="请输入身份证号码"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                目的地车站
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">请选择目的地</option>
                {stations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#C8181B] text-white py-2 px-4 rounded-md hover:bg-[#A01416] transition-colors"
            >
              提交预订
            </button>
          </form>
        </div>

        {/* Guidelines Section */}
        <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">预订须知</h2>
          <ul className="space-y-4">
            {bookingGuidelines.map((guideline, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-gray-600"
              >
                <span className="inline-block w-6 h-6 bg-[#C8181B] text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm">
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

export default Booking;