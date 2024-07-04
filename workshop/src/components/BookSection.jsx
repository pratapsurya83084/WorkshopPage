import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferPrice  from '../components/OfferPrice'
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
    <div className="">
      <h1 className="carousel-section text-center mt-10 p-4 text-xl sm:text-2xl md:text-3xl font-bold">
            Claim these incredible additions free beeis to your workshop future experience!
            <div className="flex justify-center mb-4">
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
          </h1>
      {/* h-32 sm:h-32 md:h-36 lg:h-36 xl:h-36 2xl:h-40 */}
      <div className="image-carousel-section flex justify-center items-center  w-full radius-yellow p-4  rounded-3xl bg-custom-brown">
        <Slider {...settings} className="flex p-2 w-full">
          {/* First slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\EarnBookShotChecklist4949_img1.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.498
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\NetworkingOpportunitiestoolkit5699_img2.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.652
                  </button>
                </div>
              </div>
             
            </div>
          </div>

          {/* Second slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\MillionDollersalespitch5859_img3.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.859
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\UserFriendlyWebsiteandInterfacecreatetoolkit6199_img4.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.999
                  </button>
                </div>
              </div>
             
            </div>
          </div>

          {/* Third slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\TEAMMANAGEMENTTOOLKIT6299_img5.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.652
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\LeadershipToolkit6449_img6.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.498
                  </button>
                </div>
              </div>
             
            </div>
          </div>


          {/* 4th slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\Digital_ResourceLibrary_SurpriseGiftsorBonusesmanymore6449_img7.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.859
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\Actionable_Checklists_or_Roadmaps_tootlkit_for_leadership7899_8.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.999
                  </button>
                </div>
              </div>
             
            </div>
          </div>
          {/* 5th slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\FullAItoolkittouseandearnmore7999_img9.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.498
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\LimitedEditionWorkshopMerchandisebook8999_img10.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.859
                  </button>
                </div>
              </div>
             
            </div>
          </div>
            {/* 6th slide */}
            <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\Digital_Journal_for_your_next_earning9399_img11.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.999
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\FinacialToolkitformanageyourFinacialKnowledge9999_12.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.859
                  </button>
                </div>
              </div>
             
            </div>
          </div>

          {/*7th slide  */}

          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\PrivatePodcastSessionwithexcusive1hour2699_img13.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.498
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\Certificate_of_Completation2999_img14.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.652
                  </button>
                </div>
              </div>
             
            </div>
          </div>
          {/* 8th slide */}

          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\Community_membership3299_img15.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.859
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\21_Case_Study_observation_analysis_book3499_img16.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.999
                  </button>
                </div>
              </div>
             
            </div>
          </div>
          {/* 9th slide */}

          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\Customer_Feedback_and_Surveys_toolkit_img17.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.498
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\PersonalisedLeadershipAssessmenttoolkit_img18.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.652
                  </button>
                </div>
              </div>
             
            </div>
          </div>

          {/* 10 th  slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-10 md:gap-36 ">
              {/* img1 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {" "}
                  {/* img1 */}
                  <img
                    className="h-50 w-60    object-cover"
                    src="\EngagingContenttoolkit_img19.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2 ">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.999
                  </button>
                </div>
              </div>
              {/* img2 */}
              <div className="flex-col">
                <div className="flex justify-center">
                  {/* img2 */}
                  <img
                    className="h-50 w-60   object-cover"
                    src="\E-bookonLeaderhsipstrategies_img20.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="bg-blue-600 p-4 text-xl font-bold text-white py-2 px-4 rounded-md">
                    Rs.498
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </Slider>
        
      </div>


      {/* offerprice counter section */}
      <OfferPrice/>
    </div>
  );
};

export default BookSection;
