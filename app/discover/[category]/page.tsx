import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - In a real app, this would come from an API
const categoryProjects = {
  technology: [
    {
      id: "1",
      title: "EcoTech: Revolutionary Sustainable Energy Solution",
      description: "A groundbreaking approach to renewable energy that could transform how we power our homes.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200",
      creator: "Green Innovation Labs",
      currentAmount: 85000,
      targetAmount: 100000,
      backers: 742,
      daysLeft: 15,
      category: "Technology",
    },
    // Add more technology projects...
  ],
  creative: [
    {
      id: "2",
      title: "ArtisanAI: Empowering Creative Communities",
      description: "Supporting local artisans with AI-powered tools to reach global markets.",
      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1200",
      creator: "Creative Futures",
      currentAmount: 25000,
      targetAmount: 50000,
      backers: 310,
      daysLeft: 21,
      category: "Creative",
    },
    // Add more creative projects...
  ],
  // Add more categories...
};

const categoryTitles = {
  technology: "Technology Projects",
  creative: "Creative Projects",
  community: "Community Projects",
  health: "Health & Wellness Projects",
  education: "Education Projects",
  environment: "Environmental Projects",
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const projects = categoryProjects[category as keyof typeof categoryProjects] || [];
  const title = categoryTitles[category as keyof typeof categoryTitles] || "Projects";

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex gap-4">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="funded">Most Funded</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No projects found</h2>
            <p className="text-muted-foreground mb-8">
              Be the first to start a project in this category!
            </p>
            <Button asChild>
              <a href="/create">Start a Project</a>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}