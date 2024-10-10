import React from "react";
import { useState, useEffect } from "react";

function About() {
    const [background, setBG] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBG(true);
      } else {
        setBG(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2 max-w-l">
        <h1 className="text-3xl text-black font-bold text-center mb-6">
          About Us
        </h1>
        <div className="block text-sm font-medium text-black">
          <p>
            Welcome to{" "}
            <span
              className={`text-bold text-xl text-white-500 ${
                background
                  ? "text-bold text-xl text-red-500"
                  : ""}`}
            >
              BookStore
            </span>
            , your trusted destination for all things books! With over 15 years
            of dedicated service, we have established ourselves as a leading
            online bookstore, bringing readers an unparalleled selection of
            titles across every genre, from fiction and non-fiction to academic
            texts, children's literature, and rare finds. Our journey began with
            a passion for books and a commitment to delivering high-quality
            reads at affordable prices, and today, we are proud to be recognized
            as a top-tier seller in the online marketplace. At Book Haven, we
            believe in more than just selling books—we aim to cultivate a
            community of avid readers who can rely on us for a seamless,
            enjoyable shopping experience.
            <br />
            <br /> Thanks to our easy-to-navigate platform, prompt delivery
            services, and continuous customer support, we have garnered a strong
            reputation among our customers, with thousands of glowing reviews
            from satisfied readers around the world. Whether you're a casual
            reader or a literary aficionado, we are here to meet your needs with
            our extensive collection, ensuring that you find your next favorite
            book. Our market value continues to grow year after year as we
            remain dedicated to maintaining customer satisfaction and delivering
            excellence in every aspect of our service
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
