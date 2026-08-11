export type SkillLevel = "expert" | "advanced" | "intermediate" | "beginer";

export interface SkillItem {
  id: number;
  name: string;
  icon: string;
  level: SkillLevel;
  levelLabel: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}


export  const skills : SkillCategory[] =
[
  {
    "id": "frontend",
    "category": "Frontend",
    "subtitle": "skills",
    "icon": "web",
    "skills": [
      {
        "id": 1,
        "name": "React.js",
        "icon": "/img/gambar1.jpg",
        "level": "advanced",
        "levelLabel": "Advanced"
      },
      {
        "id": 2,
        "name": "Tailwind CSS",
        "icon": "/img/gambar1.jpg",
        "level": "expert",
        "levelLabel": "Expert"
      },
      {
        "id": 3,
        "name": "TypeScript",
        "icon": "/img/gambar1.jpg",
        "level": "intermediate",
        "levelLabel": "Intermediate"
      },
      {
        "id": 4,
        "name": "Next.js",
        "icon": "/img/gambar1.jpg",
        "level": "intermediate",
        "levelLabel": "Intermediate"
      }
    ]
  },
  {
    "id": "backend",
    "category": "Backend",
    "subtitle": "skills",
    "icon": "terminal",
    "skills": [
      {
        "id": 1,
        "name": "Laravel",
        "icon": "/img/gambar1.jpg",
        "level": "beginer",
        "levelLabel": "Beginner"
      },
      {
        "id": 2,
        "name": "Node.js",
        "icon": "/img/gambar1.jpg",
        "level": "intermediate",
        "levelLabel": "Intermediate"
      },
      {
        "id": 3,
        "name": "MySQL",
        "icon": "/img/gambar1.jpg",
        "level": "intermediate",
        "levelLabel": "Intermediate"
      },
      {
        "id": 4,
        "name": "Express.js",
        "icon": "/img/gambar1.jpg",
        "level": "beginer",
        "levelLabel": "Beginner"
      }
    ]
  },
  {
    "id": "tools",
    "category": "Tools & Workflow",
    "subtitle": "skills",
    "icon": "build",
    "skills": [
      {
        "id": 1,
        "name": "Git & GitHub",
        "icon": "/img/gambar1.jpg",
        "level": "advanced",
        "levelLabel": "Advanced"
      },
      {
        "id": 2,
        "name": "Figma",
        "icon": "/img/gambar1.jpg",
        "level": "intermediate",
        "levelLabel": "Intermediate"
      },
      {
        "id": 3,
        "name": "VS Code",
        "icon": "/img/gambar1.jpg",
        "level": "expert",
        "levelLabel": "Expert"
      },
      {
        "id": 4,
        "name": "Postman",
        "icon": "/img/gambar1.jpg",
        "level": "intermediate",
        "levelLabel": "Intermediate"
      }
    ]
  }
]
