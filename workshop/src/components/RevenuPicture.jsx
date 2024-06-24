import React from 'react';

const RevenuPicture = () => {
  return (
    <section className=" body-font text-center">
      
      <div className="text-2xl font-bold p-2 mb-">
          <h4 className="">
            Unearth the path to earning
            <strong className="text-yellow-200">1Cr+</strong> in the next
            <strong className="text-yellow-200">6 months</strong> with your digital journal and unveil a roadmap to sell your first
            e-book within <strong className="text-yellow-200">1 hour</strong>
          </h4>
          <p className="text-xl mt-5">
            Empowering success with our revenue milestones
          </p>
        </div>
      <div className="bg-custom-brown container px-5 py-5 mx-auto">
        <div className="flex justify-center items-center  rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center  lg:h-[10%] lg:w-[60%] w-full "
            src="/public/revenue_picture.png"
          />
        </div>
        
        <div className="mb-10">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/854930213?h=b157a37779"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      

        <h1 className="text-xl font-bold p-4 mt-4 md:text-2xl lg:text-3xl xl:text-3xl">
          Insights for you to discover what your coach has in store for you
        </h1>
        <br />
        
        <div className="text-2xl">
          <ul className="list-disc list-inside">
            <li className="mb-4 p-2 text-white rounded-xl shadow-lg">
              Action-Oriented 2 Days
            </li>
            <li className="mb-4 p-2 text-white rounded-xl shadow-lg">
              Networking Pro Secrets
            </li>
            <li className="mb-4 p-2 mr-5 text-white rounded-xl shadow-lg">
              Tailored Tactical Goals
            </li>
          </ul>
          <button className="bg-blue-500 p-2 rounded-xl text-sm sm:text-xl md:text-2xl border focus:bg-blue-600">
            REGISTER FOR WEEKEND TRAINING
          </button>
        </div>
      </div>
    </section>
  );
};

export default RevenuPicture;
