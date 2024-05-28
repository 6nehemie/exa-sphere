import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface AuthBtnProps {
  label: string;
  isLoading?: boolean;
  className?: string;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ className, label, isLoading }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={cn(
        'w-full bg-white h-12 rounded-xl text-gray-3 hover:bg-gray-1',
        {
          [`${className}`]: !!className,
        }
      )}
    >
      <Loader2
        className={cn('mr-2 h-4 w-4 animate-spin', {
          hidden: !isLoading,
        })}
      />
      {label}
    </Button>
  );
};
export default AuthBtn;
