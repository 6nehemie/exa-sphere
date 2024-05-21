import { cn } from '@/lib/utils';
import Image from 'next/image';

const ExaSphere = ({ text, href }: { text?: string; href?: string }) => {
  return (
    <a href={!!href ? href : '/'} className={'flex items-center gap-4 w-max'}>
      {/* <Image
        src={'/exa-sphere.png'}
        alt="exaSphere"
        width={28}
        height={28}
        className={cn('')}
      /> */}
      <p
        className={cn('font-light lg:text-lg font-openSans text-gray-exa-2', {
          [`${text}`]: !!text,
        })}
      >
        ExaSphere
      </p>
    </a>
  );
};
export default ExaSphere;
