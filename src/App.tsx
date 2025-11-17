import { ProfileHero } from "./components/ProfileHero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Navigation } from "./components/Navigation";
import { StatsSection } from "./components/StatsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProfileHero />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}