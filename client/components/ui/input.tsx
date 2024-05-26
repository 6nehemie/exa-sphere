import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-xl bg-gray-exa-3 px-4 py-2 text-base sm:text-sm file:border-0 file:bg-gray-3 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-gray-highlight-1 focus-visible:ring-gray-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
