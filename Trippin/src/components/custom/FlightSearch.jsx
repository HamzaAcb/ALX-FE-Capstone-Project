import React, { useState } from "react";
import { fetchFlightOffers } from "@/api";

const FlightSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");

  // Handle the search button click
  const handleSearch = async () => {
    setError(""); // Clear previous errors
    setFlights([]); // Clear previous results
    try {
      const flightOffers = await fetchFlightOffers(
        origin,
        destination,
        departureDate
      );
      setFlights(flightOffers); // Store the flight results
    } catch (err) {
      setError("Failed to fetch flights. Please try again."); // Handle errors
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Heading for the flight search section */}
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
        Search for Flights
      </h2>

      {/* Form for flight search inputs */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Input for origin airport code */}
          <input
            type="text"
            placeholder="Origin (e.g., LON)"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* Input for destination airport code */}
          <input
            type="text"
            placeholder="Destination (e.g., PAR)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* Input for selecting departure date */}
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Search button */}
        <button
          onClick={handleSearch}
          className="w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700"
        >
          Search Flights
        </button>
      </div>

      {/* Display any error message */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display the flight offers */}
      <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
        <ul className="space-y-4">
          {/* If flights are available, map through the flights array and display each flight */}
          {flights.length > 0 &&
            flights.map((flight, index) => (
              <li
                key={index}
                className="bg-purple-100 p-4 rounded-md border border-purple-300 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  {/* Display the flight price */}
                  <p className="text-lg font-bold text-purple-700">
                    ${flight.price.total} {flight.price.currency}
                  </p>
                  <p className="text-sm text-gray-500">Flight {index + 1}</p>
                </div>
                {/* Display the departure and arrival airport codes */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">
                    <span className="font-semibold">Departure:</span>{" "}
                    {flight.itineraries[0].segments[0].departure.iataCode}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Arrival:</span>{" "}
                    {flight.itineraries[0].segments[0].arrival.iataCode}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightSearch;
