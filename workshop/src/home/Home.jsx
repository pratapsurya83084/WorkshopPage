import React from 'react'
import AboutSection  from '../components/AboutSection'
import ActionBluePrint   from '../components/ActionBluePrint'
import LimitedSeats  from '../components/LimitedSeats'
import InspiringFeedback   from '../components/InspiringFeedback'
import RevenuPicture  from '../components/RevenuPicture'
import TransfromativeJourny   from '../components/TransfromativeJourny'
import Faq  from '../components/Faq'
import SeminarSection   from '../components/SeminarSection'
import FooterSection  from '../components/FooterSection'
import LearnFourHours  from '../components/LearnFourHours'
import  SixTestimonials  from '../components/SixTestimonials'
import CoachSection  from '../components/CoachSection'
import CompanyLogo   from '../components/CompanyLogo'
import OurGuarantee  from '../components/OurGuarantee'
import Promise  from '../components/Promise'
import SinglePicture   from '../components/SinglePicture'
import BookSection  from '../components/BookSection'
// import OfferPrice  from '../components/OfferPrice'
import ScreenshotPicture  from '../components/ScreenshotPicture'
import PictureSection  from '../components/PictureSection'
import TextCards  from '../components/TextCards'
const Home = () => {
  return (
    <div>
      <AboutSection/>
      <ActionBluePrint/>
      <LimitedSeats/>
      <InspiringFeedback/>
      <RevenuPicture/>
     <SinglePicture/>
     {/* <OfferPrice/> */}
      <TransfromativeJourny/>
      <BookSection/>
      <ScreenshotPicture/>
      <PictureSection/>
      <TextCards/>
      <SeminarSection/>
      <LearnFourHours/>
      <SixTestimonials/>
      <CoachSection/>
      <OurGuarantee/>
      <Promise/>
      <Faq/>
      <CompanyLogo/>
      <FooterSection/>
    </div>
  )
}

export default Home
