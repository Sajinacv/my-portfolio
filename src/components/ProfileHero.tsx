import { MapPin, Mail, Phone, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function ProfileHero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
                <span className="text-8xl">👨‍💼
      </span>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-4">
              <span className="text-blue-200">Available for Immediate Joining</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              SAJINA C V
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-2">Microsoft Power BI Developer</h2>
            <h3 className="text-xl text-blue-300 mb-6">Data Analyst & Business Intelligence Expert</h3>
            
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Transforming complex data into actionable insights with 5+ years of expertise 
              in Power BI, SQL, and advanced analytics
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-white">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <Mail className="w-4 h-4 text-blue-300" />
                <a href="mailto:sajinaceevee@gmail.com" className="hover:text-blue-200 transition-colors text-white">
                  sajinaceevee@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <Phone className="w-4 h-4 text-blue-300" />
                <a href="tel:+971507579719" className="hover:text-blue-200 transition-colors text-white">
                  +971 507579719
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <Button 
                size="lg"
                className="gap-2 bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/sajinacv/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button 
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-700 border-2 border-blue-400 shadow-lg hover:shadow-xl transition-all"
              >
                 <a href="/sajinaCV.pdf" download></a>
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}