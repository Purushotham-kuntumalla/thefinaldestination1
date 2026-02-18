import { motion } from 'motion/react';
import { Calendar, User } from 'lucide-react';
import founderImg from '../../assets/founder.png';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            About Us
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Story Behind{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              TheFinalDestination
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering nurses and healthcare professionals to achieve global careers through trusted coaching and expert guidance.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl max-w-md h-[380px] sm:h-[420px] overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={founderImg}
                alt="Founder Sajan Vavilla"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Established Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Calendar className="text-white" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Established 2022</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Since 2022, TheFinalDestination has helped healthcare professionals achieve their international career goals through expert coaching and global placement guidance.
              </p>
            </div>

            {/* Founder Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <User className="text-white" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Founder, Management & CEO
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">Sajan Vavilla</span> leads the academy with a strong vision to provide transparent, student-focused guidance for nurses and healthcare professionals aiming to work abroad.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
