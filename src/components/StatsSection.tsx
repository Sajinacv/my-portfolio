import { TrendingUp, Users, BarChart, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "5+",
      label: "Years Experience",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart,
      value: "20+",
      label: "Projects Delivered",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      value: "3",
      label: "Major Companies",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      value: "15+",
      label: "Skills Mastered",
      color: "from-violet-500 to-violet-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
