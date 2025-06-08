import React from 'react';
import { Github } from 'lucide-react';

export function ProjectShowcase() {
  const projects = [
    {
      name: 'Shell Assistant',
      description: 'A local application that interprets natural language commands and executes them on a Linux system using Ollama LLM.',
      url: 'https://github.com/PSxUchiha/shell-assistant',
      icon: '󰆍',
      color: 'var(--mauve)',
    },
    {
      name: 'Gate Entry',
      description: 'A modern gate entry management system built with Next.js 14, featuring role-based access control and visitor tracking.',
      url: 'https://github.com/PSxUchiha/gate-entry',
      icon: '󰉋',
      color: 'var(--teal)',
    },
  ];

  return (
    <div className="space-y-4 px-5 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative h-full p-4 rounded-lg border border-border transition-all duration-300">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                style={{ backgroundColor: project.color }}
              />
              <div className="relative flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span 
                    className="font-['JetBrainsMono_Nerd_Font'] text-xl transition-colors duration-300"
                    style={{ color: project.color }}
                  >
                    {project.icon}
                  </span>
                  <h3 
                    className="font-mono text-base transition-colors duration-300"
                    style={{ color: project.color }}
                  >
                    {project.name}
                  </h3>
                </div>
                <Github 
                  className="size-4 opacity-50 group-hover:opacity-100 transition-all duration-300" 
                  style={{ color: project.color }}
                />
              </div>
              <p className="relative text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 