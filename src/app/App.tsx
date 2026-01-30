import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import {CourseSection} from './components/TopCoursesSection';   
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <CourseSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
