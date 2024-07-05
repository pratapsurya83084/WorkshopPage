import React, { useState, useRef, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const WorkshopAttens = () => {
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



  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1,
  //   };

  //   const observerCallback = (entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate-scroll');
  //       } else {
  //         entry.target.classList.remove('animate-scroll');
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(observerCallback, observerOptions);
  //   const elements = section.querySelectorAll('.smooth-scroll');
  //   elements.forEach(el => observer.observe(el));

  //   return () => {
  //     elements.forEach(el => observer.unobserve(el));
  //   };
  // }, []);



  return (
    <section 
    // ref={sectionRef}

    className="mt-10 mx-4 sm:mx-14 lg:mx-20 xl:mx-36">
      {/* why Attend this workshop */}
      <h1 className="  text-xl md:text-2xl lg:text-3xl text-center font-bold mt-2">
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
      <div className="bg-custom-brown flex-col justify-center space-y-4 items-center p-4 rounded-3xl radius-yellow">
        <div className="sm:p-2 flex  items-center  space-x-2 mt-2">
          <div className="  h-5 w-5 flex justify-center mb- bg-green-500 mx-1 sm:mx-2 rounded-full">
            <CheckIcon className="  h-5 w-6 font-bold text-white" />
          </div>
          {/* 1st point */}
          <h1 className="sm:p-2  sm:text-xl font-bold ">
            Why is enhancing your profit margins with impactful negotiation
            strategies required? <br />
          </h1>
        </div>

        <div className="sm:p-2 flex items-center space-x-2 mt-2">
          <div className="  h-5 w-5 flex justify-center  mb- bg-green-500 mx-1 sm:mx-2 rounded-full">
            <CheckIcon className="  h-5 w-6 font-bold text-white" />
          </div>
          {/* 2st point */}
          <h1 className="sm:p-2 sm:text-xl font-bold ">
            Why do people compromise their quality or efficiency, and learn how
            to improve? <br />
          </h1>
        </div>

        <div className=" sm:p-2 flex items-center space-x- mt-2">
          <div className="  h-5 w-5  flex justify-center  mb- bg-green-500 mx-1 sm:mx-2 rounded-full">
            <CheckIcon className="  h-5 w-6 font-bold text-white" />
          </div>
          {/* 3rd point */}
          <h1 className="sm:ml-4 pl-2 sm:pl-0 sm:text-xl overflow-hidden font-bold ">
            Tackle how common sales and negotiation challenges stop your
            business.
          </h1>
        </div>

        <div className=" sm:p-2 flex items-center space-x-2 mt-2">
          <div className="  h-5 w-5  flex justify-center  mb- bg-green-500 mx-1 sm:mx-2 rounded-full">
            <CheckIcon className="  h-5 w-6 font-bold text-white" />
          </div>
          {/* 4th point */}
          <h1 className=" sm:text-xl overflow-hidden font-bold ">
            Unlock your guaranteed outcomes with the workshop's actionable sales
            and negotiation steps.
          </h1>
        </div>
      </div>

      <h1 className="text-center p-3 text-red-500 mt-8 font-bold text-xl md:text-2xl">
        {" "}
        Starts on
        <span className="text-center px-2">
          {formattedDate}
          {/* {nextSaturday.toLocaleDateString('en-US', { weekday: 'long' })} */}
        </span>{" "}
        {/* & 08/10/2023 */}| 7 AM - 9 PM
      </h1>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <div className="flex mt- items-center pb-5  border-gray-100 mb-5">
          <div className="flex justify-center md:mt- sm:mt-8 py-2 sm:px-2">
            <a href="https://pages.razorpay.com/workshopwithbishop">
              <button className="bg-blue-600 text-white md:text-xl font-bold py-2 px-6 rounded-xl md:mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
                <span className="flex-grow text-center">
                  Action Now for ₹199
                </span>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="bg-white text-blue-500 px-4 p-2 rounded-lg"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopAttens;
