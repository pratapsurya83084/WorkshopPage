import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "@heroicons/react/24/solid";
const LimitedSeats = () => {
  return (
    <div>
      <section class="body-font">
        <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-xl sm:text-2xl mb-4 font-medium ">
              Ready to Skyrocket Your Buisness ? <br />
            </h1>
            {/* bg-custom-brown radius-yellow*/}
            <div className=" flex-col justify-center mb-5 space-y-4 items-center p- rounded-3xl ">
              <div className="sm:p-2 flex items-center space-x-2 mt-2">
                <div className="h-5 w-5 flex justify-center  mb- bg-green-500 rounded-full">
                  <CheckIcon className="h-4 w-4 font-bold text-white" />
                </div>
                <h1 className="sm:p-2 sm:text-xl font-bold ">
                  Enhance efficiency and productivity
                  <br />
                </h1>
              </div>

              <div className="sm:p-2 flex items-center space-x-2 mt-2">
                <div className="h-5 w-5 flex justify-center  mb- bg-green-500 rounded-full">
                  <CheckIcon className="h-4 w-4 font-bold text-white" />
                </div>
                <h1 className="pl-3 sm:p-2 sm:text-xl font-bold ">
                  Thrive in dynamic markets <br />
                </h1>
              </div>

              <div className=" sm:p-2 flex items-center space-x- mt-2">
                <div className="h-5 w-5  flex justify-center  mb- bg-green-500 rounded-full">
                  <CheckIcon className="h-5 w-6 font-bold text-white" />
                </div>
                <h1 className="pl-5 sm:mr-10 sm:text-xl overflow-hidden font-bold ">
                  Gain a competitive advantage
                </h1>
              </div>

              <div className=" sm:p-2 flex items-center space-x-2 mt-2">
                <div className="h-5 w-5  flex justify-center  mb- bg-green-500 rounded-full">
                  <CheckIcon className="h-5 w-6 font-bold text-white" />
                </div>
                <h1 className=" sm:text-xl overflow-hidden font-bold ">
                  Achieve strategic growth and profitability
                </h1>
              </div>
            </div>

            {/* Learn the Art of 1 Cr+ in the
              next months with strategic Networking. Supercharge your live
              training on the weekend! <br /> */}
            <span className="text-2xl font-bold  text-yellow-300">
              Limited seats - DONT MISS OUT !
            </span>
            {/* <br class="hidden lg:inline-block"/>readymade gluten  */}

            {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
            <a href="#razorpay/link">
              <div className="xl:ml-40 mt-5  flex justify-center md:mt- sm:mt-8 py- sm:px-2">
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
          <div class=" lg:max-w-lg   lg:w-full md:w-1/2 w-5/6">
            <img
              class="radius-yellow  object-cover object-center rounded-xl"
              alt="hero"
              src="/public\Limit_seats_img.png"
            />
          </div>
        </div>
      </section>
      {/* <hr /> */}
    </div>
  );
};

export default LimitedSeats;
