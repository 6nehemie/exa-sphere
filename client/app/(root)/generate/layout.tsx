import { ReactNode } from 'react';

const GenerateLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <section className="generate-section max-w-[778px] w-full mx-auto">
      {children}
    </section>
  );
};
export default GenerateLayout;
