import React, { useState, useEffect } from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-full text-center">
      <div className="relative inline-block">
        <img
          className="w-20 h-20 rounded-full border-4 border-white shadow-md mx-auto"
          src={review.imgSrc}
          alt={review.name}
        />
      </div>
      <p className="text-purple-600 mt-4 font-semibold">{review.title}</p>
      <p className="text-gray-700 mt-2 max-w-xl mx-auto">{review.text}</p>
      <p className="text-gray-500 mt-4">{review.name}</p>
      <p className="text-gray-400">{review.role}</p>
    </div>
  );
};

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000); // Slide every 6 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
      <div className="mt-8 overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
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
