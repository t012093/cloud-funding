"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    creator: string;
    currentAmount: number;
    targetAmount: number;
    backers: number;
    daysLeft: number;
    category: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progress = (project.currentAmount / project.targetAmount) * 100;

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-2">
            <span className="text-sm font-medium text-muted-foreground">
              {project.category}
            </span>
            <h3 className="font-semibold line-clamp-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="space-y-2 w-full">
            <Progress value={progress} className="h-1" />
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <div className="font-semibold">${project.currentAmount.toLocaleString()}</div>
                <div className="text-muted-foreground">raised</div>
              </div>
              <div>
                <div className="font-semibold">{project.backers}</div>
                <div className="text-muted-foreground">backers</div>
              </div>
              <div>
                <div className="font-semibold">{project.daysLeft}</div>
                <div className="text-muted-foreground">days left</div>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}