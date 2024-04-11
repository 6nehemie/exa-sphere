import { newJobProfile } from '@/constants';
import NewJobProfile from '@/components/sections/NewProfile';

const NewProfile = () => {
  return (
    <section>
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{newJobProfile.title}</h1>
        <p className="font-light text-sm text-gray-1">
          {newJobProfile.description}
        </p>
      </div>

      <NewJobProfile />
    </section>
  );
};
export default NewProfile;
