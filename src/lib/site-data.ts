export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  summary: string;
  tags: string[];
  eyebrow: string;
  details?: string[];
};

export type Project = {
  id: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  accent: string;
  outcome: string;
  challenge: string;
  impact: string;
  media?: ProjectMedia[];
  videoUrl?: string;
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: string;
  items: string[];
};

export type Award = {
  title: string;
  issuer: string;
  description: string;
};

export type Education = {
  period: string;
  institution: string;
  program: string;
};

export type Role = {
  title: string;
  description: string;
  details?: string[];
  media?: RoleMedia[];
};

export type RoleMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Bootcamp", href: "#bootcamp" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "4+", label: "Years of study" },
  { value: "8", label: "Featured projects" },
  { value: "4", label: "Certifications" },
  { value: "3", label: "Languages" },
];


export const experiences: Experience[] = [
  {
    company: "Sofiatech",
    role: "Cloud & AI Engineer Intern",
    summary:
      "Exploring Cloud Computing and AI foundations using AWS, followed by the development and deployment of an integrated engineering project.",
    tags: ["AWS", "Cloud Computing", "Artificial Intelligence", "AI Engineering"],
    eyebrow: "Internship",
    details: [
      "Discover cloud and AI concepts and tools integrated with AWS services.",
      "Implement a technical project leveraging AWS cloud infrastructure and AI models.",
    ],
  },
  {
    company: "COFICAB — Center of Excellence",
    role: "AI Engineer",
    summary:
      "Designed an AI-powered industrial platform deployed internationally across manufacturing sites.",
    tags: ["Angular", "Flask", "SQL Server", "Docker", "Power BI", "Generative AI", "LLMs"],
    eyebrow: "Flagship Experience",
    details: [
      "Built predictive workflows for production teams and operators.",
      "Integrated real-time data with decision support and assistant-style guidance.",
    ],
  },
  {
    company: "Bi Geek",
    role: "Full Stack Developer Intern",
    summary:
      "Modern development workflow shipping Angular + Spring Boot platforms with clean architecture.",
    tags: ["Angular", "Spring Boot", "REST APIs"],
    eyebrow: "Experience",
  },
  {
    company: "OACA",
    role: "Systems Intern",
    summary:
      "Database management and network administration across mission-critical aviation systems.",
    tags: ["SQL", "Networking", "Admin"],
    eyebrow: "Experience",
  },
];

