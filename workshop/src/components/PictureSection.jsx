// import React from "react";

// const PictureSection = () => {
//   return (
//     <section className="mt-10 lg:mt-14">
//       <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
//         Discover the Story of Mr.Bishop Adhikari : A Journey Towards Remarkable
//         Accomplishments
//       </h1>
//       <div className="mt-10 images-coach w-full">
//         <div className="w-full gap-y- sm:gap-x-2  md:gap-x-3 lg:gap-x-2 flex-col justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:mx-1  xl:gap-[20px]  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
//           {/* first image */}
//           <div>
//             <img
//               className="radius-yellow   h-[350px] w-full  sm:h-[300px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
//               src="\ABOUTUS2_img1.jpg"
//               alt=""
//             />
//           </div>
//           {/* second image */}
//           <div>
//             <img
//               className="radius-yellow h-[350px] w-full  sm:h-[300px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
//               src="\ABOUTUS1_img2.jpg"
//               alt=""
//             />
//           </div>
//           {/* third image */}
//           <div>
//             <img
//               className="radius-yellow h-[350px] w-full  sm:h-[300px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
//               src="\ABOUTUS3.jpg"
//               alt=""
//             />
//           </div>
//           {/* 4 th image */}
//           <div>
//             <img
//               className="radius-yellow h-[350px] w-full  sm:h-[300px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
//               src="\ABOUTUS4.jpg"
//               alt=""
//             />
//           </div>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PictureSection;




import React from "react";

const PictureSection = () => {
  return (
    <section className="mt-10 lg:mt-14">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
        Discover the Story of Mr.Bishop Adhikari : A Journey Towards Remarkable
        Accomplishments
      </h1>
      <div className="mt-10 images-coach w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
          {/* first image */}
          <div className="flex justify-center">
            <img
              className="radius-yellow h-[350px] w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="/ABOUTUS2_img1.jpg"
              alt="Mr. Bishop Adhikari Image 1"
            />
          </div>
          {/* second image */}
          <div className="flex justify-center">
            <img
              className="radius-yellow h-[350px]  w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="\Screenshot 2024-07-04 121254.png"
              alt="Mr. Bishop Adhikari Image 2"
            />
          </div>
          {/* third image */}
          <div className="flex justify-center">
            <img
              className="radius-yellow h-[350px] w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
              src="/ABOUTUS3.jpg"
              alt="Mr. Bishop Adhikari Image 3"
            />
          </div>
          {/* fourth image */}
          <div className="flex justify-center">
            <img
              className="radius-yellow h-[350px] w-full sm:h-[300px] md:h-[300px] md:w-[470px] xl:w-[550px] xl:h-[300px] rounded-3xl object-cover"
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
