import React, { useState, useEffect } from "react";

// Component for displaying individual review cards
const ReviewCard = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-full text-center">
      <div className="relative inline-block">
        {/* Display the reviewer's image */}
        <img
          className="w-20 h-20 rounded-full border-4 border-white shadow-md mx-auto"
          src={review.imgSrc}
          alt={review.name}
        />
      </div>
      {/* Display the review title */}
      <p className="text-purple-600 mt-4 font-semibold">{review.title}</p>
      {/* Display the main review text */}
      <p className="text-gray-700 mt-2 max-w-xl mx-auto">{review.text}</p>
      {/* Display the reviewer's name */}
      <p className="text-gray-500 mt-4">{review.name}</p>
      {/* Display the reviewer's role */}
      <p className="text-gray-400">{review.role}</p>
    </div>
  );
};

// Main component for displaying customer reviews
const CustomerReviews = () => {
  // State to manage the current index of the review being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of reviews to be displayed
  const reviews = [
    {
      imgSrc: "/customer1.png",
      title: "Highly Recommended!",
      text: "From start to finish, they exceeded my expectations and made my trip unforgettable. Their attention to detail, knowledgeable guides, and seamless logistics made every moment enjoyable.",
      name: "John Smith",
      role: "Traveler",
    },
    {
      imgSrc: "/customer1.png",
      title: "Loved It!",
      text: "The trip was well organized, and everything went smoothly. I'd definitely recommend them for your travel needs!",
      name: "Jane Doe",
      role: "Adventurer",
    },
    {
      imgSrc: "/customer1.png",
      title: "Fantastic Experience!",
      text: "I had the time of my life. Great service, wonderful guides, and amazing adventures.",
      name: "Paul Adams",
      role: "Explorer",
    },
  ];

  // useEffect hook to automatically transition between reviews every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000); // Slide every 6 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, [reviews.length]);

  return (
    <section className="py-12 text-center">
      {/* Section heading */}
      <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
      <div className="mt-8 overflow-hidden relative">
        {/* Container for sliding review cards */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move reviews based on the current index
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} /> // Render individual review cards
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {/* Navigation dots to indicate the active review */}
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition ${
              currentIndex === index ? "bg-purple-500" : "bg-purple-200"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
