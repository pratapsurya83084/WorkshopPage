import React ,{useEffect,useRef} from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
// import ReactStars from "react-stars";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const SinglePicture = () => {

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
    className="  mt-10  text-xl md:text-2xl lg:text-3xl font-bold p-4 flex-col justify-center items-center text-center">
      <h1 className="smooth-scroll">Empowering success with our revenue milestones</h1>
      <div className="smooth-scroll flex justify-center mb-4">
        <svg
          width="400"
          height="30"
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
      <div className=" lg:flex justify-center items-center lg:gap-x-20  bg-custom-brown radius-yellow p-5 rounded-3xl mb-0 sm:mb-10 mt-4">
       {/* left-side image */}
        <div className="image mb-2">
          <img 
          className="smooth-scroll h-56 w-full sm:h-96  md:h-[500px] md:w-full p- rounded-2xl radius-yellow"
          src="\7TH PAGE SECTION.jpg" alt="" />
        </div>
          {/*add-point  */}
        <div className="add-point">
        {/* radius-yellow */}
        <div className="flex-col justify-center md:space-y-5 items-center bg-custom-brown sm:text-xl rounded-3xl p-2">
          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Elevate your sales game with our 3-hour workshop
            </h1>
          </div>

          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Get ahead with our 3-hour workshop
            </h1>
          </div>

          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Maximize your potential in 3-hours!
            </h1>
          </div>

          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Achieve more with 3-hours of training
            </h1>
          </div>



          
          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Negotiate like a pro in 3-hours
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Learn top strategies in 3-hours
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Gain the tools you need in 3-hours
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 mt-">
            <div className="h-6 w-6 flex justify-center smooth-scroll bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-2">
            Become a top performer in just 3-hours
            </h1>
          </div>
        </div>

        </div>

        {/* <iframe  
            title="vimeo-player"
            src="https://player.vimeo.com/video/854930213?h=b157a37779"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe> */}
      </div>
    </section>
  );
};

export default SinglePicture;
