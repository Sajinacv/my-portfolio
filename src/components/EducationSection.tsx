import { Card, CardContent } from "./ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "MES College of Engineering",
      period: "2010 - 2013",
      description: "Advanced studies in computer applications and software development"
    },
    {
      degree: "BSc Computer Science",
      institution: "NAM College (Kannur University)",
      period: "2007 - 2010",
      description: "Undergraduate studies in computer science fundamentals"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science and applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' : 'from-indigo-500 to-indigo-600'} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 mb-3">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-slate-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-slate-600">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}