import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Activities from "./pages/Activities.jsx";
import Flights from "./pages/Flights.jsx";
import Footer from "./components/custom/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Flights",
    element: <Flights />,
  },
  {
    path: "/Activities",
    element: <Activities />,
  },
]);

createRoot(document.getElementById("root")).render(
  // Using createRoot directly
  <StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
