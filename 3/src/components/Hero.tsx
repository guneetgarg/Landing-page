import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-pulse">
            <Sparkles size={16} />
            <span className="text-sm font-medium">AI-Powered Testing & Reporting Platform</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Testing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              With AI Automation
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Experience the future of QA with intelligent test automation and powerful AI-driven analytics.
            Automate, heal, and report - all in one seamless platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://qa-path.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Started Free</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-gray-200 shadow-sm"
            >
              Explore Products
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-600 text-sm">AI Automated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">10x</p>
              <p className="text-gray-600 text-sm">Faster Testing</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">Zero</p>
              <p className="text-gray-600 text-sm">Manual Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
