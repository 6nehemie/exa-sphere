import { ReactNode } from 'react';

const GenerateLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-[1300px]:gap-5 w-full">
      <section className="w-full pb-10">
        <div className="max-w-[831px] w-full mx-auto">{children}</div>
      </section>
    </div>
  );
};
export default GenerateLayout;