export const projects: Project[] = [
  {
    id: "wire-break",
    category: "Flagship · COFICAB",
    title: "Intelligent Wire Break Management",
    summary:
      "AI-driven platform centralising real-time monitoring, predictive insights and an embedded AI assistant across global manufacturing sites.",
    tags: ["AI Assistant", "Predictive Insights", "Power BI Analytics", "Multi-Site", "Real-Time"],
    accent: "linear-gradient(90deg, #c6a46a, #8d6240)",
    outcome:
      "A production-facing experience that turns plant telemetry into coordinated action.",
    challenge:
      "Operators needed a single view for incidents, diagnostics and next-best actions without leaving the production context.",
    impact:
      "The platform condensed scattered signals into a premium command surface for industrial teams.",
  },
  {
    id: "chronicare",
    category: "HealthTech",
    title: "Chronicare",
    summary:
      "Interactive medical companion combining LLMs, retrieval-augmented generation and real-time monitoring for chronic disease care.",
    tags: ["AI Assistant", "RAG", "LLMs", "Real-Time Alerts", "Health Monitoring"],
    accent: "linear-gradient(90deg, #e7c9b0, #b9755b)",
    outcome: "A conversational health tool that stays useful under pressure.",
    challenge:
      "Patients needed structured guidance, reminders and intelligent support without losing the feeling of a human-first experience.",
    impact:
      "The product balances medical seriousness with accessible interaction patterns.",
  },
  {
    id: "vision-ocr",
    category: "Vision · OCR",
    title: "Computer Vision Platform",
    summary:
      "An end-to-end computer vision pipeline for vehicle plate detection, OCR, driver behavior recognition and speed estimation.",
    tags: ["YOLO", "OpenCV", "EasyOCR", "CNN", "YOLOv8", "DeepSort"],
    accent: "linear-gradient(90deg, #bea97f, #7c8d86)",
    outcome: "A structured pipeline that moves from data collection to recognition and real-time interpretation.",
    challenge:
      "The interface had to explain multiple CV tasks clearly: annotation, preprocessing, detection, OCR, behavior classification and speed tracking.",
    impact:
      "The system turns raw vehicle imagery into readable outputs, annotated detections and measurable signals.",
    media: [
      {
        type: "image",
        src: "/vision/vision-1.png",
        alt: "Data collection slide showing vehicle photos gathered from phone captures and online sources",
        title: "1. Data Collection",
        description:
          "The dataset is assembled from phone captures and online sources to cover different vehicle types, plate styles, lighting conditions and camera angles.",
      },
      {
        type: "image",
        src: "/vision/vision-2.png",
        alt: "Data annotation slide showing Roboflow used to label vehicle license plates",
        title: "2. Data Annotation",
        description:
          "Roboflow is used to annotate vehicle license plates, which creates the supervised labels needed to train the detection model.",
      },
      {
        type: "image",
        src: "/vision/vision-3.png",
        alt: "Data preparation title slide",
        title: "3. Data Preparation",
        description:
          "This section introduces the preparation workflow that converts raw captures into a training-ready dataset.",
      },
      {
        type: "image",
        src: "/vision/vision-4.png",
        alt: "Preprocessing and dataset division slide",
        title: "4. Preprocessing and Split",
        description:
          "Images are resized, normalized and extracted frame by frame before the dataset is split into training, validation and testing sets.",
      },
      {
        type: "image",
        src: "/vision/vision-5.png",
        alt: "Dataset browser showing train, validation and test splits",
        title: "5. Dataset Overview",
        description:
          "The dataset is organized across train, valid and test splits so each subset can be checked visually before training.",
      },
      {
        type: "image",
        src: "/vision/vision-6.png",
        alt: "Modeling title slide",
        title: "6. Modeling",
        description:
          "The modeling phase introduces the detection and recognition stack used for the computer vision pipeline.",
      },
      {
        type: "image",
        src: "/vision/vision-7.png",
        alt: "License plate detection slide with YOLOv5 results and metrics",
        title: "7. License Plate Detection",
        description:
          "YOLOv5 is used to detect plates in real time, with strong evaluation scores that show reliable detection quality.",
      },
      {
        type: "image",
        src: "/vision/vision-8.png",
        alt: "Dataset view with detected license plates highlighted in red boxes",
        title: "8. Detection Training View",
        description:
          "Training samples are reviewed with bounding boxes drawn on the plates so the detection annotations can be inspected at scale.",
      },
      {
        type: "image",
        src: "/vision/vision-9.png",
        alt: "Driver behavior detection slide listing behavior classes",
        title: "9. Driver Behavior Detection",
        description:
          "A CNN is trained to classify driver actions such as safe driving, texting, phone use, drinking and other risky behaviors.",
      },
      {
        type: "image",
        src: "/vision/vision-10.png",
        alt: "Driver behavior prediction results with class confidence scores",
        title: "10. Behavior Predictions",
        description:
          "The model predicts the behavior class for each driver image and shows confidence scores to make the result easy to inspect.",
      },
      {
        type: "image",
        src: "/vision/vision-11.png",
        alt: "License plate recognition process slide describing OpenCV, YOLOv5 and EasyOCR",
        title: "11. Plate Recognition Pipeline",
        description:
          "OpenCV extracts frames, YOLOv5 localizes the plate and EasyOCR reads the cropped text to produce the final plate value.",
      },
      {
        type: "image",
        src: "/vision/vision-12.png",
        alt: "Recognition results slide showing annotated vehicles and OCR output",
        title: "12. Recognition Results",
        description:
          "The system produces plate detections and OCR outputs across different vehicle views, including night scenes and angled shots.",
      },
      {
        type: "image",
        src: "/vision/vision-13.png",
        alt: "Speed detection title slide describing YOLOv8, DeepSort and OpenCV",
        title: "13. Speed Detection",
        description:
          "This module estimates vehicle speed from video frames using YOLOv8, DeepSort and OpenCV tracking.",
      },
      {
        type: "image",
        src: "/vision/vision-14.png",
        alt: "Speed detection examples showing tracked vehicles and measured speeds",
        title: "14. Speed Detection Examples",
        description:
          "Tracked vehicles are followed across frames and annotated with measured speed values to verify the detection flow.",
      },
      {
        type: "image",
        src: "/vision/vision-15.png",
        alt: "Speed detection results slide with objective and summary points",
        title: "15. Speed Detection Summary",
        description:
          "The final slide summarizes the objective and confirms that the pipeline stays robust under varied video conditions.",
      },
    ],
  },
  {
    id: "elearning",
    category: "EdTech",
    title: "Teachewave — E-Learning Platform",
    summary:
      "A complete e-learning marketplace where instructors create custom profiles and sell structured courses, while students purchase learning materials and book live online tutoring sessions.",
    tags: ["Angular", "Spring Boot", "Dashboards", "Scheduling", "Online Tutoring"],
    accent: "linear-gradient(90deg, #6a7672, #d0b18a)",
    outcome: "A dual-sided learning experience enabling custom profile pages, live tutoring reservations, and structured course selling.",
    challenge:
      "Designing a cohesive booking and payment system that connects students with individual teacher availability blocks in real-time.",
    impact:
      "Successfully integrated seamless session scheduling alongside on-demand learning flows.",
    videoUrl: "/teachewave.mp4",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Generative AI",
    description: "Systems that think, retrieve and assist.",
    icon: "sparkles",
    items: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "AI Chatbots",
      "AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Deep Learning",
      "Machine Learning",
      "Neural Networks",
    ],
  },
  {
    title: "Database Management",
    description: "Structured data systems and query design.",
    icon: "database",
    items: ["SQL", "Data Migration", "SQL Server", "MySQL", "PL/SQL", "Database Design", "Data Modeling"],
  },
  {
    title: "Programming Languages",
    description: "Core languages used across backend and product work.",
    icon: "server",
    items: ["Python", "Java", "JavaFX", "JavaScript", "TypeScript", "PHP", "C"],
  },
  {
    title: "Web Development",
    description: "Interfaces with structure and restraint.",
    icon: "monitor",
    items: ["Angular", "Symfony", "Laravel", "Spring Boot", "Flask", "React", "Vue.js", "Next.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Mobile Development",
    description: "Mobile experiences and rapid app prototyping.",
    icon: "cloud",
    items: ["Flutter", "FlutterFlow"],
  },
  {
    title: "Tools & Technologies",
    description: "Shipping, deployment and operational craft.",
    icon: "cloud",
    items: ["Git/GitHub", "Docker", "REST APIs", "Firebase"],
  },
];

