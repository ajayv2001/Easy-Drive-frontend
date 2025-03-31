import React from "react";
import { Link } from "react-router"; // Correct import
import SpotlightCard from "../ui/card/SpotLightCard";
import BlurText from "../ui/BlurText/BlurText";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from "react-router";
import blackcar from '../../assets/blackcar.avif'
import creditcard from '../../assets/credit-card.png'
import insurance from '../../assets/insurance.png'
import insurancetwo from '../../assets/insu2.png'
import zero from '../../assets/zero.png'
import road from '../../assets/road.png'




const reviews = [
  {
    "name": "Albert Flores",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "review": "Easy Drive is the best car rental service! The booking process was seamless.",
    "role": "Happy Client"
  },
  {
    "name": "Emily Johnson",
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "review": "Great experience! The staff was super helpful, and I found the perfect car for my trip.",
    "role": "Satisfied Customer"
  },
  {
    "name": "Michael Smith",
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "review": "Affordable prices and excellent customer support. I highly recommend Easy Drive!",
    "role": "Loyal Customer"
  },
  {
    "name": "Sophia Williams",
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "review": "The process was super smooth, and the car was spotless! I'll definitely use Easy Drive again.",
    "role": "Frequent Traveler"
  },
  {
    "name": "Daniel Brown",
    "image": "https://randomuser.me/api/portraits/men/5.jpg",
    "review": "I was impressed with the variety of cars available. Everything was well-maintained!",
    "role": "Business Traveler"
  },
  {
    "name": "Olivia Martinez",
    "image": "https://randomuser.me/api/portraits/women/6.jpg",
    "review": "Highly professional service with no hidden fees. I felt confident renting from them.",
    "role": "Trustworthy Client"
  },
  {
    "name": "William Anderson",
    "image": "https://randomuser.me/api/portraits/men/7.jpg",
    "review": "Booking was quick, and the car was perfect for my road trip. Definitely my go-to rental service!",
    "role": "Adventure Seeker"
  },
  {
    "name": "Ava Thompson",
    "image": "https://randomuser.me/api/portraits/women/8.jpg",
    "review": "Loved the easy pickup and return process. The car was fuel-efficient and clean!",
    "role": "Eco-Friendly Traveler"
  }
];

const subscriptionFeatures = [
  {
    icon: creditcard,
    title: "No Downpayment",
  },
  {
    icon: insurance,
    title: "Free Insurance",
  },
  {
    icon: insurancetwo,
    title: "Safe Choice Authorized Rental",
  
  },
  {
    icon: zero,
    title: "Zero hidden charges",

  },
  {
    icon: road,
    title: "Anytime Flexible Options",
    
  },
];

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <img
          src={blackcar}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute  inset-x-0 bottom-0 flex flex-col  items-center justify-center text-center bg-gradient-to-t from-black via-transparent to-transparent px-12 pb-5 ">
          <BlurText
            text="EASY DRIVE"
            delay={150}
            animateBy="words"
            direction="top"
            className=" md:text-8xl font-bold mb-8 !text-white !text-7xl"
          />
          <BlurText
            text="Your Best Car Rental Service"
            delay={150}
            animateBy="words"
            direction="top"
            className=" md:text-8xl font-light  mb-8 !text-white !text-3xl"
          />

          <div className="mt-6 flex space-x-4">
            <Link
              to="/signin"
              className="bg-[#cee124] hover:bg-[#848a49] text-black px-6 py-3 rounded-lg text-lg transition"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-lg transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="px-12">
        {/* Features Section */}
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mx-auto mt-10">
        <SpotlightCard spotlightColor="rgba(255, 165, 0, 0.2)">
          <div className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">Wide Range of Cars</h2>
            <p className="!text-white">Choose from a variety of cars to suit every need and budget, from compact to luxury vehicles.</p>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.2)">
          <div className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">Affordable Prices</h2>
            <p className="!text-white" >Get the best deals with transparent pricing. No hidden charges, just great value.</p>
          </div>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(255, 99, 132, 0.2)">
          <div className="p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">24/7 Customer Support</h2>
            <p className="!text-white" >Our support team is available around the clock to assist you with any issues or questions.</p>
          </div>
        </SpotlightCard>
      </div>

      {/* Subscription Section */}
      <div className="w-full bg-black py-16">
        <div className=" mx-auto px-4">
          <h2 className="!text-5xl !md:text-5xl !font-bold !text-center !mb-4">Know more about our subscriptions</h2>
          <p className="!text-lg !text-center !text-gray-300 !max-w-4xl !mx-auto !mb-12">
            Discover the convenience and benefits of car subscription with Easy Drive. Our customer-friendly system ensures a seamless experience for your favorite pick. Enjoy zero down payment, free insurance, and complimentary maintenance and service. With the freedom to return or extend your subscription anytime, Easy Drive guarantees your happiness on the road. Choose Easy Drive and experience the joy of hassle-free car subscription today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {subscriptionFeatures.map((feature, index) => (
              <div key={index} className="border border-gray-800  rounded-lg p-8 flex flex-col items-center text-center hover:border-gray-600 transition-all">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 border border-gray-700">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-light text-">{feature.title}</h3>
                {feature.subtitle && <p className="text-gray-400">{feature.subtitle}</p>}
              </div>
            ))}
          </div>
          
          <div onClick={() => navigate("/login")} className="flex justify-center">
            <div className="bg-[#c6d631] text-black rounded-lg p-8 flex items-center justify-between w-full max-w-2xl relative overflow-hidden">
              <div>
                <h3 className="text-2xl font-bold mb-2">Subscribe a car now</h3>
                <p className="text-black text-opacity-80">Get started with our flexible car subscription</p>
              </div>
              <div className="bg-white rounded-full p-2 z-1 ">
                <svg xmlns="\src\assets\benz.jpg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-black py-12">
      <div className=" mx-auto px-4">
        <h1 className="!text-5xl text-center mb-10 !text-white font-bold">What Our Clients Say</h1>
        
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <SpotlightCard spotlightColor="rgba(255, 99, 132, 0.2)">
                <div className="p-6 flex flex-col items-center text-center">
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mb-4" />
                  <p className="text-lg italic !text-white">"{review.review}"</p>
                  <h2 className="mt-4 text-xl font-semibold">{review.name}</h2>
                  <span className="text-gray-400 text-sm">{review.role}</span>
                </div>
              </SpotlightCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      <footer className="w-full bg-black border-t border-gray-800 pt-12 pb-6 px-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">EASY DRIVE</h3>
          <p className="!text-white mb-4 ">Your trusted partner for premium car rentals and subscriptions. Making every journey memorable since 2020.</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-[#cee124] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#cee124] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#cee124] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#cee124] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">About Us</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Car Fleet</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Subscription Plans</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Locations</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Help Center</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:text-[#cee124] transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="!text-white mb-4">Subscribe to get special offers and updates on new vehicles.</p>
          <div className="!flex !justify-center !align-middle gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 text-white px-4 py-2  rounded-l-lg outline-none w-full"
            />
            <button className="!bg-[#c6d631] hover:bg-[#d9ddba] !w-12 text-black !px-1 !py-1 rounded-r-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 !w-7 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-sm mb-4 md:mb-0">© 2025 Easy Drive. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-[#f6faca] text-sm transition-colors">Terms & Conditions</a>
          <a href="#" className="text-gray-400 hover:text-[#edf1c9] text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-[#edf2c1] text-sm transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
      </div>



      
    </div>
  );
};

export default MainPage;