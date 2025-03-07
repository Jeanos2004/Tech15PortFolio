import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  linkText?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'bordered';
  footer?: ReactNode;
  header?: ReactNode;
}

export default function Card({
  title,
  description,
  imageUrl,
  link,
  linkText = 'En savoir plus',
  children,
  className = '',
  variant = 'default',
  footer,
  header
}: CardProps) {
  // Base classes
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  
  // Variant classes
  const variantClasses = {
    default: 'shadow-md',
    hover: 'shadow-md transition-transform hover:scale-105 hover:shadow-lg',
    bordered: 'border border-gray-200'
  };
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  // Card content
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {header && <div className="px-6 pt-6">{header}</div>}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        
        {children}
        
        {link && (
          <div className="mt-4">
            <Link 
              href={link} 
              className="text-blue-600 font-medium hover:text-blue-800"
            >
              {linkText} →
            </Link>
          </div>
        )}
      </div>
      
      {footer && (
        <div className="px-6 pb-6 pt-0 border-t border-gray-100 mt-2">
          {footer}
        </div>
      )}
    </>
  );
  
  // If link is provided, wrap the card in a link
  if (link) {
    return (
      <Link href={link}>
        <div className={cardClasses}>
          {cardContent}
        </div>
      </Link>
    );
  }
  
  // Otherwise, just render the card
  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
}