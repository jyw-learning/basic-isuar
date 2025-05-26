export const projectsData = [
  {
    id: 1,
    title: "AI-Powered SVG Story Generator",
    description: "Master's thesis project: AI system for generating animated SVG stories using Vue.js and OpenAI API integration",
    longDescription: "Complex interactive web application that combines AI content generation with advanced SVG animations. Features modular system architecture with 4 main components, automated content generation workflow, and sophisticated user experience design. This project demonstrates practical AI integration skills and advanced frontend development capabilities.",
    tech: [
      "Vue.js",
      "OpenAI API", 
      "SVG Animation",
      "JavaScript ES6+",
      "System Architecture",
      "API Integration",
      "Content Management"
    ],
    category: "AI Integration",
    status: "In Progress",
    type: "Thesis Project",
    featured: true,
    year: "2024-2025",
    highlights: [
      "AI-powered content generation using OpenAI API",
      "Complex interactive web application architecture",
      "Modular system design with 4 core components",
      "Advanced SVG animation techniques",
      "Automated workflow implementation"
    ],
    links: {
      github: "#", // Will be updated with actual links
      demo: "#",
      documentation: "#"
    },
    image: "/images/projects/thesis-project.png"
  },
  {
    id: 2,
    title: "Educational Web Platform",
    description: "Supporting web development education for 85+ students with interactive tutorials and programming exercises",
    longDescription: "Comprehensive educational platform designed to support programming education with scalable learning solutions, interactive tutorials, and comprehensive technical documentation. Successfully supporting 122 students across multiple programming courses with hands-on exercises and real-world projects.",
    tech: [
      "HTML5",
      "CSS3", 
      "JavaScript",
      "Educational Frameworks",
      "Technical Documentation",
      "Content Management",
      "Student Assessment"
    ],
    category: "Educational Technology",
    status: "Ongoing",
    type: "Educational Platform",
    featured: true,
    year: "2024-2025",
    highlights: [
      "Supporting 85+ undergraduate programming students",
      "Interactive programming tutorials and exercises",
      "Comprehensive technical documentation system",
      "Scalable educational content management",
      "Student progress tracking and assessment"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    image: "/images/projects/educational-platform.png"
  },
  {
    id: 3,
    title: "Instagram Design Campaign - Formmit",
    description: "Social media design campaign for Indonesian Muslim Student Association with 9 professional Instagram posts",
    longDescription: "Volunteer design project showcasing visual communication skills, cultural sensitivity, and brand consistency for community engagement. Created comprehensive social media content strategy with cohesive visual identity and culturally appropriate messaging for Indonesian Muslim Student Association at CYCU.",
    tech: [
      "Adobe Illustrator",
      "Canva",
      "Design Systems",
      "Visual Communication",
      "Brand Identity",
      "Social Media Design"
    ],
    category: "Design & Community",
    status: "Completed",
    type: "Volunteer Design",
    featured: false,
    year: "2024",
    highlights: [
      "9 professional Instagram posts designed",
      "Cohesive brand identity development", 
      "Cultural sensitivity in design approach",
      "Community engagement through visual storytelling",
      "Volunteer leadership in creative division"
    ],
    links: {
      behance: "#",
      instagram: "#"
    },
    image: "/images/projects/design-campaign.png"
  },
  {
    id: 4,
    title: "Digital Content Portfolio",
    description: "7-year freelance digital content creation serving 10+ international clients with comprehensive design solutions",
    longDescription: "Professional freelance portfolio spanning 7 years on Fiverr platform, serving diverse international clients with visual content creation, technical documentation, and digital design solutions. Maintained 5-star rating while building long-term client relationships across multiple countries and industries.",
    tech: [
      "Adobe Creative Suite",
      "Photoshop",
      "Illustrator",
      "WordPress",
      "Technical Writing",
      "Client Management",
      "Project Coordination"
    ],
    category: "Freelance & Business",
    status: "Completed",
    type: "Freelance Portfolio",
    featured: false,
    year: "2014-2021",
    highlights: [
      "10+ repeat international clients served",
      "7 years of consistent 5-star ratings",
      "Comprehensive visual content packages",
      "Technical documentation expertise",
      "Cross-cultural client communication"
    ],
    links: {
      portfolio: "#",
      testimonials: "#"
    },
    image: "/images/projects/freelance-portfolio.png"
  }
]

// Filter functions for easy data manipulation
export const getFeaturedProjects = () => projectsData.filter(project => project.featured)
export const getProjectsByCategory = (category) => projectsData.filter(project => project.category === category)
export const getProjectsByStatus = (status) => projectsData.filter(project => project.status === status)
export const getCurrentProjects = () => projectsData.filter(project => project.status === "In Progress" || project.status === "Ongoing")
