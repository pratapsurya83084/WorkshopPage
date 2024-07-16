import React, { useEffect, useState, useRef } from "react";
// import { CheckIcon } from "@heroicons/react/24/solid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  // const [nextSaturday, setNextSaturday] = useState(null);
  // const sectionRef = useRef(null);
  // // Function to calculate the next Saturday date
  // const calculateNextSaturday = () => {
  //   const today = new Date();
  //   let nextSaturdayDate = new Date(today);

  //   // Calculate days until next Saturday (6 for Saturday)
  //   const daysUntilNextSaturday = (6 - today.getDay() + 7) % 7;
  //   nextSaturdayDate.setDate(today.getDate() + daysUntilNextSaturday);

  //   return nextSaturdayDate;
  // };

  // useEffect(() => {
  //   // Calculate next Saturday when component mounts
  //   const initialNextSaturday = calculateNextSaturday();
  //   setNextSaturday(initialNextSaturday);

  //   // Update next Saturday at midnight
  //   const updateNextSaturday = () => {
  //     const nextSaturdayDate = calculateNextSaturday();
  //     setNextSaturday(nextSaturdayDate);
  //   };

  //   // Calculate milliseconds until next Saturday midnight
  //   const today = new Date();
  //   const timeUntilNextSaturday =
  //     ((7 - today.getDay()) % 7) * 24 * 60 * 60 * 1000;

  //   // Set interval to update next Saturday every week
  //   const intervalId = setInterval(updateNextSaturday, timeUntilNextSaturday);

  //   // Clean up interval on component unmount
  //   return () => clearInterval(intervalId);

  // }, []);

  // if (!nextSaturday) {
  //   return <div>Loading...</div>; // Initial loading state
  // }

  // // Format nextSaturday date and day
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // const formattedDate = nextSaturday.toLocaleDateString("en-US", options);



  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll');
        } else {
          entry.target.classList.remove('animate-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = section.querySelectorAll('.smooth-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section  ref={sectionRef}
    >
      {/* flex-row */}
      <div className="mx-3 sm:mx-1 md:mx-12   md:mt-10 lg:flex flex-row justify-center items-center gap-5 ">
        {/* textleft-side */}
        <div className="lg:hidden flex flex-col text">
          <div className="smooth-scroll image-section">
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
                  src="\TRAINGS PAGE .png" // Make sure your image path is correct
                  alt="WorkshopImage"
                />
                <h1 className="animate-move-x-reverse font-bold absolute mt-32 left-58  bottom-20 sm:bottom-40 md:bottom-40 lg:bottom-36  xl:bottom-52 md:mt-60 md:left-[450px] lg:left-[150px] lg:mt-[270px] right-0 text-4xl sm:text-4xl md:text-5xl lg:text-5xl lg:font-bold text-black mb-4 mr-4 lg:text-right">
                  Adhikari
                </h1>
              </div>
            </div>
          </div>
          <div className="smooth-scroll text-center items-center  sm:text-xl font-semibold">
            <h2 className="smooth-scroll py-4 text-xl sm:text-2xl md:text-3xl  title-font tracking-widest  font-bold">
              IGNITE YOUR SALES LEADERSHIP PATH
            </h2>
            3 Hours Weekend Workshop with Me? Are you <br />
            ready to improve your next negotiation skill set?
          </div>
        </div>

        {/* img lg:flex show right side */}
        <div className="lg:flex hidden flex-row text">
          <div className="smooth-scroll text-center mt-56 md:text-left py-2 text-xl sm:text-2xl md:text-2xl font-semibold">
            <h2 className="py-3 text-center md:text-left title-font tracking-widest text-2xl font-bold">
              IGNITE YOUR SALES LEADERSHIP PATH
            </h2>
            3 Hours Weekend Workshop with Me? Are you <br />
            ready to improve your next negotiation skill set?
          </div>
          
          <div className="smooth-scroll image-section">
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
                  src="\TRAINGS PAGE .png" // Make sure your image path is correct
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
    </section>
  );
};

export default AboutSection;
