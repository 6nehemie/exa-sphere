import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({ text, href }: { text?: string; href?: string }) => {
  return (
    <a href={!!href ? href : '/'} className={'flex items-center gap-4 w-max'}>
      <Image
        src={'/exa-sphere.png'}
        alt="exaSphere"
        width={28}
        height={28}
        className={cn('')}
      />
      <p
        className={cn('font-light text-lg', {
          [`${text}`]: !!text,
        })}
      >
        Exa Sphere
      </p>
    </a>
  );
};
export default Logo;
