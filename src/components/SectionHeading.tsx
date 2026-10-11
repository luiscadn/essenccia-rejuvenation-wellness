import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  children,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}) => {
  const dark = tone === 'dark';
  return (
    <div className={`space-y-5 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      <span className={`eyebrow flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} ${dark ? '!text-[#a2a1ba]' : ''}`}>
        <span className="h-px w-8 bg-[#d7a761]" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-balance ${dark ? 'text-[#f7f7f4]' : 'text-[#484774]'}`}>
        {children}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base leading-loose tracking-[0.04em] ${dark ? 'text-[#a2a1ba]' : 'text-[#5c6c84]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
