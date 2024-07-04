
import React,{useEffect,useRef} from "react";

const PictureSection = () => {

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
    className="mt-10 lg:mt-14">
      <h1 className="smooth-scroll text-center text-xl sm:text-2xl md:text-3xl font-bold">
        Discover the Story of Mr.Bishop Adhikari : A Journey Towards Remarkable
        Accomplishments
      </h1>
      <div className="mt-10 images-coach w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
          {/* first image */}
          <div className="flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[350px] w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="/ABOUTUS2_img1.jpg"
              alt="Mr. Bishop Adhikari Image 1"
            />
          </div>
          {/* second image */}
          <div className="flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[350px]  w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="\Screenshot 2024-07-04 121254.png"
              alt="Mr. Bishop Adhikari Image 2"
            />
          </div>
          {/* third image */}
          <div className="flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[350px] w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="/ABOUTUS3.jpg"
              alt="Mr. Bishop Adhikari Image 3"
            />
          </div>
          {/* fourth image */}
          <div className="flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[350px] w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="/ABOUTUS4.jpg"
              alt="Mr. Bishop Adhikari Image 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureSection;
