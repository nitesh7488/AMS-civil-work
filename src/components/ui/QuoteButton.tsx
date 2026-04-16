'use client';

import React from 'react';
import { openQuotePopup } from '@/components/ui/QuotePopup';

interface QuoteButtonProps {
  children: React.ReactNode;
  className?: string;
  service?: string;
}

/**
 * A client-side button to open the quote popup.
 * Allows parent components to remain Server Components.
 */
export default function QuoteButton({ children, className, service }: QuoteButtonProps) {
  return (
    <button 
      onClick={() => openQuotePopup(service)} 
      className={className}
    >
      {children}
    </button>
  );
}
