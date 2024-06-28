import React from 'react'
import { CheckIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const SeminarSection = () => {
  return (
    <section className="mt-10  radius-yellow bg-custom-brown flex flex-col justify-center rounded-3xl items-center">
    {/* section 20 */}
    <h1 className="mt-5 p-4  flex justify-center text-center text-2xl py-6 font-bold ">Who Will Benefit Most from This Seminar?</h1>
    <div className="flex justify-center mb-4">
    <svg width="300" height="30" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15 Q 50 0, 95 15" stroke="yellow" strokeWidth="5" fill="none" />
    </svg>
  </div>
    {/* flex large screen */}
    <div className="mt-8 lg:flex mx-5 ">
      {/* leftside text for large screen */}
      <div className="p-4">
        <h1 className="text-center font-bold text-2xl md:text-3xl">Who can join?</h1>
      <div className=" radius-yellow rounded-xl px-2 bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
        <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
      </div>
      <p className="p-3 md:p-3">
      <b>Individuals with Startup Ventures or Established Businesses  
      or Sales professionals  and management students : </b> Perfect     
        for those seeking to improve their sales and 
      negotiation skills 
       for business growth
      </p>
    </div>
    <div className="radius-yellow rounded-xl px-2 bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
        <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
      </div>
      <p className="p-3 md:p-3">
      <b>Owners of Small Enterprises : </b> Ideal for
       small business owners  
        aiming to make informed
        decisions that lead to 
      increased 
      profitability and scalability
      </p>
    </div>
    <div className="radius-yellow rounded-xl px-2 bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
        <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
      </div>
      <p className="p-3 md:p-3">
      <b>Executives, Managers, and Professionals in Corporate Settings : </b>
       Great for those looking to enhance their leadership and 
        decision-making 
      skills to drive their teams and businesses forward

      </p>
    </div>
    {/* <div className="radius-yellow rounded-xl px-2 bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
        <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
      </div>
      <p className="p-3 md:p-3">
      Entrepreneurs seeking advice on cost-effective marketing strategies to boost revenue
      </p>
    </div> */}
      </div>

      {/* right side text for large screen */}
      <div className="p-4">
        <h1 className="text-center font-bold text-2xl md:text-3xl">Who can't Join?</h1>
      <div className=" radius-yellow px-2 rounded-xl bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
      <div className=" h-6 w-6 flex justify-center">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8   rounded-full dark:bg-red-800 ">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
    </svg>
    <span className="sr-only">Error icon</span>
</div>
      </div>
      </div>
      <p className="p-3 md:p-3 ">
     <b>Those Resistant to Adopting New Strategies : </b>If you're not open to learning new methods, this workshop isn't for you
      </p>
    </div>
    <div className=" radius-yellow px-2 rounded-xl bg-gray flex items-center space-x-2 mt-2">
      <div className=" h-6 w-6 flex justify-center">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8   rounded-full dark:bg-red-800 ">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
    </svg>
    <span className="sr-only">Error icon</span>
</div>
      </div>
      <p className="p-3 md:p-3">
     <b>Non-Leaders : </b>  Individuals who don't see themselves as leaders may not benefit from this training
      </p>
    </div>

    <div className=" radius-yellow px-2 rounded-xl bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
      <div className=" h-6 w-6 flex justify-center">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8   rounded-full dark:bg-red-800 ">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
    </svg>
    <span className="sr-only">Error icon</span>
</div>
      </div>
      </div>
      <p className="p-3 md:p-3">
      <b>Individuals Not Serious About Their Business and Future Grwoth :</b> This workshop is designed for those committed to making significant improvements
      </p>
    </div>
    <div className="radius-yellow px-2 rounded-xl bg-gray flex items-center space-x-2 mt-2">
      <div className="text-white h-6 w-6 flex justify-center">
      <div className=" h-6 w-6 flex justify-center">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8   rounded-full dark:bg-red-800 ">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
    </svg>
    <span className="sr-only">Error icon</span>
</div>
      </div>
      </div>
      <p className="p-3 md:p-3">
      <b>Those Unwilling to Engage in Active Learning and Implementation :</b> Active participation and application of the skills learned are crucial for success
      </p>
    </div>
      </div>

    </div>
    {/* section -21 */}
           {/* action now button */}
           <a href="https://rzp.io/l/badecisionmc">
    <div className="flex justify-center mt-8 sm:mt-8 py-2 p-4 sm:px-2 mb-7">
      <button className="bg-blue-600 text-white sm:text-xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
        <span className="flex-grow text-center">Action Now for ₹199</span>
        <FontAwesomeIcon
          icon={faGreaterThan}
          className="bg-white text-blue-500 px-4 p-2 rounded-lg"
        />
      </button>
    </div>
    </a>
      
  </section>
  )
}

export default SeminarSection
