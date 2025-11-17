import { Briefcase, Award, Heart, Target, Lightbulb, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Data-Driven Professional
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized in transforming raw data into strategic business intelligence 
            that drives growth and operational excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">5+ Years</h3>
                <p className="text-slate-600">
                  Extensive experience in data analysis, reporting, and visualization across various industries
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1 bg-gradient-to-br from-indigo-50 to-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">MCA Qualified</h3>
                <p className="text-slate-600">
                  Master of Computer Applications with strong foundation in IT and computer science
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">Dubai Based</h3>
                <p className="text-slate-600">
                  Family visa holder in UAE, ready for immediate joining and long-term commitment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-br from-slate-900 to-blue-900 border-none shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <CardContent className="py-12 px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl mb-6 text-white">Professional Summary</h3>
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  Dedicated Business Intelligence professional with <span className="text-blue-300">5 years of experience</span> in 
                  data analysis, reporting, and visualization. Proven track record of translating complex data into 
                  actionable insights for informed decision-making.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed">
                  Seeking to leverage expertise in BI tools and methodologies to contribute to a dynamic team 
                  and drive business success through data-driven strategies.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Results-Oriented</h4>
                    <p className="text-slate-300 text-sm">Focused on delivering measurable business outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Innovative Thinker</h4>
                    <p className="text-slate-300 text-sm">Creative problem-solver with analytical mindset</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Quick Learner</h4>
                    <p className="text-slate-300 text-sm">Rapidly adapts to new technologies and methodologies</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}