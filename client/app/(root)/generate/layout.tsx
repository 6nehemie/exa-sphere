import GenerateNavigation from '@/components/navigations/GenerateNavigation';
import { Generate } from '@/types';
import getAllGenerateAction from '@/utils/actions/generate/getAllGenerateAction';
import { ReactNode } from 'react';

const GenerateLayout = async ({ children }: { children: ReactNode }) => {
  const generatedList = (await getAllGenerateAction()) as Generate[];

  return (
    <div className="flex min-[1300px]:gap-5 w-full">
      <div className="min-[1300px]:w-[283px]">
        <GenerateNavigation generatedList={generatedList} />
      </div>

      <section className="w-full pb-10">
        <div className="max-w-[831px] w-full mx-auto">{children}</div>
      </section>
    </div>
  );
};
export default GenerateLayout;