export const awards: Award[] = [
  {
    title: "Microsoft PL-300",
    issuer: "Power BI Data Analyst",
    description: "Business intelligence, data modelling and analytics storytelling.",
  },
  {
    title: "IBM Big Data Engineering",
    issuer: "IBM",
    description: "Data engineering fundamentals and scalable pipeline thinking.",
  },
  {
    title: "Scrum Master",
    issuer: "Scrum.org",
    description: "Agile delivery and team coordination principles.",
  },
  {
    title: "Python PCEP",
    issuer: "Python Institute",
    description: "Core Python fluency and software foundations.",
  },
];

export const education: Education[] = [
  {
    period: "2025 — Present",
    institution: "ESPRIT",
    program: "Computer Science Engineering",
  },
  {
    period: "2021 — 2025",
    institution: "ISTIC",
    program: "Bachelor in Software Engineering & Information Systems",
  },
];

export const beyondCode: Role[] = [
  {
    title: "ISTIC Graduation Ceremony Coordinator",
    description:
      "Coordinated the events department for the first edition of ISTIC's graduation ceremony, a fully student-led celebration shaped through planning, teamwork and on-site execution.",
    details: [
      "Led the events team for ISTIC's first fully student-organized graduation ceremony.",
      "Coordinated logistics, timing and on-site flow to keep the ceremony running smoothly.",
    ],
    media: [
      {
        type: "image",
        src: "/istic-graduation/01.jpg",
        alt: "ISTIC graduation ceremony event scene 1",
        title: "Event Scene 1",
        description: "Opening moment from ISTIC's first student-led graduation ceremony.",
      },
      {
        type: "image",
        src: "/istic-graduation/02.jpg",
        alt: "ISTIC graduation ceremony event scene 2",
        title: "Event Scene 2",
        description: "Team coordination and ceremony flow during the graduation event.",
      },
      {
        type: "image",
        src: "/istic-graduation/03.jpg",
        alt: "ISTIC graduation ceremony event scene 3",
        title: "Event Scene 3",
        description: "A moment from the celebration showing the scale of the event execution.",
      },
      {
        type: "image",
        src: "/istic-graduation/04.jpg",
        alt: "ISTIC graduation ceremony event scene 4",
        title: "Event Scene 4",
        description: "Final photo in the sequence from the graduation ceremony coverage.",
      },
    ],
  },
  {
    title: "Marketing Department Member",
    description: "Crafted campaigns and visual narratives for student organisations.",
    details: [
      "Supported campaigns with visuals, messaging and audience-aware communication.",
      "Helped shape the public voice of student initiatives through clear storytelling.",
    ],
  },
  {
    title: "Best Speaker Competition",
    description: "Participant — celebrating clarity, presence and storytelling.",
    details: [
      "Practiced presence, pacing and persuasive delivery in competitive speaking settings.",
      "Refined voice control and message structure for stronger audience connection.",
    ],
  },
];

export const languages = [
  { language: "Arabic", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "French", level: "Fluent" },
];