import React, { useEffect,useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

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
    const timeUntilNextSaturday = (7 - today.getDay()) % 7 * 24 * 60 * 60 * 1000;
    
    // Set interval to update next Saturday every week
    const intervalId = setInterval(updateNextSaturday, timeUntilNextSaturday);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!nextSaturday) {
    return <div>Loading...</div>; // Initial loading state
  }

  // Format nextSaturday date and day
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = nextSaturday.toLocaleDateString('en-US', options);

  return (
    <div>
      <h1 className="bg-custom-brown   text-center p-6 text-2xl font-bold ">
        A Workshop Designed For Student Entrepreneurs{" "}
        <b className="text-yellow-300">Seeking to achieved 1 Cr+</b> Sales in next 6
        months{" "}
      </h1>

      <h2 className="text-center md:text-xl p-6">
        {" "}
        Unlock the exclusive AI-driven framework empowered by 100+ Networking
        powerhouse strategies to earn <b className="text-yellow-300 ">
          1 Cr+
        </b>{" "}
        in the next <b className="text-yellow-300">6 months</b> with
        personalised leadership assesment toolkit
      </h2>
      <section
        // from-blue-50
        className=" pb-12 pt-4 sm:pb-16 sm:pt-12 lg:pb-24 xl:pb-32 xl:pt-10"
      >
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto  max-w-lg">
            <img
              className="w-full radius-yellow rounded-2xl border border-gray-100 shadow"
              src="\BishopsirAbout_section_workshop_image.png"
              alt=""
            />
          </div>{" "}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="p-2 title-font tracking-widest text-xl font-bold ">
              IGNITE YOUR LEADERSHIP PATH
            </h2>
            <h1 className="p-4">
              2-DAY LIVE WEEKEND WORKSHOP With <b>Mr.Bishop Adhikari </b> <br />
            </h1>
            {/* add point */}
            <div className="bg-custom-brown flex-col justify-center items-center p-4 rounded-3xl radius-yellow">
            <div className="sm:p-2 flex  items-center  space-x-2 mt-2">
              <div className="h-5 w-5 flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 font-bold text-white" />
              </div>
              <h1 className="sm:p-2 sm:text-xl ">
                Entreprenour Coach and social change advocate <br />
              </h1>
            </div>

            <div className="sm:p-2 flex items-center space-x-2 mt-2">
              <div className="h-5 w-5 flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 font-bold text-white" />
              </div>
              <h1 className="sm:p-2 sm:text-xl">
                Discover what awaits you Unlocks 2 Days of Live <br />
              </h1>
            </div>



            <div className=" sm:p-2 flex items-center space-x-2 mt-2">
              <div className="h-5 w-5 mb-5 flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-5 w-6 font-bold text-white" />
              </div>
              <h1 className=" sm:text-xl overflow-hidden">
              training Enpower Your Manangement,Entrepreneurship 
              ,Leadership and Social Impact Skills Workshop
              </h1>
            </div>

        
            </div>


             <h1 className="text-red-500 mt-4 font-bold text-xl"> Starts on 
           
            <span className="px-2">  
            {formattedDate}
            {/* {nextSaturday.toLocaleDateString('en-US', { weekday: 'long' })} */}
              </span>    {/* & 08/10/2023 */}
                | 7 AM - 9 PM</h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#razorpay">
            <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                <div className="flex">
                  <button className="bg-blue-500 text-white px-4  rounded-xl py-2    hover:text-gray-300 hover:bg-blue-600 focus:border">
                    REGISTER NOW @{" "}
                    <span className="line-through text-black">Rs.2,999/</span>{" "}
                    Rs.299/{" "}
                  </button>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* hh */}

     
    </div>
  );
};

export default AboutSection;
