import { cn } from '@/lib/utils';
import Link from 'next/link';

const SidebarButton = ({
  href,
  isOpen,
  text,
  children,
  className,
  disabled,
}: {
  href: string;
  isOpen: boolean;
  text: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center w-max rounded-full text-gray-exa-1 hover:text-white transition-colors duration-200',
        {
          [`${className}`]: className,
          'text-neutral-500 hover:text-neutral-500': disabled,
        }
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center aspect-square w-10 h-10 transition-colors duration-200',
          {
            'rounded-full': !isOpen,
            'text-neutral-500 ': disabled,
            'hover:text-neutral-500': !disabled,
          }
        )}
      >
        {children}
      </div>

      <div
        className={cn('whitespace-nowrap overflow-hidden transition-all', {
          'max-w-0 opacity-0 duration-300': !isOpen,
          'max-w-[150px] opacity-100 duration-500': isOpen,
        })}
      >
        <span className="text-sm pr-3.5">{text}</span>
      </div>
    </Link>
  );
};

export default SidebarButton;
