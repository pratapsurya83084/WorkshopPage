import React ,{useEffect,useRef}  from "react";

const TransfromativeJourny = () => {

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
    className="mt-14 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col w-full mb-2">
          {/* Heading and Subheading are removed */}
          <h1 className="smooth-scroll  text-xl sm:text-2xl md:text-3xl text-center font-bold">
          Stay ahead of the competition with advanced sales and negotiation tactics
          </h1>
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
        </div>
        <div className="mt-4 flex flex-wrap -m-4">
          {/* img/icon 1 */}
          <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-custom-brown p-2 radius-yellow rounded-3xl">
              <img
                className="smooth-scroll h-auto max-h-64 rounded-3xl w-full object-contain mb-6"
                src="\street-map_302928.png"
                alt="Networking opportunity"
              />
              <h1 className="smooth-scroll text-center text-white">
              15+  Engage in real-life case studies
              {/* hands-on activities and */}
              </h1>
            </div>
          </div>

          {/* img/icon 2 */}
          <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-custom-brown p-2 radius-yellow rounded-3xl">
              <img
                className="smooth-scroll h-auto max-h-64 rounded-3xl w-full object-contain mb-6"
                src="\artificial-intelligence_12220392.png"
                alt="Networking opportunity"
              />
              <h1 className="smooth-scroll text-center text-white">
              20+ Receive comprehensive materials

              </h1>
            </div>
          </div>
          {/* img/icon 3 */}
          <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-custom-brown p-2 radius-yellow rounded-3xl">
              <img
                className="smooth-scroll h-auto max-h-64 rounded-3xl w-full object-contain mb-6"
                src="\internet_14194443.png"
                alt="Networking opportunity"
              />
              <h1 className="smooth-scroll text-center text-white">
              30+ Tools help to expand your professional network
 
              </h1>
            </div>
          </div>
             
             {/* img/icons 4 */}
             <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-custom-brown p-2 radius-yellow rounded-3xl">
              <img
                className="smooth-scroll h-auto max-h-64 rounded-3xl w-full object-contain mb-6"
                src="\group-dynamics_13082737.png"
                alt="Networking opportunity"
              />
              <h1 className="smooth-scroll text-center text-white">
              35+ Support to ensure continuous improvement

              </h1>
            </div>
          </div>
        {/* img/icons 5 */}
        <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-custom-brown p-2 radius-yellow rounded-3xl">
              <img
                className="smooth-scroll h-auto max-h-64 rounded-3xl w-full object-contain mb-6"
                src="\placeholder_235176.png"
                alt="Networking opportunity"
              />
              <h1 className="smooth-scroll text-center text-white">
              {/* these */}
              72+  Strategies how others have applied  strategies

              </h1>
            </div>
          </div>

         {/* img/icons 6 */}
         <div className="w-full xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-custom-brown p-2 radius-yellow rounded-3xl">
              <img
                className="smooth-scroll h-auto max-h-64 rounded-3xl w-full object-contain mb-6"
                src="\leadership_7288711.png"
                alt="Networking opportunity"
              />
              <h1 className="smooth-scroll text-center text-white">
              100+ Strategies to communicate persuasively 
              {/* and confidently */}
              </h1>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default TransfromativeJourny;
