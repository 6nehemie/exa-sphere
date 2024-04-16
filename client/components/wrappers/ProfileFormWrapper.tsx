import { ReactNode } from 'react';

const ProfileFormWrapper = ({
  title,
  children,
  className,
  description,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  description?: string;
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-light text-lg">{title}</h3>
      </div>
      {description && (
        <p className="text-sm font-light text-gray-1">{description}</p>
      )}

      <div className={`space-y-4 ${className}`}>{children}</div>
    </div>
  );
};
export default ProfileFormWrapper;
