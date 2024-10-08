import React, { useState } from "react";
import { fetchCityCoordinates, fetchPointsOfInterest } from "@/api";

const PointsOfInterest = () => {
  const [cityCode, setCityCode] = useState("");
  const [radius, setRadius] = useState("");
  const [points, setPoints] = useState([]);
  const [error, setError] = useState("");

  // Handle the search operation when the user clicks the search button
  const handleSearch = async () => {
    setError(""); // Clear any previous errors
    setPoints([]); // Clear previous search results

    try {
      // Fetch the city coordinates based on the city code entered by the user
      const { latitude, longitude } = await fetchCityCoordinates(cityCode);

      // Fetch points of interest using the fetched coordinates and user-specified radius
      const results = await fetchPointsOfInterest(latitude, longitude, radius);
      setPoints(results); // Update the points of interest
    } catch (err) {
      console.error("Error during fetching:", err);
      setError("Failed to fetch points of interest. Please try again."); // Handle errors
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {/* Section title */}
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
        Search Points of Interest
      </h2>

      {/* Input fields for city code and radius */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="City Code (e.g., PAR)"
          value={cityCode}
          onChange={(e) => setCityCode(e.target.value.toUpperCase())} // Automatically convert input to uppercase
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="number"
          placeholder="Radius in (km)"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Search button to trigger handleSearch */}
      <button
        onClick={handleSearch}
        className="w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700"
      >
        Search
      </button>

      {/* Display error message if an error occurs */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display the points of interest if available */}
      <div className="mt-8">
        {points.length > 0 && (
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="bg-purple-100 p-4 rounded-md border border-purple-300 shadow-sm"
              >
                {/* Display the name of the point of interest */}
                <h3 className="font-bold text-purple-700">
                  {point.name || "Unknown Name"}
                </h3>
                {/* Display the category of the point of interest */}
                <p className="text-gray-600">
                  Category: {point.category || "N/A"}
                </p>
                {/* Display the distance to the point of interest */}
                <p className="text-gray-600">
                  Distance:{" "}
                  {point.distance
                    ? `${point.distance.value} ${point.distance.unit}`
                    : "N/A"}
                </p>
                {/* Display the geographical coordinates */}
                <p className="text-gray-600">
                  Location:{" "}
                  {point.geoCode
                    ? `${point.geoCode.latitude}, ${point.geoCode.longitude}`
                    : "N/A"}
                </p>
                {/* Display the image of the point of interest if available */}
                {point.pictures && point.pictures.length > 0 ? (
                  <img
                    src={point.pictures[0]}
                    alt={point.name}
                    className="mt-4 rounded-md w-full h-48 object-cover"
                  />
                ) : (
                  <p className="text-gray-500">No image available</p> // Fallback if no image is available
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PointsOfInterest;
