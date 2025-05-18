import React from 'react';
import { GithubIcon, LinkedinIcon, Play, Github, Youtube, Music, BookOpen, Gamepad2, Cpu, CircuitBoard} from 'lucide-react';
import Image from 'next/image'

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export function Logo({ width = 200, height = 200, className = "" }: LogoProps) {
    return (
        <Image
            src="/logo_transparent.png"
            alt="Cydonia Tech Logo"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}
export default function CydoniaTechnologies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <div className="text-2xl font-bold text-slate-700">
                CYDONIA
                <span className="block text-sm font-normal text-slate-500">TECHNOLOGIES</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#projects" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#fields" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">Fields</a>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto mb-6 bg-slate-100 rounded-lg flex items-center justify-center">
                <Logo className="w-64 h-64 text-teal-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Cydonia Technologies
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Creating open source and DIY projects that revolutionize Music Performance,
              Educational Content, and Entertainment using AI and Embedded Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/Cydonia-Technologies" target="_blank"><button className="flex bg-red-500 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
              <GithubIcon className="w-6 h-6" />
               &nbsp;Explore Projects
              </button></a>
              <a href=" https://www.youtube.com/@CydoniaTechnologies" target="_blank"> <button className="bg-slate-50 flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
               <Youtube className="w-5 h-5" />
                Watch Our Process
              </button></a>
              <a href = "https://www.linkedin.com/company/cydonia-technologies-llc/about/?viewAsMember=true" target="_blank"><button className="bg-teal-600 text-white flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              Discover Us
              </button></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Cydonia Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe in the power of open source innovation to transform how we create, learn, and entertain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 mb-6">
                Cydonia Technologies LLC is dedicated to creating, producing, and distributing innovative
                open source and DIY projects that push the boundaries of what&apos;s possible in music,
                education, and entertainment.
              </p>
              <p className="text-slate-600">
                By combining cutting-edge AI technology with embedded systems, we develop tools and
                platforms that empower creators, educators, and entertainment enthusiasts worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <CircuitBoard className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900">Embedded Systems</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Cpu className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900">AI Integration</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Github className="w-12 h-12 text-slate-700 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900">Open Source</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Youtube className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900">Documentation</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fields Section */}
      <section id="fields" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fields We Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our projects span multiple domains, each designed to enhance human creativity and learning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Music className="w-16 h-16 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Music Performance & Production</h3>
              <p className="text-slate-600">
              Innovative embedded solutions for live music performers and studio recoreders alike
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <BookOpen className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Content</h3>
              <p className="text-slate-600">
                Interactive learning platforms and educational tools that make complex concepts
                accessible through hands-on DIY projects and AI-powered tutoring systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Gamepad2 className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Entertainment</h3>
              <p className="text-slate-600">
                Cutting-edge entertainment experiences that blend physical and digital worlds,
                creating immersive experiences through intelligent embedded systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our latest open source innovations and DIY project documentation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards - you can customize these with actual projects */}
            <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Project Alpha</h3>
                <p className="text-slate-600 mb-4">To be announced!</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700">
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
                    <Play className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>

            { /**
           * <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
           *   <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200"></div>
           *   <div className="p-6">
           *     <h3 className="text-xl font-bold text-slate-900 mb-2">EduBot System</h3>
           *     <p className="text-slate-600 mb-4">Interactive learning companion with embedded sensors.</p>
           *     <div className="flex gap-3">
           *       <button className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700">
           *         <Github className="w-4 h-4" />
           *         View Code
           *       </button>
           *       <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
           *         <Play className="w-4 h-4" />
           *         Demo
           *       </button>
           *     </div>
           *   </div>
           * </div>

           * <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
           *   <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
           *   <div className="p-6">
           *     <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Stage Kit</h3>
           *     <p className="text-slate-600 mb-4">Modular performance enhancement system for live entertainment.</p>
           *     <div className="flex gap-3">
           *       <button className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700">
           *         <Github className="w-4 h-4" />
           *         View Code
           *       </button>
           *       <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
           *         <Play className="w-4 h-4" />
           *         Demo
           *       </button>
           *     </div>
           *   </div>
           * </div>
           */}
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Youtube className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Follow Our Journey</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Watch our development process, tutorials, and behind-the-scenes content on our YouTube channel.
              See how our projects come to life from concept to completion.
            </p>
            <a href="https://www.youtube.com/@CydoniaTechnologies" target="_blank"><button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Subscribe to Our Channel
            </button></a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or learning more about our projects? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                Contact Us
              </button>
              <a href="https://www.linkedin.com/company/cydonia-technologies-llc/?viewAsMember=true" target="_blank"><button className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              LinkedIn
              </button></a>
              <a href="https://github.com/Cydonia-Technologies" target="_blank"><button className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">
              CYDONIA
              <span className="block text-sm font-normal text-slate-400">TECHNOLOGIES LLC</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Cydonia Technologies LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
