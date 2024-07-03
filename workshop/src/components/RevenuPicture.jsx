import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "@heroicons/react/24/solid";
const RevenuPicture = () => {
  const points = [
    "Action-Oriented 3 Hours",
    "Networking Pro Secrets",
    "Tailored Negotiation Tactical Goals"
  ];
  return (
    <section className="mt-10 body-font text-center">
      <div className="text-2xl font-bold p-2 mb-">
        <h4 className="">
          Discover Sales Real-Life Business Enthusiasts Who Transformed Straight
        <br />  from Those Who Attended My Coaching
        </h4>
        {/* <p className="text-xl mt-5">
            Empowering success with our revenue milestones
          </p> */}
         <div className="text-2xl">
      <div className="flex justify-center">
        <ol className="list-decimal list-inside text-left space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-center text-yellow-200 rounded-xl px-4 py-2">
              {/* <div className="h-5 w-5 flex justify-center items-center mb-0 bg-green-500 rounded-full mr-3">
                <CheckIcon className="h-4 w-4 font-bold text-white" />
              </div> */}
              {/* <span>{point}</span> */}
            </li>
          ))}
        </ol>
      </div>
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
      <div className="flex justify-center">
        <ol className="list-decimal list-inside text-left space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-center text-yellow-200 rounded-xl px-4 py-2">
              <div className="h-5 w-6 flex justify-center items-center mb-0 bg-yellow-200 rounded-full mr-3">
                <CheckIcon className="h-4 w-4 font-bold text-black" />
              </div>
              <span>{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
          {/* <ul className="list-disc text-center list-inside">
  <li className="text-yellow-200 rounded-xl ml-5">
    Action-Oriented 3 Hours
  </li>
  <li className="text-yellow-200 rounded-xl ml-5">
    Networking Pro Secrets
  </li>
  <li className="text-yellow-200 rounded-xl ml-5">
    Tailored Negotiation Tactical Goals
  </li>
</ul> */}

          {/* action button */}
          <a href="https://rzp.io/l/badecisionmc">
            <div className="flex justify-center md:mt-8 sm:mt-8 py-2 sm:px-2">
              <button className="bg-blue-600 text-white md:text-xl font-bold py-2 px-6 rounded-xl md:mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
                <span className="flex-grow text-center">
                  Action Now for ₹199
                </span>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="bg-white text-blue-500 px-4 p-2 rounded-lg"
                />
              </button>
            </div>
          </a>
        </div>
      {/* </div> */}
    </section>
  );
};

export default RevenuPicture;
