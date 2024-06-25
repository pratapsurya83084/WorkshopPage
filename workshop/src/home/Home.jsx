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
const Home = () => {
  return (
    <div>
      <AboutSection/>
      <ActionBluePrint/>
      <LimitedSeats/>
      <InspiringFeedback/>
      <RevenuPicture/>
     
      <TransfromativeJourny/>
      <SeminarSection/>
      <LearnFourHours/>
      <SixTestimonials/>
      <CoachSection/>
      <Faq/>
      <CompanyLogo/>
      <FooterSection/>
    </div>
  )
}

export default Home
