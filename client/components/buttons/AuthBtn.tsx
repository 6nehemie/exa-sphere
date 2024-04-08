import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AuthBtnProps {
  className?: string;
  label: string;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ className, label }) => {
  return (
    <Button
      type="submit"
      className={cn('w-full bg-white text-gray-3 hover:bg-gray-1', {
        [`${className}`]: !!className,
      })}
    >
      {label}
    </Button>
  );
};
export default AuthBtn;
