import React from "react";

const LimitedSeats = () => {
  return (
    <div>
      <section class="body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-xl text-xl mb-4 font-medium ">
              Ready to Skyrocket Your Buisness ? Learn the Art of 1 Cr+ in the
              next months with strategic Networking. Supercharge your live
              training on the weekend! <br />
              <span className="text-2xl font-bold  text-yellow-300">
                Limited seats - DONT MISS OUT !
              </span>
              {/* <br class="hidden lg:inline-block"/>readymade gluten  */}
            </h1>

            {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
            <div class=" mt-10 flex justify-center">
              <button className="bg-blue-500 text-white px-4  rounded-xl py-2    hover:text-gray-300 hover:bg-blue-600 focus:border">
                REGISTER NOW @{" "}
                <span className="line-through text-black">Rs.1,999/</span>{" "}
                Rs.199/{" "}
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/public\Limit_seats_img.png"
            />
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default LimitedSeats;
