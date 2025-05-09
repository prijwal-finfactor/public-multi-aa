import React from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={clsx(
      'rounded-lg bg-white p-6 shadow-md dark:bg-gray-800',
      className
    )}>
      {children}
    </div>
  );
};

export default Card;