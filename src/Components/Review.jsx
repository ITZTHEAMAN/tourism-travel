import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Aman Singh",
    location: "Jaipur, Rajasthan",
    review: "The trip was a dream come true! Everything was so well organized, and I enjoyed every moment of it. Highly recommend their services.",
    image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5
  },
  {
    name: "Pooja Patel",
    location: "Ahmedabad, Gujarat",
    review: "Amazing experience! They handled everything from travel to accommodation, and it was a smooth experience throughout. Loved it!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHBodG90fGVufDB8fDB8fHww",
    rating: 4
  },
  {
    name: "Ravi Verma",
    location: "Bengaluru, Karnataka",
    review: "The best travel service I’ve experienced. The tour guides were knowledgeable, and the entire trip was hassle-free and enjoyable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    location: "Mumbai, Maharashtra",
    review: "The trip was well planned, and I had a fantastic time. The hotels, food, and travel arrangements were perfect. Looking forward to booking again.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=200&dpr=1&crop=entropy&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 5
  },
  {
    name: "Rahul Sharma",
    location: "Lucknow, Uttar Pradesh",
    review: "Fantastic travel company! Everything was smooth, from booking to the end of the trip. I enjoyed the sightseeing and the overall experience.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 4
  },
  {
    name: "Jay Rathore",
    location: "Aligarh, Uttar Pradesh",
    review: "Everthing is good for me , good expirence i will say just book from here.",
    image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 5
  }
];

const ReviewCard = ({ review }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <img
      src={review.image}
      alt={review.name}
      className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
    <p className="text-gray-600 mb-2">{review.location}</p>
    <div className="flex justify-center mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
    </div>
    <p className="text-gray-700">{review.review}</p>
  </div>
);

const CustomerReviews = () => {
  return (
    <div className="bg-[#FFFFFF] py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 mb-12">Real reviews from travelers across India</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
