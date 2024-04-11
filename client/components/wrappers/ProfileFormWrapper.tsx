import { ReactNode } from 'react';

const ProfileFormWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="space-y-6">
      <h3 className="font-light text-lg">{title}</h3>

      <div className="space-y-4">{children}</div>
    </div>
  );
};
export default ProfileFormWrapper;
