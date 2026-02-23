import { Code, Cpu, Shield, Rocket, Users, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Test Automation',
      description: 'Transform manual test cases into automated tests with AI-powered generation and maintenance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'AI-Driven Analytics',
      description: 'Get intelligent insights and root cause analysis for test failures with machine learning',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Self-Healing Tests',
      description: 'Tests that automatically adapt to UI changes, reducing maintenance overhead significantly',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'CI/CD Integration',
      description: 'Seamlessly integrate with your existing pipelines for continuous testing and delivery',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable your entire team to work together with shared test management and reporting',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 dedicated support to help you maximize your testing efficiency and ROI',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to accelerate your testing workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
