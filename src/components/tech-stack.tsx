import React from 'react';

export function TechStack() {
  const sections = [
    {
      title: 'Languages',
      items: [
        { name: 'C++', icon: '󰙲', color: 'var(--blue)' },
        { name: 'Java', icon: '󰬷', color: 'var(--red)' },
        { name: 'Python', icon: '󰌠', color: 'var(--yellow)' },
        { name: 'TypeScript', icon: '󰛦', color: 'var(--sapphire)' },
        { name: 'JavaScript', icon: '󰌞', color: 'var(--peach)' },
        { name: 'HTML/CSS', icon: '󰌝', color: 'var(--mauve)' },
      ],
    },
    {
      title: 'Frameworks',
      items: [
        { name: 'React', icon: '󰜈', color: 'var(--sky)' },
        { name: 'Next.js', icon: '󰎯', color: 'var(--lavender)' },
        { name: 'Tailwind CSS', icon: '󱏿', color: 'var(--teal)' },
        { name: 'tRPC', icon: '󰚲', color: 'var(--pink)' },
        { name: 'Prisma', icon: '󰄛', color: 'var(--green)' },
        { name: 'PostgreSQL', icon: '󱤢', color: 'var(--blue)' },
      ],
    },
    {
      title: 'Tools & OS',
      items: [
        { name: 'Git', icon: '󰊢', color: 'var(--maroon)' },
        { name: 'Vim', icon: '󰕷', color: 'var(--green)' },
        { name: 'Linux', icon: '󰌽', color: 'var(--flamingo)' },
        { name: 'VS Code', icon: '󰨞', color: 'var(--sapphire)' },
        { name: 'GNU Utils', icon: '󰣖', color: 'var(--yellow)' },
        { name: 'macOS', icon: '󰀵', color: 'var(--mauve)' },
      ],
    },
  ];

  return (
    <div className="space-y-5 px-4 py-3">
      {sections.map((section) => (
        <div key={section.title} className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground/80">{section.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="p-2 rounded-lg border border-border transition-all duration-300 group relative overflow-hidden"
                style={{ 
                  '--hover-color': item.color,
                  position: 'relative',
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span 
                    className="font-['JetBrainsMono_Nerd_Font'] text-lg transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="font-mono text-xs group-hover:text-foreground transition-colors duration-300">{item.name}</span>
                </div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 