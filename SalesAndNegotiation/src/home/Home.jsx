import React from 'react'
import HeadingText  from '../components/HeadingText'
import AboutSection  from '../components/AboutSection'
import WorkshopAttens  from '../components/WorkshopAttens'
import ActionBluePrint   from '../components/ActionBluePrint'
import LimitedSeats  from '../components/LimitedSeats'
import InspiringFeedback   from '../components/InspiringFeedback'
import RevenuPicture  from '../components/RevenuPicture'
import TransfromativeJourny   from '../components/TransfromativeJourny'
import Faq  from '../components/Faq'
import SeminarSection   from '../components/SeminarSection'
import FooterSection  from '../components/FooterSection'
import LearnThreeHours  from '../components/LearnThreeHours'
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
import CompanyPicture  from '../components/CompanyPicture'
import NewsFeature  from  '../components/NewsFeature'
const Home = () => {
  return (
    <div>
      <HeadingText/>
      <AboutSection/>
      <WorkshopAttens/>
      <NewsFeature/>
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
      <CompanyPicture/>
      <SeminarSection/>
      <LearnThreeHours/>
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
