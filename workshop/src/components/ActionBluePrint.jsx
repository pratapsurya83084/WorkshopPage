import React from "react";

const ActionBluePrint = () => {
  return (
    <div>
      <section className=" body-font">
        <div className="container px-5 py-14 md:py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Powerfull Action Blueprint
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl ">
              Enpowerment extravaganza
            </p>
          </div>
          <div className="flex flex-wrap m-4   justify-center">
            {/* card1 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="/public\powerfull_ACtion_img1.png"
                />
              </div>
              <h1 className="text-center mt-4 text-xl">
                Networking PowerHouse Strategies
              </h1>
            </div>
            {/* card2 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="public\powerfull_Action_img2.png"
                />
              </div>
              <h1 className="text-center mt-4 text-xl">
                Exclusive mastermind invitions
              </h1>
            </div>

            {/* card3 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="/public\powerfull_Action_img3.png"
                />
              </div>
              <h1 className="text-center mt-4 text-xl">Customized Goal Setting</h1>
            </div>

            {/* card4 */}
            <div className="lg:w-[300px] sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="  rounded-3xl inset-0 w-full h-full object-cover object-center"
                  src="public\Powerfull_Action_img4.png"
                />
              </div>
              <h1 className="text-center  mt-4 text-xl">Action-Oriented Sessions</h1>
            </div>
          </div>
        </div>
      </section>

      {/* <hr /> */}
    </div>
  );
};

export default ActionBluePrint;
