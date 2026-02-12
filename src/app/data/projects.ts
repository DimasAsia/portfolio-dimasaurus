export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  type: "web" | "infrastructure" | "case-study";
  tech: string[];
  image: string;
  demoUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "banking-monitoring-dashboard",
    title: "Banking Monitoring Dashboard",
    shortDescription:
      "Internal monitoring system for transaction health, alerting, and performance metrics.",
    description: "Internal monitoring system for transaction health, alerting, and performance metricsInternal monitoring system for transaction health, alerting, and performance metrics..",
    type: "web", // 🔥 penting
    tech: ["Next.js", "Tailwind", "MySQL", "PMM"],
    image: "/window.svg",

    demoUrl: "https://internal-demo.example.com",
    repoUrl: null,

    featured: true,
  },

  {
    id: 2,
    slug: "percona-xtradb-cluster-3dc",
    title: "Percona XtraDB Cluster (3 Data Centers)",
    shortDescription:
      "High availability MySQL cluster with multi-DC topology and failover strategy.",
    type: "infrastructure",
    tech: ["Percona", "MySQL", "HAProxy", "Linux"],
    image: "/window.svg",

    demoUrl: null, // ❗ infra = null
    repoUrl: null,

    featured: true,
  },

  {
    id: 3,
    slug: "xtradb-performance-testing",
    title: "Database Performance & Stress Testing",
    shortDescription:
      "Stress testing and benchmarking of MySQL clusters using sysbench and JMeter.",
    type: "case-study",
    tech: ["MySQL", "Sysbench", "JMeter"],
    image: "/window.svg",

    demoUrl: null,
    repoUrl: "https://github.com/DimasAsia",

    featured: false,
  },
];