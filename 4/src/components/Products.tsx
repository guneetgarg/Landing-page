import { FlaskConical, BarChart3, CheckCircle2, Sparkles, Video, FileText, TrendingUp, Zap, ArrowRight, Code, Brain, Shield, Clock, Workflow } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful AI-Driven Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two complementary platforms that work together to revolutionize your testing workflow
          </p>
        </div>

        <div className="space-y-20">
          <div className="group bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-3xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 p-12">
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <FlaskConical size={40} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">QA Path</h3>
                    <p className="text-lg text-blue-600 font-semibold">AI-Powered Test Automation</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  Transform your testing workflow with intelligent automation. Simply add your test cases and let AI generate, maintain, and optimize your test scripts automatically. No manual scripting required.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Test Management</p>
                      <p className="text-sm text-gray-600">Centralized organization and version control</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">AI Auto-Generation</p>
                      <p className="text-sm text-gray-600">Generates test scripts from descriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Self-Healing</p>
                      <p className="text-sm text-gray-600">Tests auto-adapt to UI changes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Auto-Maintenance</p>
                      <p className="text-sm text-gray-600">Continuous test optimization</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://qa-path.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl group/btn w-fit"
                >
                  <span>Try QA Path Now</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="relative hidden lg:flex items-center justify-center min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl blur-3xl"></div>
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-blue-100 bg-white">
                  <img
                    src="/qapath-product.svg"
                    alt="QA Path - AI-powered test automation dashboard"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-3xl overflow-hidden border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 p-12">
              <div className="relative hidden lg:flex items-center justify-center min-h-[320px] order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-3xl"></div>
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-emerald-100 bg-white">
                  <img
                    src="/testlens-product.svg"
                    alt="Testlens - AI-powered test reporting with videos, charts, and root cause insights"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <BarChart3 size={40} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">Testlens</h3>
                    <p className="text-lg text-emerald-600 font-semibold">AI-Powered Test Reporting</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  Comprehensive test execution analytics and reporting. Record Playwright runs, capture videos and screenshots, and leverage AI to instantly identify root causes of test failures with actionable insights.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Execution Recording</p>
                      <p className="text-sm text-gray-600">Full video & trace capture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Rich Reports</p>
                      <p className="text-sm text-gray-600">Videos, screenshots, traces</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">AI Analytics</p>
                      <p className="text-sm text-gray-600">Root cause analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Insights Dashboard</p>
                      <p className="text-sm text-gray-600">Failure patterns & trends</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://testlens.qa-path.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl group/btn w-fit"
                >
                  <span>Explore Testlens</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Together, They're Unstoppable</h3>
              <p className="text-lg mb-8 text-blue-100">
                Use QA Path to create and automate your tests, then leverage Testlens to analyze execution results with AI-powered insights. A complete testing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center space-x-3 justify-center">
                  <Workflow size={20} />
                  <span>Seamless Integration</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <Shield size={20} />
                  <span>Enterprise Grade</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <Code size={20} />
                  <span>AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
