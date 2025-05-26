# Coding Protocol - Portfolio Development

## Engineering Instructions

You're an engineer building this portfolio codebase for Irfani Suar.

You've been given `architecture.md` and `tasks.md`:
- **Read both carefully**. There should be no ambiguity about what we're building.
- **Follow `tasks.md`** and complete one task at a time.
- **After each task, stop**. I'll test it. If it works, commit to GitHub and move to the next.

## CODING PROTOCOL

### Core Principles
- Write the **absolute minimum code required**
- **No sweeping changes** - focus on incremental progress
- **No unrelated edits** - focus on just the task you're on
- Make code **precise, modular, testable**
- **Don't break existing functionality**
- If I need to do anything (e.g. external service config), tell me clearly

### Code Quality Standards

#### React Component Standards
```jsx
// ✅ Good - Focused, single responsibility
function Button({ variant = 'primary', children, onClick, ...props }) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors"
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

// ❌ Bad - Too much functionality in one component
function MegaComponent() {
  // Handles navigation, state, API calls, animations, etc.
}
```

#### File Organization
- One component per file
- Named exports for utilities, default export for components
- Consistent import order: React hooks, external libraries, internal components, data/utils

#### Styling Guidelines
- Use Tailwind utility classes
- Follow the design system in `tailwind.config.js`
- Responsive design: mobile-first approach
- Consistent spacing using Tailwind scale

#### Data Management
```jsx
// ✅ Good - Import from data files
import { portfolioData } from '../assets/data/portfolio.js'

function Hero() {
  const { name, title, bio } = portfolioData.personal
  
  return (
    <section className="min-h-screen flex items-center">
      <h1>{name}</h1>
      <p>{title}</p>
    </section>
  )
}

// ❌ Bad - Hardcoded data in components
function Hero() {
  return <h1>Irfani Suar</h1> // Don't hardcode
}
```

### Task Completion Process

#### Before Starting Each Task
1. Read the task description carefully
2. Understand what specific functionality to implement
3. Identify which files need to be created or modified
4. Plan the minimal code changes needed

#### While Coding
- Focus **only** on the current task requirements
- Don't add extra features or improvements
- Use existing components and utilities when possible
- Follow the established patterns and conventions

#### After Completing Each Task
- Test the specific functionality mentioned in the task
- Ensure no existing functionality is broken
- Check for console errors or warnings
- Verify responsive behavior if applicable

### Testing Requirements

Each task must be testable by:
```bash
# Start development server
npm run dev

# Navigate to http://localhost:5173
# Verify the specific functionality works as described
# Test on different screen sizes (mobile, tablet, desktop)
# Check browser console for errors
```

### Component Creation Template

When creating new components, use this structure:

```jsx
// Component imports
import { useState, useEffect } from 'react'
import Button from '../ui/Button'

// Data imports  
import { portfolioData } from '../../assets/data/portfolio'

function ComponentName({ prop1, prop2 }) {
  // Hooks and state
  const [state, setState] = useState(initialValue)
  
  // Event handlers
  const handleClick = () => {
    // Handle interaction
  }
  
  // Render
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Component content */}
      </div>
    </section>
  )
}

export default ComponentName
```

### Data File Structure
```javascript
// assets/data/portfolio.js
export const portfolioData = {
  personal: {
    name: "Irfani Suar",
    title: "Bilingual Web Developer & Technical Educator",
    // ... other personal data
  },
  
  contact: {
    email: "your.email@example.com",
    // ... contact information
  }
}
```

### Commit Message Format
```bash
# Task completion commits
git commit -m "feat: implement hero section with personal data"
git commit -m "fix: update responsive layout for experience cards"
git commit -m "style: add hover effects to project cards"
```

### Error Handling
- Provide clear error messages if something goes wrong
- Include the specific file and line where the issue occurred
- Suggest the fix or what needs to be checked

### Communication Protocol
- After each task, report: "Task X.X completed. Please test [specific functionality]."
- If external setup is needed: "Please configure [service/tool] with [specific instructions]."
- If clarification is needed: "Task X.X requires clarification on [specific aspect]."

### Performance Considerations
- Use lazy loading for images: `loading="lazy"`
- Avoid unnecessary re-renders
- Keep bundle size minimal
- Use semantic HTML for accessibility

### Accessibility Requirements
- Use proper heading hierarchy (h1, h2, h3...)
- Include alt text for images
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Use semantic HTML elements

### Mobile-First Responsive Design
```jsx
// ✅ Good - Mobile-first responsive classes
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div className="w-full md:w-1/2">Mobile: full width, Desktop: half width</div>
</div>

// ❌ Bad - Desktop-first approach
<div className="flex-row md:flex-col"> // Don't do this
```

This protocol ensures consistent, high-quality code that builds incrementally toward a professional portfolio website showcasing Irfani's unique background as a bilingual technical educator with AI integration expertise.