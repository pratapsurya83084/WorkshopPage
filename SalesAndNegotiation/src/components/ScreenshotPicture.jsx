import React ,{useEffect,useRef} from "react";

const ScreenshotPicture = () => {

  
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
      <h1 className="smooth-scroll text-center text-xl sm:text-2xl md:text-3xl font-bold p-4 mt-10">
        Ignite your inner visionary and join our exclusive workshop to scale
        your buisness and career. Unleash your full potential
         {/* -just like this empowered
        entrepreneurs who transformed their futures */}
        <div className=" smooth-scroll flex justify-center mb-4">
          <svg
            width="300"
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
      </h1>
       {/* <h1 className="text-center">add testtimonials vidio</h1> */}
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        
        
        <div className="m-4 border rounded-lg shadow-md overflow-hidden w-64 h-64 flex items-center justify-center">
          <img
            src="/EmailSection_1.png"
            alt="Email Section 1"
            className="smooth-scroll radius-yellow object-contain w-full h-full"
          />
        </div>
        <div className="m-4 border rounded-lg shadow-md overflow-hidden w-64 h-64 flex items-center justify-center">
          <img
            src="/Emailsection2_1.png"
            alt="Email Section 2"
            className="smooth-scroll radius-yellow object-contain w-full h-full"
          />
        </div>
        <div className="m-4 border rounded-lg shadow-md overflow-hidden w-64 h-64 flex items-center justify-center">
          <img
            src="/Gratitute.png"
            alt="Gratitude"
            className="smooth-scroll radius-yellow object-contain w-full h-full"
          />
        </div>
        <div className="m-4 border rounded-lg shadow-md overflow-hidden w-64 h-64 flex items-center justify-center">
          <img
            src="/HighScaleTicket.png"
            alt="High Scale Ticket"
            className="smooth-scroll radius-yellow object-contain w-full h-full"
          />
        </div>
        <div className="m-4 border rounded-lg shadow-md overflow-hidden w-64 h-64 flex items-center justify-center">
          <img
            src="/ProductLaunch.png"
            alt="Product Launch"
            className="smooth-scroll radius-yellow object-contain w-full h-full"
          />
        </div>
        <div className="m-4 border rounded-lg shadow-md overflow-hidden w-64 h-64 flex items-center justify-center">
          <img
            src="/Wemessagechat_1.png"
            alt="We Message Chat"
            className="smooth-scroll radius-yellow object-contain w-full h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default ScreenshotPicture;
