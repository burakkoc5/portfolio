"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { AuroraButton } from "@/components/ui/aurora-button";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles } from "lucide-react";

export default function Home() {
  const timelineData = [
    {
      title: "2023 - Devam",
      content: (
        <div>
          <h3 className="font-bold text-xl">Borda Technology</h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            Part-Time Mobile Developer
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Skills: Flutter, Dart, Git, Version Control, Agile
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="font-bold text-xl">Borda Technology</h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            Mobile Developer Intern
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Skills: Flutter, Dart, Git, Version Control, Agile
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h3 className="font-bold text-xl">Tusaş</h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            Trainee Engineer
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            SKY Experience is an experience-oriented long-term trainee engineer
            program that provides engineering practice and awareness. Skills:
            Excel, Power BI, DAX
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h3 className="font-bold text-xl">Cubicl</h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            Web Developer Intern
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Skills: JavaScript, AngularJS, CSS, HTML
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="font-bold text-xl">TED University</h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            Academic Tutor
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            I assist students during Java-related laboratory classes. Skills:
            Java
          </p>
        </div>
      ),
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <canvas
        className="fixed inset-0 z-10 pointer-events-none"
        id="canvas"
      ></canvas>
      <div className="relative z-20 space-y-24 pb-24">
        {/* Hero Section */}
        <section id="about" className="min-h-screen" ref={containerRef}>
          <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <div className="mb-8">
              <Image
                src="/profile-placeholder.jpg"
                alt="Burak Koç"
                width={200}
                height={200}
                className="rounded-full mx-auto shadow-lg"
              />
            </div>
            <TextCursorProximity
              label="B U R A K  K O Ç"
              className="text-5xl font-bold mb-6 will-change-transform"
              styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.4)",
                },
                color: {
                  from: "#FFFFFF",
                  to: "#3B82F6",
                },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={containerRef}
            />

            <TextCursorProximity
              label="Bilgisayar mühendisliği mezunu olarak, yeni teknolojileri öğrenmeyi ve araştırmayı seven, yüksek motivasyonlu ve sorumluluk sahibi biriyim. Spor ve fitnessa olan ilgimin yanı sıra, başkalarıyla işbirliği yapmakta becerikli ve mükemmel iletişim becerilerine sahibim."
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.4)",
                },
                color: {
                  from: "#FFFFFF",
                  to: "#3B82F6",
                },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={containerRef}
            />

            <div className="flex gap-4">
              <AuroraButton
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                glowClassName="from-blue-600 via-purple-500 to-blue-400"
              >
                İletişime Geç
              </AuroraButton>
              <AuroraButton
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                glowClassName="from-cyan-500 via-blue-500 to-purple-500"
              >
                Projelerimi Gör
              </AuroraButton>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projeler</h2>
          <div className="flex min-h-[400px] w-full items-center justify-center py-20">
            <div className="w-full">
              <DisplayCards
                cards={[
                  {
                    icon: <Sparkles className="size-4 text-blue-300" />,
                    title: "Dream Interpreter App",
                    description: "Next.js, OpenAI, TailwindCSS",
                    date: "2024",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className: "grayscale-[100%] hover:grayscale-0",
                    onClick: () =>
                      window.open(
                        "https://github.com/burakkoc5/dream-interpreter-app",
                        "_blank"
                      ),
                  },
                  {
                    icon: <Sparkles className="size-4 text-blue-300" />,
                    title: "Library Occupancy Detector",
                    description: "Python, OpenCV, TensorFlow",
                    date: "2023",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className: "grayscale-[100%] hover:grayscale-0",
                    onClick: () =>
                      window.open(
                        "https://github.com/burakkoc5/library-occupancy-detector-desktop",
                        "_blank"
                      ),
                  },
                  {
                    icon: <Sparkles className="size-4 text-blue-300" />,
                    title: "Asset Tracker",
                    description: "React Native, Firebase, Redux",
                    date: "2023",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className: "grayscale-[100%] hover:grayscale-0",
                    onClick: () =>
                      window.open(
                        "https://github.com/burakkoc5/asset_tracker",
                        "_blank"
                      ),
                  },
                  {
                    icon: <Sparkles className="size-4 text-blue-300" />,
                    title: "HRMS",
                    description: "Spring Boot, React, PostgreSQL",
                    date: "2023",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className: "grayscale-[100%] hover:grayscale-0",
                    onClick: () =>
                      window.open(
                        "https://github.com/burakkoc5/hrms",
                        "_blank"
                      ),
                  },
                  {
                    icon: <Sparkles className="size-4 text-blue-300" />,
                    title: "Car Rental Project",
                    description: "Spring Boot, Angular, PostgreSQL",
                    date: "2022",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className: "grayscale-[100%] hover:grayscale-0",
                    onClick: () =>
                      window.open(
                        "https://github.com/burakkoc5/CarRentalProject",
                        "_blank"
                      ),
                  },
                  {
                    icon: <Sparkles className="size-4 text-blue-300" />,
                    title: "Restaurant Booking Backend",
                    description: "Node.js, Express, MongoDB",
                    date: "2022",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className: "grayscale-[100%] hover:grayscale-0",
                    onClick: () =>
                      window.open(
                        "https://github.com/burakkoc5/restaurant-booking-backend",
                        "_blank"
                      ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Timeline data={timelineData} />
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Eğitim</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">TED University, Ankara</h3>
                  <p className="text-gray-300">Bilgisayar Mühendisliği</p>
                  <p className="text-gray-300 mt-2">GPA: 3.71/4.00</p>
                </div>
                <span className="text-gray-300">2020 - 2025</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">
                    Ayhan Sümer High School, Ankara
                  </h3>
                  <p className="text-gray-300">92,46/100</p>
                </div>
                <span className="text-gray-300">2016 - 2020</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">Yetkin Gençler</h3>
                  <p className="text-gray-300">Trainee</p>
                  <p className="text-gray-300 mt-2">
                    YetGen is a 12-week 21st Century Competencies Training
                    Program where pieces of training such as Effective
                    Presentation Techniques, Teamwork, Career Planning, Excel,
                    Information / Media / Finance Literacy, Social Innovation,
                    and GirisGen process have been organized.
                  </p>
                </div>
                <span className="text-gray-300">2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">İletişim</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <AuroraButton
                  className="w-full"
                  onClick={() =>
                    (window.location.href = "mailto:kocburak2002@gmail.com")
                  }
                  glowClassName="from-blue-600 via-cyan-400 to-blue-500"
                >
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    kocburak2002@gmail.com
                  </div>
                </AuroraButton>

                <AuroraButton
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/koc-burak/",
                      "_blank"
                    )
                  }
                  glowClassName="from-blue-600 via-blue-400 to-blue-600"
                >
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    LinkedIn
                  </div>
                </AuroraButton>

                <AuroraButton
                  className="w-full"
                  onClick={() =>
                    window.open("https://github.com/burakkoc5", "_blank")
                  }
                  glowClassName="from-purple-600 via-purple-400 to-purple-600"
                >
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    GitHub
                  </div>
                </AuroraButton>

                <div className="flex items-center gap-4 px-4 py-2">
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300">(+90) 507903****</span>
                </div>

                <div className="flex items-center gap-4 px-4 py-2">
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">Çankaya/Ankara</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
