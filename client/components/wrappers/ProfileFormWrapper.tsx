import { ReactNode } from 'react';

const ProfileFormWrapper = ({
  title,
  children,
  className,
  description,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  description?: string;
}) => {
  return (
    <div className="space-y-4">
      {title && (
        <div>
          <h3 className="text-lg">{title}</h3>
        </div>
      )}

      {description && <p className="text-sm text-gray-exa-2">{description}</p>}

      <div className={`space-y-4 ${className}`}>{children}</div>
    </div>
  );
};
export default ProfileFormWrapper;
