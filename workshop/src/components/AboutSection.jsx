import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className=" body-font overflow-hidden">
        <h1 className="bg-custom-brown text-center p-6 text-2xl font-bold ">A Workshop Designed For Student Entrepreneurs   <b className="text-yellow-300">Seeking to earn 1 Cr+</b> in next 6 months </h1>
         <div className=" py-7 flex-wrap text-sm  md:text-xl p-4 text-center font-bold">
            <h2>Unlock the exclusive AI-driven framework empowered 
                by 100+ Networking powerhouse strategies to earn  <b className="text-yellow-300 ">1 Cr+</b>  in the next <b className="text-yellow-300">6 months</b> with personalised leadership
                assesment toolkit
            </h2>
         </div>
        <div className="container px-5 py-10  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className=" sm:h-[400px] md:h-[400px] lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl"
              src="/public\BishopsirAbout_section_workshop_image.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className=" title-font tracking-widest text-xl font-bold ">
                {/* space bet charactor  */}
                IGNITE YOUR LEADERSHIP PATH
              </h2>
              <h1 className=" text-3xl title-font font-medium mb-1"></h1>
              <div className="flex mb-4">
                <span className="font-bold  ml-">
                  2-DAY LIVE WEEKEND WORKSHOP{" "}
                </span>
              </div>
              <p className="leading-relaxed">
                With  <b>Mr.Bishop Adhikari Entreprenour</b>  ,Coach and social change
                advocate Discover what awaits you Unlocks 2 Days of Live
                training Enpower Your Manangement ,Entrepreneurship, Leadership
                and Social Impact Skills Workshop Starts on Saturday 07/10/2023
                & 08/10/2023 | 10 AM-2 PM
              </p>
               <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                 <div className="flex">
                    <button className="bg-blue-500 text-white px-4  rounded-xl py-2    hover:text-gray-300 hover:bg-blue-600 focus:border">REGISTER NOW @ <span className="line-through text-black">Rs.1,999/</span> Rs.199/ </button>                 
                </div> 
               
              </div>
              <div className="flex">
                <span className="title-font font-medium text-xl text-white">
               Eliminates fear o failure and embrace personalized 
               leadership insights in exclusive
               1-on-1 sessions
                </span>
                {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button> */}
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default AboutSection;
