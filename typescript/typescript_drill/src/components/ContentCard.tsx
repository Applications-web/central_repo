import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string; 
  children: React.ReactNode; 
}

export const ContentCard = ({ title, subtitle, children }: CardProps) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px', margin: '15px 0' }}>
      <h2 style={{ margin: '0 0 5px 0' }}>{title}</h2>
      {subtitle && <p style={{ color: '#888', margin: '0 0 15px 0' }}>{subtitle}</p>}
      
      <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '8px' }}>
        {/* TODO 6: In App.tsx, try nesting a StatusBadge component right here 
            by placing it between the <ContentCard> tags! */}
        {children}
      </div>
    </div>
  );
};