import UpdateCoverLetter from '@/components/forms/UpdateCoverLetter';
import { Generate } from '@/types';
import getGenerateAction from '@/utils/actions/generate/getGenerateAction';
import { redirect } from 'next/navigation';

const GeneratePage = async ({
  params,
}: {
  params: { id: number | string };
}) => {
  const generate = (await getGenerateAction(+params.id)) as Generate | any;

  if (generate.error) redirect('/generate');

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-lg">Generated Cover Letter:</h1>
        </div>

        <UpdateCoverLetter generate={generate} />
      </div>
    </>
  );
};
export default GeneratePage;
