import { Card, CardContent } from "./ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Paris Market LLC",
      location: "Dubai",
      period: "Jan 2024 - Present",
      type: "Current Position",
      responsibilities: [
        "Designed and developed interactive dashboards for trading performance, customer analysis, and market trends using Power BI",
        "Analyzed large volumes of trading data to identify patterns, trends, and anomalies, improving decision-making efficiency",
        "Automated daily, weekly, and monthly reports for key stakeholders",
        "Performed data validation and quality checks on real-time trading data to ensure accuracy",
        "Monitored brokerage transactions, trade executions, and client portfolios to identify discrepancies and opportunities",
        "Conducted risk analysis and performance evaluation of trading strategies",
        "Supported compliance and audit teams with accurate trading data insights",
        "Built ETL processes to consolidate trading, customer, and financial data",
        "Developed KPI and performance metrics dashboards for trading desk and management"
      ]
    },
    {
      title: "Microsoft Power BI Developer",
      company: "Al Madina Group",
      location: "Dubai",
      period: "Feb 2021 - Dec 2023",
      type: "3 Years",
      responsibilities: [
        "Designed and created interactive dashboards and reports in Power BI to visualize key performance indicators (KPIs)",
        "Built robust data models in Power BI using ETL processes",
        "Connected Power BI to various data sources such as SQL Server, Excel files, Google Sheets",
        "Utilized Direct Query and Import modes to optimize performance based on data volume and real-time needs",
        "Published Power BI reports to the Power BI Service, enabling colleagues to access and interact with reports",
        "Configured row-level security and user access roles to ensure data confidentiality",
        "Created complex DAX (Data Analysis Expressions) formulas to calculate advanced metrics and perform time intelligence calculations",
        "Configured scheduled data refresh in Power BI Service to ensure reports display up-to-date information",
        "Collaborated with business teams to identify requirements and design reports that met specific analytical needs",
        "Translated complex data sets into actionable insights, empowering stakeholders to make informed business decisions"
      ]
    },
    {
      title: "Microsoft Power BI Developer",
      company: "Al Fayoum Foodstuff",
      location: "Sharjah",
      period: "2021",
      type: "Contract",
      responsibilities: [
        "Supply Chain Visualization",
        "Sales Target tracking and analysis",
        "Customer Churn Analysis",
        "Profitability Analysis",
        "Raw material Cost analysis",
        "Employee Performance Monitoring",
        "Customer Visit & Product Return Analysis",
        "Price Optimization and Margin Analysis"
      ]
    },
    {
      title: "Lecturer in Computer Science",
      company: "Darul Huda Arts & Science College",
      location: "Kerala, India",
      period: "2014 - 2016",
      type: "2 Years",
      responsibilities: [
        "Taught computer science courses at the undergraduate level",
        "Developed curriculum and course materials",
        "Mentored students in various computer science topics"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven track record of delivering high-impact BI solutions across 
            diverse industries and business contexts
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-slate-900 mb-1">{exp.title}</h3>
                        <p className="text-xl text-blue-600 mb-2">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 ml-15">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 flex items-center gap-2 w-fit">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700 w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="ml-0 lg:ml-15 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-sm text-slate-600 mb-4 uppercase tracking-wide">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex gap-3 text-slate-700">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">▪</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}