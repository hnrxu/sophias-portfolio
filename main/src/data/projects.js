export const projects = [
  {
    id: 1,
    title: "studysensei",
    desc: "Full-stack RAG study assistant where users upload PDFs and lecture recordings for AI-powered Q&A, flashcard generation, and ASMR-style audio notes.",
    tags: ["react", "typescript", "node.js", "supabase", "openai", "elevenlabs"],
    category: "web",
    status: "live",
    icon: "",
    accent: "linear-gradient(90deg, #7F77DD, #AFA9EC)",
    links: { "try it out": "https://sophias-study-tool.vercel.app/", demo: "https://drive.google.com/file/d/1_9gmnRUCFTl40kReGvYYp7NrXLcGAVv-/view?usp=share_link", github: "https://github.com/hnrxu/sophias_study_tool.git" },
  },
  {
    id: 2,
    title: "finance analytics platform",
    desc: "Production-grade personal finance platform integrating Plaid APIs for multi-user account linking, real-time transaction ingestion, and spending pattern analytics.",
    tags: ["java", "dropwizard", "postgresql", "react", "typescript", "plaid"],
    category: "api",
    status: "live",
    icon: "",
    accent: "linear-gradient(90deg, #9e1d93ff, #ca5db4ff)",
    links: { "try it out": "https://sophias-finance-app.vercel.app/", demo: "https://drive.google.com/file/d/10IA-rSKLjjX_C_-RE7WrUpzg6XSjqjAF/view?usp=share_link", github: "https://github.com/hnrxu/sophias-finance-app.git"},
  },
];

export const statusColors = {
  live: { bg: "#EAF3DE", color: "#3B6D11" },
  wip: { bg: "#FAEEDA", color: "#854F0B" },
  archived: { bg: "#F1EFE8", color: "#5F5E5A" },
};

export const filters = ["all", "web", "api"];