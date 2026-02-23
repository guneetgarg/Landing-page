import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 100 test cases',
        'Basic automation',
        'Standard reporting',
        'Email support',
        '5 team members'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '149',
      description: 'For growing teams with advanced needs',
      features: [
        'Unlimited test cases',
        'AI-powered automation',
        'Advanced reporting & analytics',
        'Priority support',
        'Unlimited team members',
        'Self-healing tests',
        'CI/CD integration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations at scale',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated support team',
        'SLA guarantee',
        'Advanced security',
        'Custom training',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl scale-105'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  {plan.price !== 'Custom' && <span className="text-3xl font-bold text-gray-900">$</span>}
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600 ml-2">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className={`${plan.popular ? 'text-blue-600' : 'text-gray-400'} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          All plans include 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
