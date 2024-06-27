
import React from 'react'

const TextCards = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-10'>Mr. Bishop Adhikari is a dynamic and multifaceted individual,excelling in various fields.He is an entrepreneur,social activist and a prominent figure in the realm of leadership and management. With a passion for innovation and a vision for a better future,he has founded and led multiple successful ventures</h1>
      {/* radius-yellow */}
<div className="gap-10 mt-10 grid mb-8   rounded-lg shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3  bg-custom-brown">
    {/* cards1 */}
    <figure className="m-5 flex flex-col items-center  justify-center p-2 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
        <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
            <h3 className="text-lg font-semibold  text-yellow-200">Entrepreneurship</h3>
            <p className="my-4">
            As the CEO and Founder of BISJHINTUS Private Limited, Mr. Adhikari has demonstrated exceptional leadership skills in building and guiding the company towards growth and success. BISJHINTUS is known for its innovative solutions and transformative impact on various industries.
                </p>
        </blockquote>
       
    </figure>
    
    {/* cards2 */}
    <figure className="m-5 flex flex-col items-center  justify-center p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
        <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
            <h3 className="text-lg font-semibold  text-yellow-200">Pharmaceutical Expertise</h3>
            <p className="my-4">
            In addition to his role at BISJHINTUS,Mr.Adhikari is a trailblazer
            in the Pharmaceutical sector.
            He is the Founder of Ricabi Life Science,
            where he held the position of CXO,
            and Recombio Pharmalife as the COO.Under his guidance  ,both
            companies have contribute significantly
             to advancement in science and patient care

                </p>
        </blockquote>
       
    </figure>

{/* cards3 */}
    <figure className="m-5 flex flex-col items-center  justify-center p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
        <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
            <h3 className="text-lg font-semibold  text-yellow-200">Social Activism</h3>
            <p className="my-4">
           Mr. Adhikari's commitment to social causes is commendable. As a public speaker and renowned trainer, he has been actively involved in empowering individuals and 
           bridging linguistic diversity.
            Through his work, he promotes empathy and invests 
            in the future by uplifting underprivileged communities
                </p>
        </blockquote>
       
    </figure>
    



{/* card4 */}
    <figure className="m-5 flex flex-col items-center  justify-center p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
        <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
            <h3 className="text-lg font-semibold  text-yellow-200">Business Consultant and Associate</h3>
            <p className="my-4">
            Mr. Adhikari's expertise extends to consulting and training as a full-time associate at McKinsey , a reputable business consulting firm. His vast experience and knowledge have helped countless businesses achieve their goals and improve their overall performance
                </p>
        </blockquote>
       
    </figure>





{/* card5 */}
    <figure className="m-5 flex flex-col items-center  justify-center p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
        <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
            <h3 className="text-lg font-semibold  text-yellow-200">Independent Director and Philanthropy</h3>
            <p className="my-4">
            Mr. Adhikari serves as an Independent Director for the Core NGO, a network of seven NGOs dedicated to addressing critical social issues. His involvement in this capacity showcases his dedication to making a positive impact on society
                </p>
        </blockquote>
       
    </figure>



{/* card6 */}
    <figure className=" m-5 flex flex-col items-center  justify-center p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
        <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
            <h3 className="text-lg font-semibold  text-yellow-200">Educational Journey</h3>
            <p className="my-4">
            Alongside his successful professional 
            journey, Mr. Adhikari is a Ph.D. candidate,
             driven by a thirst for knowledge. 
             He has proven himself to be a lifelong
              learner and a highly 
            accomplished scientific achiever
                </p>
        </blockquote>
       
    </figure>
</div>

    </div>
  )
}

export default TextCards
