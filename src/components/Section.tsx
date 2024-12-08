import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-violet-400 mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}
