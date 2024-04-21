import GenerateNavigation from '@/components/navigations/GenerateNavigation';
import { ReactNode } from 'react';

const GenerateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-5 w-full">
      <div className="min-[1300px]:w-[283px]">
        <GenerateNavigation />
      </div>

      <section className="w-full">{children}</section>
    </div>
  );
};
export default GenerateLayout;
