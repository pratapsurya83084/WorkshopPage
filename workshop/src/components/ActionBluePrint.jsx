import React,{useEffect,useRef} from "react";

const ActionBluePrint = () => {

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
    <div>
      <section 
     ref={sectionRef}
     
     className="bg-custom-brown radius-yellow rounded-3xl mb-10  body-font">
        <div className="container px-5 py-4 md:py-20 mx-auto">
          <div className="flex flex-col text-center w-full md:mb-10">
            <h1 className="smooth-scroll sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Powerfull Action Blueprint
            </h1>
            <p className="smooth-scroll lg:w-2/3 mx-auto leading-relaxed text-xl ">
            More Than 1,03,000 Students & Business Enthusiasts Rated My Coaching Style
Discover What Awaits You

            </p>
            <div className="smooth-scroll flex justify-center mb-4">
          <svg
            width="300"
            height="30"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="yellow"             strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
          </div>
          
          <div className=" flex flex-wrap m-4   justify-center">
            {/* card1 */}
            <div className="   lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="smooth-scroll radius-yellow  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="/public\powerfull_ACtion_img1.png"
                />
              </div>
              <h1 className="smooth-scroll text-center mt-4 text-xl">
                Networking PowerHouse Strategies
              </h1>
            </div>
            {/* card2 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="smooth-scroll radius-yellow  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="public\powerfull_Action_img2.png"
                />
              </div>
              <h1 className="smooth-scroll text-center mt-4 text-xl">
                Exclusive mastermind invitions
              </h1>
            </div>

            {/* card3 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="smooth-scroll radius-yellow  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="/public\powerfull_Action_img3.png"
                />
              </div>
              <h1 className="smooth-scroll text-center mt-4 text-xl">Customized Goal Setting</h1>
            </div>

            {/* card4 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="smooth-scroll radius-yellow  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="public\Powerfull_Action_img4.png"
                />
              </div>
              <h1 className="smooth-scroll text-center  mt-4 text-xl">Action-Oriented Sessions</h1>
            </div>
          </div>
        </div>
      </section>

      {/* <hr /> */}
    </div>
  );
};

export default ActionBluePrint;
