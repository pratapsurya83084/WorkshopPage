// import React ,{useEffect,useRef} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
// import { CheckIcon } from "@heroicons/react/24/solid";

// const LimitedSeats = () => {
//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const section = sectionRef.current;
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1,
//     };

//     const observerCallback = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-scroll');
//         } else {
//           entry.target.classList.remove('animate-scroll');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     const elements = section.querySelectorAll('.smooth-scroll');
//     elements.forEach(el => observer.observe(el));

//     return () => {
//       elements.forEach(el => observer.unobserve(el));
//     };
//   }, []);
  
  
//   return (
//     <section 
//     ref={sectionRef}
//     className="body-font">
//       <div className="container mx-auto flex px-   py-0 sm:py-10 md:flex-row flex-col items-center">
//         <div className="md:hidden flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//           <img
//             className="smooth-scroll radius-yellow object-cover object-center rounded-xl"
//             alt="hero"
//             src="/Limit_seats_img.png"
//           />
//         </div>
//         {/* lg:pr-24 */}
       
//         <div className="lg:flex-grow md:w-1/2   flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="smooth-scroll mt-4 title-font text-xl ml-3 sm:text-2xl mb- font-medium">
//             Ready to Skyrocket Your Business? <br />
//           </h1>

//           <div className="text-xl rounded-3xl p-2">
//             <div className="flex items-center space-x-2 space-y-2 mt-2">
//               <div className="smooth-scroll flex justify-center sm:mt-2 mt-3  md:mt-4 lg:mt-4 xl:mt-4  bg-green-500 rounded-full">
//                 <CheckIcon className="h-4 w-4 text-white" />
//               </div>
//               <h1 className="smooth-scroll sm:whitespace-nowrap p-">
//                 Enhance efficiency and productivity
//               </h1>
//             </div>

//             <div className="flex items-center space-x-2 mt-2">
//               <div className="smooth-scroll flex justify-center bg-green-500 rounded-full">
//                 <CheckIcon className="h-4 w-4 text-white" />
//               </div>
//               <h1 className="smooth-scroll sm:whitespace-nowrap p-">
//                 Thrive in dynamic markets
//               </h1>
//             </div>

//             <div className="flex items-center space-x-2 mt-2">
//               <div className="smooth-scroll flex justify-center bg-green-500 rounded-full">
//                 <CheckIcon className="h-4 w-4 text-white" />
//               </div>
//               <h1 className="smooth-scroll p-">Gain a competitive advantage</h1>
//             </div>

//             <div className="flex items-center space-x- mt-2">
//               <div className="smooth-scroll flex justify-center mb-5 bg-green-500 rounded-full">
//                 <CheckIcon className="h-4 w-4 text-white" />
//               </div>
//               <h1 className="smooth-scroll sm:whitespace-nowrap px-1 xl:px-2">
//                 Achieve strategic growth and  <br />
//                  profitability
//               </h1>
//             </div>
//           </div>

//           <p className="smooth-scroll sm:text-xl mt-3 p-2">
//             Learn the Art of 1 Cr+ sales closed in the next months with <br />
//             strategic Networking.
//             Supercharge your future sales and  <br />
//             negotiation with live 
//              training on the weekend!
//           </p>
//           <br />
//           <span className="smooth-scroll text-2xl md:ml-3 font-bold text-yellow-300">
//             Limited seats - DON'T MISS OUT!
//           </span>

//           <div className="smooth-scroll xl:ml-40 mt-5 flex justify-center md:mt-8 sm:mt-8 py-4 sm:px-2">
//             <a href="https://pages.razorpay.com/workshopwithbishop">
//               <button className="bg-blue-600 text-white md:text-xl font-bold py-2 px-6 rounded-xl md:mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
//                 <span className="flex-grow text-center">
//                   Action Now for ₹199
//                 </span>
//                 <FontAwesomeIcon
//                   icon={faGreaterThan}
//                   className="bg-white text-blue-500 px-4 p-2 rounded-lg"
//                 />
//               </button>
//             </a>
//           </div>
//         </div>
//         <div className="smooth-scroll hidden md:flex lg:max-w-lg  mb-20 ">
//           <img
//             className="radius-yellow object-cover object-center  md:p-[0px] lg:pl-[2px]   rounded-xl w-5/6 md:h-[290px]  md:w-[400px]  lg:h-[350px] lg:w-[700px]"
//             alt="hero"
//             src="/Limit_seats_img.png"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LimitedSeats;


import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "@heroicons/react/24/solid";

const LimitedSeats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
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
    <section ref={sectionRef} className="body-font">
      <div className="container mx-auto flex px-2 md:px-4  py-0 sm:py-10 md:flex-row flex-col  items-center">
        <div className="md:hidden flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0">
          <img
            className="smooth-scroll radius-yellow object-cover object-center rounded-xl"
            alt="hero"
            src="/Limit_seats_img.png"
          />
        </div>
        <div className=" md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:mr-5">
          <h1 className="smooth-scroll mt-4 title-font text-xl ml-3 sm:text-2xl mb- font-medium">
            Ready to Skyrocket Your Business? <br />
          </h1>

          <div className="text-xl rounded-3xl p-2">
            <div className="flex items-center space-x-2 space-y-2 mt-2">
              <div className="smooth-scroll flex justify-center sm:mt-2 mt-3  md:mt-4 lg:mt-4 xl:mt-4 bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
              <h1 className="smooth-scroll sm:whitespace-nowrap p-">
                Enhance efficiency and productivity
              </h1>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <div className="smooth-scroll flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
              <h1 className="smooth-scroll sm:whitespace-nowrap p-">
                Thrive in dynamic markets
              </h1>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <div className="smooth-scroll flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
              <h1 className="smooth-scroll p-">Gain a competitive advantage</h1>
            </div>

            <div className="flex items-center space-x- mt-2">
              <div className="smooth-scroll flex justify-center mb-5 bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
              <h1 className="smooth-scroll sm:whitespace-nowrap px-1 xl:px-2">
                Achieve strategic growth and <br />
                profitability
              </h1>
            </div>
          </div>

          <p className="smooth-scroll sm:text-xl mt-3 p-2">
            Learn the Art of 1 Cr+ sales closed in the next months with <br />
            strategic Networking. Supercharge your future sales and <br />
            negotiation with live training on the weekend!
          </p>
          <br />
          <span className="smooth-scroll text-2xl md:ml-3 font-bold text-yellow-300">
            Limited seats - DON'T MISS OUT!
          </span>

          <div className="smooth-scroll xl:ml-40 mt-5 flex justify-center md:mt-8 sm:mt-8 py-4 sm:px-2">
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
        {/* // className="radius-yellow object-cover object-center md:p-[0px] lg:pl-[2px] rounded-xl w-5/6 md:h-[350px] md:w-[500px] lg:h-[450px] lg:w-[600px]" */}
        {/* lg:max-w-lg main */}
        <div className="smooth-scroll hidden md:flex w-[600px] md:h-[400px]  mb-20 ">
  <img
    className="radius-yellow rounded-3xl "
    alt="hero"
    src="/Limit_seats_img.png"
  />
</div>

      </div>
    </section>
  );
};

export default LimitedSeats;
