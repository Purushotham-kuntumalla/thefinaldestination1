import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, Stethoscope, Globe, GraduationCap, FileText, Award, Languages } from 'lucide-react';

const courses = [
  {
    name: 'IELTS',
    description: 'International English Language Testing System for study & immigration',
    icon: BookOpen,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'OET',
    description: 'Occupational English Test for healthcare professionals',
    icon: Stethoscope,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'PTE',
    description: 'Pearson Test of English for academic & migration purposes',
    icon: FileText,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'TOEFL',
    description: 'Test of English as a Foreign Language for academic success',
    icon: GraduationCap,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'NCLEX',
    description: 'National Council Licensure Examination for nursing professionals',
    icon: Award,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'DHA',
    description: 'Dubai Health Authority exam preparation for healthcare',
    icon: Globe,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'German Language',
    description: 'Comprehensive German language training from A1 to C2 levels',
    icon: Languages,
    gradient: 'from-yellow-500 to-amber-500',
  },
];

export function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dream Course
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert-led training programs designed to help you excel in your language and professional exams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`bg-gradient-to-r ${course.gradient}`}
                      />
                    </svg>
                  </motion.div>

                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
