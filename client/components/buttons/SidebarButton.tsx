import { cn } from '@/lib/utils';
import Link from 'next/link';

const SidebarButton = ({
  href,
  isOpen,
  text,
  children,
  CN,
}: {
  href: string;
  isOpen: boolean;
  text: string;
  children: React.ReactNode;
  CN?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center w-max rounded-full text-gray-exa-1 hover:text-white transition-colors duration-200',
        {
          [`${CN}`]: CN,
        }
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center aspect-square w-10 h-10',
          {
            'rounded-full': !isOpen,
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
