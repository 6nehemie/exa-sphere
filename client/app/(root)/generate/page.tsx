import GenerateForm from '@/components/forms/GenerateForm';
import getAllProfilesAction from '@/utils/actions/profile/getAllProfilesAction';

const Generate = async () => {
  const profiles = await getAllProfilesAction();

  return (
    <>
      <GenerateForm profiles={profiles} />
    </>
  );
};
export default Generate;
