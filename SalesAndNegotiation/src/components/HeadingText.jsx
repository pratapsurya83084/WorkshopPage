import React,{useEffect,useRef} from 'react'

const HeadingText = () => {
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
    >
      <h1 className="smooth-scroll bg-custom-brown   text-center p-6 text-xl sm:text-2xl md:text-3xl font-bold ">
        Transform Your Sales & Negotiation Skills in{" "}
        <b className="text-yellow-200 font-bold">3 Hours</b> Essential for
        Companies , Professionals , and  Students!
      </h1>

      <h2 className="smooth-scroll text-center  sm:text-xl md:text-2xl p-6 font-bold">
        {" "}
        A workshop to gain 200+ deep insights and actionable strategies to
        elevate your sales and negotiation skills and drive your business to{" "}
        <b className="text-yellow-200 font-bold "> 1 Cr+ </b>new heights in the
        <b className="text-yellow-200 px-2">next 6 months</b>
      </h2>
    </section>
  )
}

export default HeadingText
