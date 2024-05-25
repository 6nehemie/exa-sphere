import { ReactNode } from 'react';

const GenerateLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-[1300px]:gap-5 w-full">
      <section className="w-full pb-8 h-full">
        <div className="max-w-[778px] w-full mx-auto h-full">{children}</div>
      </section>
    </div>
  );
};
export default GenerateLayout;
