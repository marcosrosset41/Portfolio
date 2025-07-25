"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

// Dashboards Power BI
const reports = [
  {
    id: 1,
    title: "Workshop Monitoring / Unidas Frotas",
    description: "Dashboard for monitoring fleet maintenance activities with dynamic filters and service-type breakdowns.",
    embedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzc4ZTRjYmItMjBkYS00ZWFlLTg0MjctOGVjZTFjYWQ4ODY4IiwidCI6ImI5YTA1NDA2LTFlNzgtNDBhZC1iNGRmLTY3MjVhN2Q5MjYyYSJ9",
  },
  {
    id: 2,
    title: "Storage Usage / Server Traffic Consumption Report",
    description: "Monitoring report for server storage usage and network traffic, including real-time KPIs and trend analysis.",
    embedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZmQ0MzBhN2ItMDI5NC00ZTI0LTk3Y2MtMWFmOTY5Nzc3YjJhIiwidCI6ImI5YTA1NDA2LTFlNzgtNDBhZC1iNGRmLTY3MjVhN2Q5MjYyYSJ9",
  },
  {
    id: 3,
    title: "Campaign Results Management / V4",
    description: "Performance dashboard for marketing campaigns, with conversion tracking, ROI, and multi-channel comparison.",
    embedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMzRiZmI3NzktYWJiYi00MTY2LWE4ZmItMDVmNjg0YzM2NjI2IiwidCI6ImI5YTA1NDA2LTFlNzgtNDBhZC1iNGRmLTY3MjVhN2Q5MjYyYSJ9",
  },
  {
    id: 4,
    title: "Investor Monitoring with Google Finance API",
    description: "Real-time investment tracking dashboard integrated with Google Finance API for monitoring financial assets.",
    embedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiN2I4MDllMDAtOGYwZC00MzYwLWE3ZjAtNTBmZWNjZGZlNDE5IiwidCI6ImI5YTA1NDA2LTFlNzgtNDBhZC1iNGRmLTY3MjVhN2Q5MjYyYSJ9",
  },
];


// Repositórios GitHub
const repos = [
  {
    id: 1,
    title: "ChatBot Automation",
    description:
      "Python tool to automate search of specific items on different websites",
    tech: ["Python", "TensorFlow", "AutoScraper", "llama"],
    url: "https://github.com/marcosrosset41/Python/tree/main/ChatBot_LLM_Llama",
  },
  {
    id: 2,
    title: "Future price model",
    description:
      "Python ML Model that predicts prices of assets (experimental)",
    tech: ["Python", "TensorFlow", "YFinance", "Pandas", "Numpy"],
    url: "https://github.com/marcosrosset41/Python/blob/main/Modelo%20previs%C3%A3o%20de%20pre%C3%A7os%20com%20DeepLearning%20Sequential.ipynb",
  },

{
    id: 3,
    title: "ML model for fraud prevention",
    description:
      "Python ML Model for fraud prevention using KNN and RF",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    url: "https://github.com/marcosrosset41/Python/blob/main/Modelo_previs%C3%A3o_de_fraudes_com_KNN_e_RandomForest.ipynb",
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 bg-muted/5" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Título da seção */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projects & Dashboards</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              A selection of dashboards and GitHub repositories showcasing my work in data,
              automation and code development.
            </p>
          </motion.div>

          {/* Dashboards Power BI */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-xl font-semibold text-center">Power BI Dashboards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reports.map((report) => (
                <Card
                  key={report.id}
                  className="border border-border/40 bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all group"
                >
                  <CardHeader>
                    <CardTitle>{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-64">
                      <iframe
                        title={report.title}
                        src={report.embedUrl}
                        allowFullScreen
                        className="w-full h-full rounded-md border"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* GitHub Repos */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-xl font-semibold text-center">GitHub Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo) => (
                <Card key={repo.id} className="hover:shadow-lg transition-all group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-primary" />
                      {repo.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{repo.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {repo.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full mt-4" variant="outline">
                        View on GitHub
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
