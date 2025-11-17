import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Linkedin, MessageSquare, Send } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <span className="text-blue-200">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and challenging projects. 
            Let's discuss how I can contribute to your team's success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group">
            <CardContent className="py-8">
              <a 
                href="mailto:sajinaceevee@gmail.com" 
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200 mb-1 uppercase tracking-wide">Email Address</p>
                  <p className="text-xl text-white">sajinaceevee@gmail.com</p>
                  <p className="text-sm text-slate-300 mt-2">Available 24/7 for professional inquiries</p>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group">
            <CardContent className="py-8">
              <a 
                href="tel:+971507579719" 
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200 mb-1 uppercase tracking-wide">Phone Number</p>
                  <p className="text-xl text-white">+971 507579719</p>
                  <p className="text-sm text-slate-300 mt-2">Call or WhatsApp anytime</p>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group">
            <CardContent className="py-8">
              <a 
                href="https://www.linkedin.com/in/sajinacv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200 mb-1 uppercase tracking-wide">LinkedIn Profile</p>
                  <p className="text-xl text-white">linkedin.com/in/sajinacv</p>
                  <p className="text-sm text-slate-300 mt-2">Connect professionally on LinkedIn</p>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 group">
            <CardContent className="py-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200 mb-1 uppercase tracking-wide">Location</p>
                  <p className="text-xl text-white">Dubai, UAE</p>
                  <p className="text-sm text-slate-300 mt-2">Family Visa • Immediate Joining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h3 className="text-3xl mb-4">Ready to Start a Conversation?</h3>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about data analytics and BI, 
            I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="gap-2 bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:sajinaceevee@gmail.com">
                <Send className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button 
              size="lg" 
              className="gap-2 bg-blue-600 hover:bg-blue-700 border-2 border-blue-400 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
              asChild
            >
              <a href="https://www.linkedin.com/in/sajinacv/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-slate-300">
            © 2025 Sajina C V • Available for Immediate Joining • Dubai, UAE
          </p>
        </div>
      </div>
    </section>
  );
}