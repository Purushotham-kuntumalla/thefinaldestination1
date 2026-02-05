import { motion } from 'motion/react';
import {
  FileCheck,
  ShieldCheck,
  Stethoscope,
  Globe,
  ClipboardCheck,
  Database,
  Award,
} from 'lucide-react';

const services = [
  {
    title: 'All India Nursing Council Certificate Renewal',
    description: 'End-to-end support for AINC certificate renewals with accuracy and speed.',
    icon: FileCheck,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'NUID',
    description: 'Assistance with NUID registration and verification for nursing professionals.',
    icon: ShieldCheck,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'NMC',
    description: 'National Medical Commission documentation and compliance support.',
    icon: Stethoscope,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'CGFNS – TrueMerit',
    description: 'Complete guidance for CGFNS TrueMerit credential evaluation.',
    icon: Globe,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'NMBI',
    description: 'Support for Nursing and Midwifery Board of Ireland registration process.',
    icon: ClipboardCheck,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Data Flow',
    description: 'Secure data flow verification for international nursing applications.',
    icon: Database,
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'NRBS',
    description: 'NRBS registration and documentation handled by experienced professionals.',
    icon: Award,
    gradient: 'from-violet-500 to-fuchsia-500',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
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
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nursing Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted documentation and credential services for global nursing careers
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-3xl bg-white border border-gray-100  hover:shadow-2xl transition-all duration-300 ">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
