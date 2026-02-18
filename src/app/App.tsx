import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import {CourseSection} from './components/TopCoursesSection';   
import {ServicesSection} from './components/ServicesSection';   
import {JobPlacementsSection} from './components/JobsSectioins';   
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import {AboutSection} from './components/Aboutus'
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ServicesSection />
      <CourseSection />
       <JobPlacementsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      
      {/* <Footer /> */}
    </div>
  );
}
