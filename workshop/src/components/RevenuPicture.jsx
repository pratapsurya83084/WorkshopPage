import React ,{useEffect,useRef}  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "@heroicons/react/24/solid";


const RevenuPicture = () => {

  const points = [
    "Action-Oriented 3 Hours",
    "Networking Pro Secrets",
    "Tailored Negotiation Tactical Goals"
  ];


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
    <section 
    ref={sectionRef}
    className="mt-10 body-font text-center">
      <div className="text-2xl font-bold p-2 mb-">
        <h4 className="smooth-scroll">
          Discover Sales Real-Life Business Enthusiasts Who Transformed Straight
        <br />  from Those Who Attended My Coaching
        </h4>
        {/* <p className="text-xl mt-5">
            Empowering success with our revenue milestones
          </p> */}
         {/* <div className="text-2xl"> */}
      {/* <div className="flex justify-center">
        <ol className="list-decimal list-inside text-left space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-center text-yellow-200 rounded-xl px-4 py-2">
              {/* <div className="h-5 w-5 flex justify-center items-center mb-0 bg-green-500 rounded-full mr-3">
                <CheckIcon className="h-4 w-4 font-bold text-white" />
              </div> */}
              {/* <span>{point}</span> */}
            {/* </li>
          ))}
        </ol>
      </div> */} 
          {/* </div> */}
      </div>


      <div className="radius-yellow rounded-3xl bg-custom-brown container px-5 py-5 mx-auto">
        <div className="flex justify-center items-center  rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="smooth-scroll object-cover object-center  lg:h-[10%] lg:w-[60%] w-full "
            src="/public/revenue_picture.png"
          />
        </div>

        <h1 className="smooth-scroll text-xl font-bold p-4 mt-4 md:text-2xl lg:text-3xl xl:text-3xl">
          Just look a view how much they closed the deal
        </h1>
        <br />

        <div className="text-2xl">
      <div className="flex justify-center">
        <ol className="list-decimal list-inside text-left space-y-2">
          {points.map((point, index) => (
            <li key={index} className="smooth-scroll flex items-center text-yellow-200 rounded-xl px-4 py-2">
              <div className="h-5 w-6 flex justify-center items-center mb-0 bg-yellow-200 rounded-full mr-3">
                <CheckIcon className="h-4 w-4 font-bold text-black" />
              </div>
              <span className="smooth-scroll">{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
      

          {/* action button */}

            <div className="smooth-scroll flex justify-center md:mt-8 sm:mt-8 py-2 sm:px-2">
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
      {/* </div> */}
    </section>
  );
};

export default RevenuPicture;
