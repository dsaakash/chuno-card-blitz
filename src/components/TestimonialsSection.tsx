
import React from 'react';

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, location, quote, avatar }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
    <p className="italic text-gray-700">"{quote}"</p>
    <div className="mt-4 flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      quote: "Chuno has become our family's favorite game night activity. The kids love the vibrant colors and we love how interactive it is!",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    {
      name: "Rahul Mehta",
      location: "Delhi",
      quote: "I've won three tournaments so far and the prizes are amazing! The community is super friendly and welcoming to new players.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Ananya Patel",
      location: "Bangalore",
      quote: "My college friends and I play Chuno every weekend. The private room feature is perfect for our virtual hangouts.",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">What Players Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of players already enjoying Chuno across India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Featured In</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="h-12 flex items-center">
              <div className="text-2xl font-bold">TechCrunch</div>
            </div>
            <div className="h-12 flex items-center">
              <div className="text-2xl font-bold">Forbes India</div>
            </div>
            <div className="h-12 flex items-center">
              <div className="text-2xl font-bold">YourStory</div>
            </div>
            <div className="h-12 flex items-center">
              <div className="text-2xl font-bold">Economic Times</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
