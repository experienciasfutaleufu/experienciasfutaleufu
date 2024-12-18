import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      quote:
        "The guided hike was an incredible experience! The guide was knowledgeable, and the views were breathtaking. Highly recommend!",
      location: "Colorado, USA",
      image: "/images/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      quote:
        "This was my first hike, and I felt so safe and supported. The guide's expertise made all the difference. I'll definitely be back!",
      location: "Vancouver, Canada",
      image: "/images/jane-smith.jpg",
    },
    {
      name: "Mike Johnson",
      quote:
        "I've been on many hikes, but this one stood out. The attention to detail and the stunning route were unforgettable.",
      location: "Sydney, Australia",
      image: "/images/mike-johnson.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="py-12 bg-gray-100 dark:bg-gray-900  bg-no-repeat bg-right-bottom bg-fixed md:bg-alpaca"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-64 h-64 mx-auto rounded-full border-4 border-blue-500"
          />
          <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mt-4">
            &ldquo;{testimonials[currentIndex].quote}&rdquo;
          </blockquote>
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials[currentIndex].location}
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors ${
                currentIndex === index
                  ? "bg-blue-500"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
