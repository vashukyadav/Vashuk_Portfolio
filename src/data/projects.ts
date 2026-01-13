import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "event-management-system",
    title: "Event Management System",
    description:
      "A full-stack Event Management Platform where users can browse event services (wedding, birthday, decoration, tent services) and book according to budget. Built with MERN Stack.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: "restaurant-management-system",
    title: "Restaurant Management System",
    description:
      "A terminal-based Restaurant Management System developed using Core Java and JDBC. Worked in a 4-member team to manage database operations for menu, orders, and billing modules.",
    icon: "/skills/java.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    tags: ["Java", "JDBC", "Database", "Team Project"],
  },
  {
    id: "expense-tracker-web-app",
    title: "Expense Tracker Web App",
    description:
      "A client-side Expense Tracker built using Vanilla JavaScript, HTML, and CSS. Features add, edit, and delete functionality for daily expenses with localStorage persistence and category-wise filtering.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
  },
];
export default projects;
