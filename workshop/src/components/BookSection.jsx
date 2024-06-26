import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: null, // No previous arrow
    nextArrow: null, // No next arrow
  };

  return (
    <div className="mt-10">
      {/* <h1 className="carousel-section bg-yellow-200 ml-6 sm:ml-8 md:ml-10 mt-10 rounded-tl-xl rounded-tr-xl text-black font-bold inline-block p-1 px-4">
        FEATURED IN
      </h1> */}
      <div className="image-carousel-section flex justify-center items-center w-full radius-yellow p-4 h- rounded-3xl bg-custom-brown">
      <Slider {...settings} className="flex p-2 w-full">
      {/* First slide */}
      <div className="p-2">
        <div className=" flex justify-center items-center md:gap-x-10 gap-x-5 gap-4 xl:gap-x-50">
         <div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img1 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40   object-cover"
                src="\EarnBookShotChecklist4949_img1.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2 ">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                Rs.4949
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img2 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\NetworkingOpportunitiestoolkit5699_img2.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.5699
              </button>
            </div>
          </div>
          </div>
          
           <div>
         <div className="flex-col">
            <div className="flex justify-center">
             {/* 3rd image */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\MillionDollersalespitch5859_img3.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.5859
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
             {/* 4th imag */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\UserFriendlyWebsiteandInterfacecreatetoolkit6199_img4.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                Rs.6199
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Second slide */}
      <div className="p-2">
        <div className=" flex justify-center items-center md:gap-x-10 gap-x-5 gap-4 xl:gap-x-50">
         <div>
          <div className="flex-col">
            <div className="flex justify-center">
             {/* 5-1st imag */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40   object-cover"
                src="\TEAMMANAGEMENTTOOLKIT6299_img5.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.6299
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
              {/* 6th imag */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\LeadershipToolkit6449_img6.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
              Rs.6449
              </button>
            </div>
          </div>
          </div>
          
           <div>
         <div className="flex-col">
            <div className="flex justify-center">
                {/* 7th imag */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\Digital_ResourceLibrary_SurpriseGiftsorBonusesmanymore6449_img7.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
            Rs.6499
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
              {/*img 8  */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\Actionable_Checklists_or_Roadmaps_tootlkit_for_leadership7899_8.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.7899
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Third slide */}
      <div className="p-2">
        <div className=" flex justify-center items-center md:gap-x-10 gap-x-5 gap-4 xl:gap-x-50">
         <div>
          <div className="flex-col">
            <div className="flex justify-center">
             {/* img 9 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40   object-cover"
                src="\FullAItoolkittouseandearnmore7999_img9.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
              Rs.7999
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 10 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\LimitedEditionWorkshopMerchandisebook8999_img10.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                Rs.8999
              </button>
            </div>
          </div>
          </div>
          
           <div>
         <div className="flex-col">
            <div className="flex justify-center">
                {/* img 11 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\Digital_Journal_for_your_next_earning9399_img11.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.9399
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 12 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\FinacialToolkitformanageyourFinacialKnowledge9999_12.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.9999
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Fourth slide */}
      <div className="p-2">
        <div className=" flex justify-center items-center md:gap-x-10 gap-x-5 gap-4 xl:gap-x-50">
         <div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 13 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40   object-cover"
                src="\PrivatePodcastSessionwithexcusive1hour2699_img13.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.2699
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 14 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\Certificate_of_Completation2999_img14.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.2999
              </button>
            </div>
          </div>
          </div>
          
           <div>
         <div className="flex-col">
            <div className="flex justify-center">
                {/* image 15 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\Community_membership3299_img15.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
              Rs.3299
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 16 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\21_Case_Study_observation_analysis_book3499_img16.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                Rs.3499
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Fifth slide */}
      <div className="p-2">
        <div className=" flex justify-center items-center md:gap-x-10 gap-x-5 gap-4 xl:gap-x-50">
         <div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 17 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40   object-cover"
                src="\Customer_Feedback_and_Surveys_toolkit_img17.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.3999
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
              {/* img 18 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\PersonalisedLeadershipAssessmenttoolkit_img18.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.4349
              </button>
            </div>
          </div>
          </div>
          
           <div>
         <div className="flex-col">
            <div className="flex justify-center">
                {/* img 19 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\EngagingContenttoolkit_img19.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.4799
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-center">
                {/* img 20 */}
              <img
                className="h-50 w-60 lg:h-52 lg:w-40  object-cover"
                src="\E-bookonLeaderhsipstrategies_img20.png"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center mt-2 mb-2">
              <button className="bg-blue-400 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
               Rs.4899
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Slider>
      </div>
    </div>
  );
};

export default BookSection;
