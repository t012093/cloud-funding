import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project/project-card";
import { Bot, Rocket, Target, Zap } from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const trendingProjects = [
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
  {
    id: "3",
    title: "UrbanGrow: Smart Community Gardens",
    description: "Building sustainable urban gardens with smart technology and community engagement.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200",
    creator: "Urban Solutions",
    currentAmount: 42000,
    targetAmount: 60000,
    backers: 528,
    daysLeft: 18,
    category: "Community",
  },
];

const newProjects = [
  {
    id: "4",
    title: "MindfulTech: AI Meditation Guide",
    description: "Personalized meditation experiences powered by artificial intelligence.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?q=80&w=1200",
    creator: "Wellness Innovations",
    currentAmount: 12000,
    targetAmount: 40000,
    backers: 145,
    daysLeft: 28,
    category: "Health",
  },
  {
    id: "5",
    title: "EduPlay: Interactive Learning Platform",
    description: "Making education fun and engaging with AI-powered interactive games.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
    creator: "EduTech Solutions",
    currentAmount: 18000,
    targetAmount: 35000,
    backers: 230,
    daysLeft: 25,
    category: "Education",
  },
  {
    id: "6",
    title: "GreenCommute: Sustainable Transport App",
    description: "Revolutionizing urban commuting with eco-friendly transportation solutions.",
    image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1200",
    creator: "Eco Mobility",
    currentAmount: 28000,
    targetAmount: 45000,
    backers: 312,
    daysLeft: 19,
    category: "Technology",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36">
            <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Launch Your Dreams with
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> AI </span>
              Power
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              AI-FUND revolutionizes crowdfunding by using artificial intelligence to help you create, manage, and succeed in your fundraising journey.
            </p>
            <div className="flex gap-4">
              <Link href="/create">
                <Button size="lg">
                  <Rocket className="mr-2 h-4 w-4" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <Bot className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">AI Assistant</h3>
              <p className="mt-2 text-muted-foreground">
                Get intelligent suggestions for project descriptions, rewards, and marketing strategies.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Smart Analytics</h3>
              <p className="mt-2 text-muted-foreground">
                Data-driven insights to optimize your campaign and reach your funding goals.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Instant Setup</h3>
              <p className="mt-2 text-muted-foreground">
                Launch your project in minutes with our streamlined creation process.
              </p>
            </Card>
          </div>
        </section>

        {/* Trending Projects Section */}
        <section className="container py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Trending Projects</h2>
            <Link href="/discover">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trendingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* New Projects Section */}
        <section className="container py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Projects</h2>
            <Link href="/discover">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}