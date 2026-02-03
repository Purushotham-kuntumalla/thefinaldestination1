import { motion } from 'motion/react';
import { MapPin, Globe, Briefcase } from 'lucide-react';

const jobPlacements = [
  {
    country: 'United States',
    short: 'USA',
    description: 'Nursing and healthcare job placements across top hospitals in the USA.',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    country: 'Canada',
    short: 'Canada',
    description: 'Permanent and temporary healthcare placements with PR pathways.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    country: 'Ireland',
    short: 'Ireland',
    description: 'Registered nurse placements through NMBI-approved employers.',
    gradient: 'from-green-600 to-emerald-500',
  },
  {
    country: 'Australia',
    short: 'Australia',
    description: 'Skilled nursing jobs with sponsorship and relocation support.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    country: 'New Zealand',
    short: 'New Zealand',
    description: 'High-demand nursing roles with excellent work-life balance.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    country: 'United Kingdom',
    short: 'UK',
    description: 'NHS and private hospital nursing placements.',
    gradient: 'from-purple-600 to-violet-600',
  },
  {
    country: 'Gulf Countries',
    short: 'Gulf',
    description: 'Tax-free healthcare job opportunities across GCC countries.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    country: 'Malta',
    short: 'Malta',
    description: 'European nursing placements with fast-track processing.',
    gradient: 'from-pink-500 to-fuchsia-500',
  },
  {
    country: 'Maldives',
    short: 'Maldives',
    description: 'Premium hospital and resort healthcare job placements.',
    gradient: 'from-sky-500 to-blue-500',
  },
];

export function JobPlacementsSection() {
  return (
    <section
      id="job-placements"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            Job Placements
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Global{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Career Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted overseas job placements for nursing and healthcare professionals
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPlacements.map((job, index) => (
            <motion.div
              key={job.country}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${job.gradient} flex items-center justify-center`}
                >
                  <Globe className="text-white" size={26} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.country}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>

                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobPlacementsSection;
