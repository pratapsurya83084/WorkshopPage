import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const RevenuPicture = () => {
  return (
    <section className="mt-10 body-font text-center">
      <div className="text-2xl font-bold p-2 mb-">
        <h4 className="">
          Discover Sales Real-Life Business Enthusiasts Who Transformed Straight
          from Those Who Attended My Coaching
        </h4>
        {/* <p className="text-xl mt-5">
            Empowering success with our revenue milestones
          </p> */}
        <div className="flex justify-center mb-4">
          <svg
            width="400"
            height="30"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="yellow"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
      </div>
      <div className="radius-yellow rounded-3xl bg-custom-brown container px-5 py-5 mx-auto">
        <div className="flex justify-center items-center  rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center  lg:h-[10%] lg:w-[60%] w-full "
            src="/public/revenue_picture.png"
          />
        </div>

        <h1 className="text-xl font-bold p-4 mt-4 md:text-2xl lg:text-3xl xl:text-3xl">
          Just look a view how much they closed the deal
        </h1>
        <br />

        <div className="text-2xl">
          <ul className="list-disc list-inside">
            <li className="mb-4 p-2 text-white rounded-xl shadow-lg">
              Action-Oriented 2 Days
            </li>
            <li className="mb-4 p-2 text-white rounded-xl shadow-lg">
              Networking Pro Secrets
            </li>
            <li className="mb-4 p-2 mr-5 text-white rounded-xl shadow-lg">
              Tailored Tactical Goals
            </li>
          </ul>
          {/* action button */}
          <a href="https://rzp.io/l/badecisionmc">
            <div className="flex justify-center md:mt-8 sm:mt-8 py-2 sm:px-2">
              <button className="bg-blue-600 text-white md:text-xl font-bold py-2 px-6 rounded-xl md:mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
                <span className="flex-grow text-center">
                  Action Now for ₹299
                </span>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="bg-white text-blue-500 px-4 p-2 rounded-lg"
                />
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RevenuPicture;
