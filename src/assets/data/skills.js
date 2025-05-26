export const skillsData = {
  technical: [
    {
      name: "JavaScript",
      level: "Advanced",
      category: "Programming Languages",
      experience: "5+ years",
      description: "ES6+, async/await, DOM manipulation, modern JavaScript patterns"
    },
    {
      name: "React.js",
      level: "Advanced", 
      category: "Frontend Frameworks",
      experience: "3+ years",
      description: "Hooks, state management, component architecture, performance optimization"
    },
    {
      name: "Vue.js",
      level: "Advanced",
      category: "Frontend Frameworks", 
      experience: "2+ years",
      description: "Composition API, Vuex, component systems, thesis project implementation"
    },
    {
      name: "HTML5/CSS3",
      level: "Expert",
      category: "Web Technologies",
      experience: "6+ years", 
      description: "Semantic HTML, responsive design, CSS Grid, Flexbox, animations"
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      category: "CSS Frameworks",
      experience: "2+ years",
      description: "Utility-first design, responsive design, custom configurations"
    },
    {
      name: "Python",
      level: "Intermediate",
      category: "Programming Languages",
      experience: "2+ years",
      description: "Data analysis, automation, basic machine learning, educational projects"
    },
    {
      name: "OpenAI API",
      level: "Intermediate",
      category: "AI Integration",
      experience: "1+ year",
      description: "API integration, prompt engineering, AI content generation (thesis project)"
    },
    {
      name: "Git/GitHub",
      level: "Advanced",
      category: "Development Tools",
      experience: "4+ years",
      description: "Version control, collaboration, branching strategies, project management"
    },
    {
      name: "WordPress",
      level: "Advanced",
      category: "CMS Platforms",
      experience: "4+ years",
      description: "Custom themes, plugin development, content management, client projects"  
    },
    {
      name: "Node.js",
      level: "Intermediate",
      category: "Backend Technologies",
      experience: "2+ years",
      description: "Express.js, API development, npm ecosystem, build tools"
    }
  ],
  
  design: [
    {
      name: "Adobe Illustrator",
      level: "Advanced",
      category: "Design Software",
      experience: "5+ years",
      description: "Vector graphics, logo design, digital illustrations, print design"
    },
    {
      name: "Adobe Photoshop", 
      level: "Advanced",
      category: "Design Software",
      experience: "5+ years",
      description: "Photo editing, digital art, web graphics, UI mockups"
    },
    {
      name: "Figma",
      level: "Intermediate",
      category: "UI/UX Tools",
      experience: "2+ years",
      description: "Interface design, prototyping, collaborative design, component systems"
    },
    {
      name: "Canva",
      level: "Advanced",
      category: "Design Tools",
      experience: "3+ years", 
      description: "Social media graphics, presentations, marketing materials, brand design"
    },
    {
      name: "UI/UX Design",
      level: "Intermediate",
      category: "Design Principles",
      experience: "3+ years",
      description: "User interface design, user experience principles, responsive design"
    },
    {
      name: "3D Modeling",
      level: "Beginner",
      category: "3D Design",
      experience: "1+ year",
      description: "Tinkercad, SketchUp, Blender basics, 3D printing preparation"
    }
  ],
  
  education: [
    {
      name: "Curriculum Development",
      level: "Expert",
      category: "Educational Design",
      experience: "6+ years",
      description: "Technical curriculum design, learning objectives, assessment strategies"
    },
    {
      name: "Programming Instruction", 
      level: "Expert",
      category: "Technical Teaching",
      experience: "6+ years",
      description: "Web development, programming concepts, hands-on coding instruction"
    },
    {
      name: "Technical Writing",
      level: "Advanced",
      category: "Documentation",
      experience: "6+ years",
      description: "Technical documentation, user guides, API documentation, educational content"
    },
    {
      name: "Student Mentoring",
      level: "Advanced", 
      category: "Educational Support",
      experience: "6+ years",
      description: "Academic guidance, career counseling, project supervision, code review"
    },
    {
      name: "Educational Technology",
      level: "Advanced",
      category: "EdTech Integration",
      experience: "4+ years",
      description: "Learning management systems, digital tools, online education platforms"
    }
  ],
  
  languages: [
    {
      name: "Indonesian",
      level: "Native",
      category: "Language Proficiency", 
      experience: "Native Speaker",
      description: "Native fluency in speaking, writing, and technical communication"
    },
    {
      name: "English",
      level: "Fluent",
      category: "Language Proficiency",
      experience: "10+ years",
      description: "Professional proficiency, technical documentation, international communication"
    },
    {
      name: "Technical English",
      level: "Advanced",
      category: "Specialized Communication",
      experience: "6+ years", 
      description: "Programming terminology, technical writing, academic communication"
    }
  ],
  
  soft: [
    "Cross-Cultural Communication",
    "Project Management", 
    "Team Leadership",
    "Problem Solving",
    "Critical Thinking",
    "Adaptability",
    "International Collaboration",
    "Client Relations",
    "Time Management",
    "Creative Problem Solving",
    "Research and Analysis",
    "Public Speaking",
    "Workshop Facilitation",
    "Volunteer Leadership"
  ]
}

// Helper functions for filtering and organizing skills
export const getSkillsByCategory = (category) => {
  const allSkills = [...skillsData.technical, ...skillsData.design, ...skillsData.education, ...skillsData.languages]
  return allSkills.filter(skill => skill.category === category)
}

export const getSkillsByLevel = (level) => {
  const allSkills = [...skillsData.technical, ...skillsData.design, ...skillsData.education, ...skillsData.languages]
  return allSkills.filter(skill => skill.level === level)
}

export const getTopSkills = () => {
  const allSkills = [...skillsData.technical, ...skillsData.design, ...skillsData.education]
  return allSkills.filter(skill => skill.level === "Expert" || skill.level === "Advanced")
}

export const getFeaturedTechnicalSkills = () => {
  return skillsData.technical.slice(0, 6) // Top 6 technical skills
}
