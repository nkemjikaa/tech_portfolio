"use client";
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Good2Go (G2G)",
    description: "A P2P marketplace for preloved items in Nigeria, built with Flutter and Firebase to encourage local reuse and circular economy.",
    tags: ["Flutter", "Firebase", "Product Ownership"],
    link: "#", // Add link when ready
    gitlink: "#",
  },
  {
    title: "Food Access System",
    description: "Secure mobile identity system for food subsidization, implementing 7-day validation rules and Passport/Voter's Card verification.",
    tags: ["Dart", "Identity Management", "Security"],
    link: "https://youtu.be/ex_ckjjzaEc",
    gitlink: "https://github.com/nkemjikaa/checkin",
  },
  {
    title: "AI Checkers Engine",
    description: "Python-based game engine utilizing Minimax search with Alpha-Beta pruning for optimized strategic move selection.",
    tags: ["Python", "AI", "Algorithms"],
    link: "https://youtu.be/EibpGCuvGM4",
    gitlink: "https://github.com/nkemjikaa/checkers",
  },
  {
    title: "Coca-Cola Web Experience",
    description: "An interactive, high-fidelity 3D web application featuring custom made modelled assests and dynamic environments to enhance digital brand engagement.",
    tags: ["Autodesk Maya", "PHP", "3D Modeling"],
    link: "https://users.sussex.ac.uk/~njra20/assignment/index.html",
    gitlink: "https://github.com/nkemjikaa/public_html",
  }
];

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building high-performance, SEO-optimized web applications using Next.js and Tailwind CSS. Specializing in interactive 3D experiences.",
    icon: "🌐"
  },
  {
    title: "Mobile App Engineering",
    description: "Developing cross-platform mobile solutions with Flutter and Firebase, focusing on smooth UX and scalable cloud architecture.",
    icon: "📱"
  },
  {
    title: "AI & Technical Strategy",
    description: "Integrating intelligent algorithms and AI logic into existing products to automate workflows and enhance decision-making.",
    icon: "🧠"
  }
];

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Footer />
      {/* Your next sections will go here */}
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <Image 
            src="/sign.svg" // Replace with your actual filename
            alt="Logo"
            width={150} 
            height={40}
            className="rounded-lg"
          />
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Nkemjika John Richard Anyaehie
          </span>
        </div>

        {/* Quick Links - Good for Freelance Credibility */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link 
            href="mailto:nkemanyaehie@gmail.com" 
            className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <main className="pt-20"> {/* pt-20 is 80px in Tailwind */}
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-4xl w-full space-y-8">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
          Available for Freelance Projects
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
          Building <span className="text-green-900">consumer-focused</span> solutions with AI and code.
        </h1>

        {/* Subheading / Summary */}
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed text-justify">
          Computer Science and Artificial Intelligence engineer with experience building production-grade mobile and data systems. Founder and Lead Product Engineer of Good2go, a peer-to-peer marketplace platform using Flutter, Firebase, and Amazon Web Services. Skilled in mobile and web development with a strong focus on system reliability, scalability, and user-centered product development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
        >
        View My Work
        </button>
          <Link 
            href="mailto:nkemanyaehie@gmail.com" 
            className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-all"
          >
            Contact Me
          </Link>
        </div>

        {/* Trust Signals / Tech Stack Icons (Simple Text for now) */}
        <div className="pt-12 border-t border-slate-100 flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted Tech Stack</p>
          <div className="flex gap-6 text-slate-500 font-medium">
            <span>Next.js</span>
            <span>Flutter</span>
            <span>Firebase</span>
            <span>AWS</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="py-20 bg-slate-50/50">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Expertise & Services</h2>
      <p className="text-slate-600 max-w-2xl">
        Combining technical excellence in AI and Cloud with an entrepreneurial mindset to deliver 
        products that scale and convert.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-16 flex justify-center"> {/* flex and justify-center centers the child */}
      <div className="max-w-2xl p-8 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-center">
        <h4 className="text-emerald-900 font-bold mb-2 uppercase tracking-wider text-xs">Pricing Policy</h4>
        <p className="text-emerald-800 text-sm md:text-base leading-relaxed">
      Please note: There is no standard fee for my services. Each project is carefully judged against 
      my conditions to provide a fair price to my clients.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Work</h2>
          <p className="text-slate-600 max-w-xl">
            A selection of software and AI projects ranging from full-scale startups to algorithmic engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex items-center gap-4 mt-4">
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 flex items-center gap-2 hover:text-green-900 transition-colors"
              >
                View Project <span className="text-sm font-bold text-slate-900 flex items-center gap-2 hover:text-green-900 transition-colors">→</span>
              </Link>
              <a
            
                href={project.gitlink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 flex items-center gap-2 hover:text-green-900 transition-colors"
              >
                Go to GitHub <span className="text-sm font-bold text-slate-900 flex items-center gap-2 hover:text-green-900 transition-colors">→</span>
  
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return(
    <footer className="border-t border-slate-100 py-12 mt-0">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Copyright Text */}
    <p className="text-slate-500 text-sm order-2 md:order-1">
      © {new Date().getFullYear()} Nkemjika John Richard Anyaehie. Built with Next.js & Tailwind.
    </p>

    {/* Social Links */}
    <div className="flex items-center gap-6 order-1 md:order-2">
      <a 
        href="https://github.com/nkemjikaa" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-emerald-600 transition-colors"
      >
        <span className="sr-only">GitHub</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/njra/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-emerald-600 transition-colors"
      >
        <span className="sr-only">LinkedIn</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>

  </div>
</footer>
  )
}