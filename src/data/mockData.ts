export interface TrainTicket {
  id: string;
  trainNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seatsAvailable: number;
}

export const trainTickets: TrainTicket[] = [
  {
    id: "1",
    trainNumber: "G1234",
    departure: "Beijing",
    arrival: "Shanghai",
    departureTime: "08:00",
    arrivalTime: "13:30",
    price: 553,
    seatsAvailable: 45,
  },
  {
    id: "2",
    trainNumber: "G5678",
    departure: "Shanghai",
    arrival: "Guangzhou",
    departureTime: "09:15",
    arrivalTime: "15:45",
    price: 463,
    seatsAvailable: 32,
  },
  {
    id: "3",
    trainNumber: "D2468",
    departure: "Shenzhen",
    arrival: "Beijing",
    departureTime: "10:30",
    arrivalTime: "18:00",
    price: 658,
    seatsAvailable: 28,
  },
];

export const stations = [
  "Beijing",
  "Shanghai",
  "Guangzhou",
  "Shenzhen",
  "Hangzhou",
  "Nanjing",
  "Chengdu",
  "Wuhan",
];

export const trainInfo = {
  description: "Special train service with enhanced comfort and amenities.",
  features: [
    "Comfortable seating with extra legroom",
    "On-board dining service",
    "Free Wi-Fi",
    "Power outlets at every seat",
    "Luggage storage space",
  ],
  schedule: "Daily service",
  routes: [
    "Beijing - Shanghai",
    "Shanghai - Guangzhou",
    "Guangzhou - Shenzhen",
  ],
};

export const bookingGuidelines = [
  "Valid ID card is required for booking",
  "Booking must be made at least 24 hours in advance",
  "Maximum of 5 tickets per booking",
  "Children under 12 must be accompanied by an adult",
  "Cancellation available up to 12 hours before departure",
  "Full refund available for cancellations made 48 hours before departure",
];