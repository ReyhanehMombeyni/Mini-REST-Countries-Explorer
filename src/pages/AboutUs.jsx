import React from "react";

const AboutUs = () => {
  return (
    <div className="p-25">
      <h1 className="text-center text-5xl font-bold">About This Website</h1>
      <div className="text-gray-700 pt-10 text-2xl flex flex-col gap-5">
        <p>
          This website uses the <span className="text-blue-700 font-medium">REST Countries API</span> to display comprehensive
          information about countries from around the world.
        </p>
        <p>
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p>
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
