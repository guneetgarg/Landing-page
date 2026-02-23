import { FlaskConical, BarChart3, CheckCircle2, Sparkles, Video, FileText, TrendingUp, Zap } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Two powerful tools designed to revolutionize your testing workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <FlaskConical size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">QA Path</h3>
                <p className="text-sm text-gray-600">AI-Powered Test Automation</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Intelligent test management and automation platform that writes and maintains your tests automatically.
              Just add your test cases and watch AI do the rest.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Test Case Management</p>
                  <p className="text-sm text-gray-600">Organize and manage all your test cases in one place</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Sparkles size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Auto-Automation</p>
                  <p className="text-sm text-gray-600">AI automatically generates test automation scripts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Self-Healing Tests</p>
                  <p className="text-sm text-gray-600">Tests automatically adapt to UI changes</p>
                </div>
              </div>
            </div>

            <a
              href="https://qa-path.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold w-full text-center group-hover:shadow-lg"
            >
              Try QA Path
            </a>
          </div>

          <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Testlens</h3>
                <p className="text-sm text-gray-600">AI-Powered Test Reporting</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Advanced reporting and analytics tool for Playwright executions. Get deep insights with AI-driven
              failure analysis, videos, screenshots, and traces.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <Video size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Execution Recording</p>
                  <p className="text-sm text-gray-600">Record and replay Playwright test executions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Rich Reports</p>
                  <p className="text-sm text-gray-600">Videos, screenshots, and detailed trace logs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">AI Failure Analytics</p>
                  <p className="text-sm text-gray-600">Intelligent analysis to identify root causes instantly</p>
                </div>
              </div>
            </div>

            <a
              href="https://testlens.qa-path.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold w-full text-center group-hover:shadow-lg"
            >
              Try Testlens
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
