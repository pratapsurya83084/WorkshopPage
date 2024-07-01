import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const AboutSection = () => {
  const [nextSaturday, setNextSaturday] = useState(null);

  // Function to calculate the next Saturday date
  const calculateNextSaturday = () => {
    const today = new Date();
    let nextSaturdayDate = new Date(today);

    // Calculate days until next Saturday (6 for Saturday)
    const daysUntilNextSaturday = (6 - today.getDay() + 7) % 7;
    nextSaturdayDate.setDate(today.getDate() + daysUntilNextSaturday);

    return nextSaturdayDate;
  };

  useEffect(() => {
    // Calculate next Saturday when component mounts
    const initialNextSaturday = calculateNextSaturday();
    setNextSaturday(initialNextSaturday);

    // Update next Saturday at midnight
    const updateNextSaturday = () => {
      const nextSaturdayDate = calculateNextSaturday();
      setNextSaturday(nextSaturdayDate);
    };

    // Calculate milliseconds until next Saturday midnight
    const today = new Date();
    const timeUntilNextSaturday =
      ((7 - today.getDay()) % 7) * 24 * 60 * 60 * 1000;

    // Set interval to update next Saturday every week
    const intervalId = setInterval(updateNextSaturday, timeUntilNextSaturday);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!nextSaturday) {
    return <div>Loading...</div>; // Initial loading state
  }

  // Format nextSaturday date and day
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = nextSaturday.toLocaleDateString("en-US", options);

  return (
    <div>
      <h1 className="bg-custom-brown   text-center p-6 text-xl sm:text-3xl font-bold ">
        Transform Your Sales & Negotiation Skills in{" "}
        <b className="text-yellow-200 font-bold">3 Hours</b> Essential for
        Companies, Professionals, and Students!
      </h1>

      <h2 className="text-center text-xl sm:text-2xl p-6 font-bold">
        {" "}
        A workshop to gain 200+ deep insights and actionable strategies to
        elevate your sales and negotiation skills and drive your business to{" "}
        <b className="text-yellow-200 font-bold "> 1 Cr+ </b>new heights in the
        <b className="text-yellow-200 px-2">next 6 months</b>
      </h2>

      {/* flex-row */}
      <div className="mx-3 sm:mx-1 md:mx-12   md:mt-10 lg:flex flex-row justify-center items-center gap-5 ">
        {/* textleft-side */}
        <div className="lg:hidden flex flex-col text">
        <div className=" image-section">
        <div className=" lg:w-auto xl:ml-10 sm:p-4  lg:mb-0">
          {/* overflow-hidden */}
          <div className="workshop-left-section lg:h-[460px] lg:w-[500px]  relative">
            {/* md:right-96 */}
            <h1 className="text-black animate-move-x-reverse sm:ml-5 text-4xl sm:text-5xl absolute right-40  left-4 p- sm:left-24 sm:right-96    xl:right-[290px] md:text-6xl md:ml-2 lg:right-60 lg:left-8 lg:text-6xl lg:ml-2 font-bold">
              Bishop
            </h1>
            <img
              // md:ml-[200px] h-[500px],object-cover
              className="radius-yellow  h-[300px] sm:mx-auto  sm:h-[500px] md:h-[460px]  xl:h-[400px] lg:w-[500px]    p-  w-full  rounded-3xl"
              src="/MY PICTURE AT FIRST.png" // Make sure your image path is correct
              alt="WorkshopImage"
            />
            <h1 className="animate-move-x-reverse font-bold absolute mt-32 left-58  bottom-20 sm:bottom-40 md:bottom-40 lg:bottom-36  xl:bottom-52 md:mt-60 md:left-[450px] lg:left-[150px] lg:mt-[270px] right-0 text-4xl sm:text-4xl md:text-5xl lg:text-5xl lg:font-bold text-black mb-4 mr-4 lg:text-right">
              Adhikari
            </h1>
          </div>
        </div>
        </div>
        <h1 className="text-center items-center  sm:text-xl font-semibold">
        <h2 className="  title-font tracking-widest text-2xl font-bold">
            IGNITE YOUR SALES LEADERSHIP PATH
          </h2>
            3 Hours Weekend Workshop with Me? Are you <br />
            ready to improve your next negotiation skill set?
          </h1>
        </div>

        {/* img right side */}
        <div className="lg:flex hidden flex-row text">
        
        <h1 className="text-center mt-56 md:text-left py-2 sm:text-xl font-semibold">
        <h2 className="text-center md:text-left title-font tracking-widest text-2xl font-bold">
            IGNITE YOUR SALES LEADERSHIP PATH
          </h2>
            3 Hours Weekend Workshop with Me? Are you <br />
            ready to improve your next negotiation skill set?
          </h1>
          <div className=" image-section">
        <div className=" lg:w-auto xl:ml-10 sm:p-4  lg:mb-0">
          {/* overflow-hidden */}
          <div className="workshop-left-section lg:h-[460px] lg:w-[500px]  relative">
            {/* md:right-96 */}
            <h1 className="text-black animate-move-x-reverse sm:ml-5 text-4xl sm:text-5xl absolute right-40  left-4 p- sm:left-24 sm:right-96    xl:right-[290px] md:text-6xl md:ml-2 lg:right-60 lg:left-8 lg:text-6xl lg:ml-2 font-bold">
              Bishop
            </h1>
            <img
              // md:ml-[200px] h-[500px],object-cover
              className="radius-yellow  h-[300px] sm:mx-auto  sm:h-[500px] md:h-[460px]  xl:h-[400px] lg:w-[500px]    p-  w-full  rounded-3xl"
              src="/MY PICTURE AT FIRST.png" // Make sure your image path is correct
              alt="WorkshopImage"
            />
            <h1 className="animate-move-x-reverse font-bold absolute mt-32 left-58  bottom-20 sm:bottom-40 md:bottom-40 lg:bottom-36  xl:bottom-52 md:mt-60 md:left-[450px] lg:left-[150px] lg:mt-[270px] right-0 text-4xl sm:text-4xl md:text-5xl lg:text-5xl lg:font-bold text-black mb-4 mr-4 lg:text-right">
              Adhikari
            </h1>
          </div>
        </div>
        </div>
        </div>
        
        
       
      </div> 











      <section className=" pb-12 pt- sm:pb-16 sm:pt-12 lg:pb-24 xl:pb-32 xl:pt-10">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* add point */}
            <h1 className="text-2xl font-bold mt-2">
              Why Attend This Workshop?
            </h1>
            <div className="flex justify-center mb-4">
              <svg
                width="200"
                height="20"
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
            {/* why Attend this workshop */}
            <div className="bg-custom-brown flex-col justify-center space-y-4 items-center p-4 rounded-3xl radius-yellow">
              <div className="sm:p-2 flex  items-center  space-x-2 mt-2">
                <div className="h-5 w-6 flex justify-center mb-5 bg-green-500 rounded-full">
                  <CheckIcon className="h-4 w-4 font-bold text-white" />
                </div>
                {/* 1st point */}
                <h1 className="sm:p-2  sm:text-xl font-bold ">  
                  Why is enhancing your profit margins with impactful
                  negotiation strategies required? <br />
                </h1>
              </div>

              <div className="sm:p-2 flex items-center space-x-2 mt-2">
                <div className="h-5 w-7 flex justify-center  mb-5 bg-green-500 rounded-full">
                  <CheckIcon className="h-4 w-4 font-bold text-white" />
                </div>
                {/* 2st point */}
                <h1 className="sm:p-2 sm:text-xl font-bold ">
                  Why do people compromise their quality or efficiency, and
                  learn how to improve? <br />
                </h1>
              </div>

              <div className=" sm:p-2 flex items-center space-x- mt-2">
                <div className="h-5 w-5  flex justify-center  mb-5 bg-green-500 rounded-full">
                  <CheckIcon className="h-5 w-6 font-bold text-white" />
                </div>
                {/* 3rd point */}
                <h1 className="sm:ml-4 sm:text-xl overflow-hidden font-bold ">
                Tackle how common sales and negotiation challenges stop your
                business.
                </h1>
              </div>

              <div className=" sm:p-2 flex items-center space-x-2 mt-2">
                <div className="h-5 w-5  flex justify-center  mb-5 bg-green-500 rounded-full">
                  <CheckIcon className="h-5 w-6 font-bold text-white" />
                </div>
                {/* 4th point */}
                <h1 className=" sm:text-xl overflow-hidden font-bold ">
                  Unlock your guaranteed outcomes with the workshop's actionable
                  sales and negotiation steps.
                </h1>
              </div>
            </div>

            <h1 className="text-red-500 mt-8 font-bold text-xl md:text-2xl">
              {" "}
              Starts on
              <span className="px-2">
                {formattedDate}
                {/* {nextSaturday.toLocaleDateString('en-US', { weekday: 'long' })} */}
              </span>{" "}
              {/* & 08/10/2023 */}| 7 AM - 9 PM
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://rzp.io/l/badecisionmc">
                <div className="flex mt- items-center pb-5  border-gray-100 mb-5">
                  <div className="flex justify-center md:mt- sm:mt-8 py-2 sm:px-2">
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
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};




export default AboutSection;









