import React from "react";

const DestinationCard = ({ city, description, imgSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 ">
      <img className="w-full h-48 object-cover" src={imgSrc} alt={city} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-black">{city}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition hover:opacity-90">
          See More
        </button>
      </div>
    </div>
  );
};

const Destination = () => {
  const destinations = [
    {
      city: "Tokyo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and...see more",
      imgSrc: "/Tokyo.png",
    },
    {
      city: "Rome",
      description:
        "Lorem Ipsum is simply dummy text of the printing and...see more",
      imgSrc: "/Roma.png",
    },
    {
      city: "Barcelona",
      description:
        "Lorem Ipsum is simply dummy text of the printing and...see more",
      imgSrc: "/Barcelona.png",
    },
  ];

  return (
    <section className="text-center ">
      <h2 className="text-purple-500 text-lg mb-2 ">Top Destination</h2>
      <h1 className="text-4xl font-bold mb-8">Explore Best Destination</h1>
      <div className=" ml-10 mr-10 flex justify-center space-x-8">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            city={destination.city}
            description={destination.description}
            imgSrc={destination.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Destination;
