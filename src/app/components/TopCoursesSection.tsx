import { motion } from 'motion/react';
import { Star, ArrowRight} from 'lucide-react';

const courses = [
  {
    title: 'IELTS Coaching',
    description: 'Expert-led training covering all four modules with intensive practice.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
    rating: 4.9,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'PTE Academic',
    description: 'AI-based mock tests and precision feedback for high scores.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    rating: 4.8,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'OET Preparation',
    description: 'Healthcare-focused English training for global professionals.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
    rating: 4.9,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'German Language',
    description: 'A1 to B2 level training for study, work, and PR in Germany.',
    image: 'https://images.unsplash.com/photo-1520975922284-7b683e15bd86',
    rating: 4.8,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'French Language',
    description: 'Beginner to advanced French for global education and careers.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    rating: 4.7,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Spoken English',
    description: 'Fluency, confidence, and real-world communication skills.',
    image: 'https://images.unsplash.com/photo-1498079022511-d15614cb1c02',
    rating: 4.6,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Interview Preparation',
    description: 'Mock interviews and soft skills training for global jobs.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    rating: 4.8,
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Study Abroad Counseling',
    description: 'University selection, SOP, visa & application guidance.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    rating: 4.9,
    gradient: 'from-violet-500 to-fuchsia-500',
  },
];


export function CourseSection() {
  return (
    <section id="our-courses" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Our Courses
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Learn with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              thefinaldestination Academy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Structured programs designed for global success
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={18} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {course.rating} / 5
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* CTA */}
                  <button
                    className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${course.gradient} hover:opacity-90 transition-all`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          

      </div>
      <div className="flex justify-center mt-16">
      <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-l from-purple-600 to-blue-600 text-white items-center  rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl hover:bg-gray-50 transition-all"
            >
              View More Courses
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            </div>
    </section>
  );
}

export default CourseSection;
