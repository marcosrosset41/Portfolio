"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-muted/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              My professional journey in Data field
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="Basis Tecnologia" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="SERPRO">SERPRO</TabsTrigger>
                <TabsTrigger value="Unidas Frotas">Unidas Frotas</TabsTrigger>
                <TabsTrigger value="V4 Company">V4 Company</TabsTrigger>
                <TabsTrigger value="Basis Tecnologia">Basis Tencologia</TabsTrigger>
              </TabsList>
              {/* SERPRO */}
              <TabsContent value="SERPRO" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/serpro.png"
                            alt="serpro Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            Intern
                          </h3>
                          <p className="text-primary font-medium">
                            SERPRO
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Sep/2021 - Sep/2023 · 2 years
                          </p>
                        </div>

                        <div className="space-y-3">
                      
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Support in the development of web and SaaS applications</li>
                              
                              <li>Maintenance of dashboards in Pentaho BI</li>
                              
                              <li>Collaboration with the data and network team in defining server capacity goals</li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              {/* V4 Company*/}
<TabsContent value="V4 Company" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/v4.jpg"
                            alt="v4 Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            JR Data Analyst
                          </h3>
                          <p className="text-primary font-medium">
                            V4 Company
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Set/2023 – Nov/2023 · 2 meses
                          </p>
                        </div>

                        <div className="space-y-3">
                      
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Implementing data flows from Google Ads and Facebook Ads campaigns
</li>
                              
                              <li>Building sales funnels as a basis for metrics
</li>
                              
                              <li>Applying marketing strategies to data analysis
</li>
                              <li>Defining and monitoring performance metrics</li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
{/* UNIDAS FROTAS */}
              <TabsContent value="Unidas Frotas" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/LogoUnidas.png"
                            alt="Unidas Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            JR Data Analyst
                          </h3>
                          <p className="text-primary font-medium">
                            Unidas Frotas
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Nov/2023 - Out/2024 · 1 ano
                          </p>
                        </div>

                        <div className="space-y-3">
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>Fleet data routine management with suppliers</li>
                            <li>Operational analysis and reports in Power BI</li>
                            <li>Real-time monitoring of vehicle location, maintenance time, stages and costs</li>
                            <li>Creation of strategic indicators for stakeholders</li>
                            <li>Development of predictive models with supervised algorithms in Python</li>
                            <li>Optimization of logistics resources with Machine Learning</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
{/* BASIS TECNOLOGIA */}
              <TabsContent value="Basis Tecnologia" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/Basis.jpg"
                            alt="Basis Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            Mid Data Analyst
                          </h3>
                          <p className="text-primary font-medium">
                            Basis Tecnologia SA
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Out/2024 - Maio/2025 · 8 meses
                          </p>
                        </div>

                        <div className="space-y-3">
                  
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>Development of interactive dashboards in Qlik Sense
</li>
                            <li>Creation of ETL processes with a focus on Python
</li>
                            <li>Data processing and transformation in Big Data environments
</li>
                            <li>Development and monitoring of strategic KPIs
</li>
                            <li>Integration of data sources via APIs
</li>
                            <li>Querying and manipulating data in SQL databases</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
