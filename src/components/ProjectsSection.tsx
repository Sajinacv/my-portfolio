import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Package, DollarSign, Users, ShoppingCart, FileText, Target, Activity } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      icon: TrendingUp,
      title: "Sales & Target Data Analysis",
      description: "Comprehensive sales analysis with WTD, MTD, QTD, and YTD metrics",
      color: "from-blue-500 to-blue-600",
      tags: ["Power BI", "DAX", "Time Intelligence"]
    },
    {
      icon: Package,
      title: "Inventory Management Suite",
      description: "Complete inventory tracking including Ageing Stock, Dead Stock, Negative Stock, Product Availability, Ideal Stock, GP Analysis, and Annual Stock Variance Analysis",
      color: "from-indigo-500 to-indigo-600",
      tags: ["Data Modeling", "ETL", "KPI Development"]
    },
    {
      icon: DollarSign,
      title: "Financial Reporting",
      description: "P&L Comparison and Executive Dashboards for decision-makers with comprehensive summary pages",
      color: "from-purple-500 to-purple-600",
      tags: ["Financial Analysis", "Executive Reporting"]
    },
    {
      icon: ShoppingCart,
      title: "Fresh Item Monitoring",
      description: "Real-time monitoring and visit report analysis using Power BI integrated with Power Apps",
      color: "from-violet-500 to-violet-600",
      tags: ["Power BI", "Power Apps", "Real-time Data"]
    },
    {
      icon: FileText,
      title: "Cash & Credit Analysis",
      description: "Invoice LP Comparison across outlets and warehouse stock monitoring",
      color: "from-pink-500 to-pink-600",
      tags: ["Comparative Analysis", "Multi-location Reporting"]
    },
    {
      icon: Target,
      title: "Benchmarking Dashboard",
      description: "Performance benchmarking across various business metrics and outlets",
      color: "from-rose-500 to-rose-600",
      tags: ["Performance Metrics", "Comparative Analysis"]
    },
    {
      icon: Users,
      title: "Customer Analytics",
      description: "Customer Churn Analysis, Visit Analysis, and Product Return Analysis",
      color: "from-orange-500 to-orange-600",
      tags: ["Customer Insights", "Retention Analysis"]
    },
    {
      icon: Activity,
      title: "Risk & Compliance",
      description: "Risk analysis for trading strategies and compliance reporting for audit teams",
      color: "from-emerald-500 to-emerald-600",
      tags: ["Risk Management", "Compliance", "Trading Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Key Projects & Implementations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Successfully delivered comprehensive BI solutions across various business domains, 
            driving data-driven decision making and operational efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start gap-3">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-lg leading-tight text-slate-900">{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-slate-200 text-slate-700 bg-white"
                      >
                        {tag}
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