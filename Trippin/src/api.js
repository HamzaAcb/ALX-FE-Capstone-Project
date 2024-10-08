// src/api.js
import axios from "axios";

const AMADEUS_API_URL = "https://test.api.amadeus.com/v1/";

// Function to retrieve an access token from Amadeus API
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${AMADEUS_API_URL}security/oauth2/token`,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: import.meta.env.VITE_AMADEUS_API_KEY,
        client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw new Error("Failed to retrieve access token");
  }
};

export const fetchCityCoordinates = async (cityCode) => {
  const token = await getAccessToken(); // Get access token first
  try {
    const response = await axios.get(
      "https://test.api.amadeus.com/v1/reference-data/locations",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          keyword: cityCode, // The city code to search
          subType: "CITY", // Ensure we only get city data
        },
      }
    );

    // Check if data exists
    if (response.data && response.data.data.length > 0) {
      const cityData = response.data.data[0]; // Take the first city result
      const { latitude, longitude } = cityData.geoCode; // Extract latitude and longitude from the geoCode object

      console.log("City Data:", cityData); // Log the city data to verify

      return { latitude, longitude }; // Return the coordinates
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    console.error(
      "Error fetching city coordinates:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch city coordinates");
  }
};

// Function to fetch available flight offers
export const fetchFlightOffers = async (origin, destination, departureDate) => {
  const token = await getAccessToken(); // Get access token first
  try {
    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: { Authorization: `Bearer ${token}` }, // Pass the token in the Authorization header
        params: {
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate,
          adults: 1, // For simplicity, assume one adult passenger
        },
      }
    );
    return response.data.data; // Return the flight offers
  } catch (error) {
    console.error(
      "Error fetching flight offers:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch flight offers");
  }
};

// Function to fetch available Points of interest
export const fetchPointsOfInterest = async (latitude, longitude, radius) => {
  const token = await getAccessToken(); // Get access token first
  try {
    const response = await axios.get(
      "https://test.api.amadeus.com/v1/shopping/activities",
      {
        headers: { Authorization: `Bearer ${token}` }, // Pass the token in the Authorization header
        params: {
          latitude,
          longitude,
          radius,
        },
      }
    );
    return response.data.data; // Return POIs
  } catch (error) {
    console.error(
      "Error fetching points of interest:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch points of interest");
  }
};
