import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Database, BarChart3, Code, Workflow, GitBranch, Users } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Data Analysis & BI",
      color: "from-blue-500 to-blue-600",
      skills: ["Microsoft Power BI","DAX","Power Query ", "SQL", "Excel", "Python ", "Data Visualization", "Dashboard Design"]
    },
    {
      icon: Database,
      title: "Database & Data Management",
      color: "from-indigo-500 to-indigo-600",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Data Modeling", "Data Warehousing"]
    },
    {
      icon: Workflow,
      title: "ETL & Automation",
      color: "from-purple-500 to-purple-600",
      skills: ["ETL Processes", "Power Apps", "Power Automate", "Scheduled Refresh"]
    },
    {
      icon: Code,
      title: "Technical Skills",
      color: "from-violet-500 to-violet-600",
      skills: ["DAX", "REST APIs","FASTApi", "Git", "HTML", "CSS", "MS Office"]
    },
    {
      icon: Users,
      title: "Business & Leadership",
      color: "from-pink-500 to-pink-600",
      skills: ["Team Leadership", "Project Management", "Stakeholder Communication", "Requirements Analysis"]
    },
    {
      icon: GitBranch,
      title: "Specialized Areas",
      color: "from-rose-500 to-rose-600",
      skills: ["KPI Development", "Risk Analysis", "Compliance Reporting", "Performance Evaluation"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning business intelligence, data engineering, 
            and advanced analytics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg text-slate-900">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}