import React from 'react'

const OneVideoSection = () => {
  return (
    <section className='  mt-10  text-xl md:text-2xl lg:text-3xl font-bold p-4 flex-col justify-center items-center text-center'>
        <h1>Empowering success with our revenue milestones</h1>
        <div className="flex justify-center mb-4">
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
       <div className="bg-custom-brown radius-yellow p-5 rounded-3xl mb-0 sm:mb-10 mt-4">
          <iframe  
            title="vimeo-player"
            src="https://player.vimeo.com/video/854930213?h=b157a37779"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
    </section>
  )
}

export default OneVideoSection
