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
import OneVideoSection   from '../components/OneVideoSection'
import BookSection  from '../components/BookSection'
const Home = () => {
  return (
    <div>
      <AboutSection/>
      <ActionBluePrint/>
      <LimitedSeats/>
      <InspiringFeedback/>
      <RevenuPicture/>
     <OneVideoSection/>
      <TransfromativeJourny/>
      <BookSection/>
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
