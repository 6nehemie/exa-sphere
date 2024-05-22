import { cn } from '@/lib/utils';
import Link from 'next/link';

const ExaSphere = ({ text, href }: { text?: string; href?: string }) => {
  return (
    <Link href={!!href ? href : '/'} className={''}>
      <p
        className={cn('font-light lg:text-lg font-openSans text-gray-exa-2', {
          [`${text}`]: !!text,
        })}
      >
        ExaSphere
      </p>
    </Link>
  );
};
export default ExaSphere;
