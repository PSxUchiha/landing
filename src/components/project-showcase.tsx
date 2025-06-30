"use client";

import React from 'react';
import { Github } from 'lucide-react';

export function ProjectShowcase() {
  const projects = [
    {
      name: 'Shell Assistant',
      event: 'IEEE Hacksagon 2025, IIITM Gwalior - Overall Software Category Winner',
      description: 'A local application that interprets natural language commands and executes them on a Linux/macos system.',
      url: 'https://github.com/psxuchiha/shell-assist',
      githubUrl: 'https://github.com/psxuchiha/shell-assist',
      icon: '󰆍',
      color: 'var(--mauve)',
    },
    {
      name: 'Gate Entry',
      description: 'A modern gate entry management system built with Next.js 14, featuring role-based access control and visitor tracking.',
      url: 'https://gate-entry-sigma.vercel.app/',
      githubUrl: 'https://github.com/PSxUchiha/gate-entry',
      icon: '󰉋',
      color: 'var(--teal)',
    },
    {
      name: 'YatraGPT',
      event: 'finova SoftLaunch Hackathon 2025 - 2nd Prize',
      description: 'An AI powered personalised travel agent that provides intelligent travel recommendations and planning assistance.',
      url: 'https://github.com/vee1e/finova',
      githubUrl: 'https://github.com/vee1e/finova',
      icon: '󰒋',
      color: 'var(--blue)',
    },
    {
      name: 'More to come',
      description: 'Exciting projects in development. Stay tuned for more innovative solutions and collaborations.',
      url: 'https://github.com/PSxUchiha',
      githubUrl: 'https://github.com/PSxUchiha',
      icon: '󰐊',
      color: 'var(--green)',
    },
  ];

  return (
    <div className="space-y-4 px-5 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => {
          const content = (
            <div className="relative h-full p-4 rounded-lg border border-border transition-all duration-300">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                style={{ backgroundColor: project.color }}
              />
              <div className="relative flex items-start justify-between mb-2">
                <div className="flex items-start gap-2">
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
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Github 
                      className="size-4 opacity-50 group-hover:opacity-100 transition-all duration-300" 
                      style={{ color: project.color }}
                    />
                  </a>
                )}
              </div>
              {project.event && (
                <p className="text-xs text-muted-foreground mb-2">
                  {project.event}
                </p>
              )}
              <p className="relative text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          );

          if (project.url) {
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {content}
              </a>
            );
          } else {
            return (
              <div key={project.name} className="group block">
                {content}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
} 