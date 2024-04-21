import UpdateEducation from '@/components/sections/UpdateEducation';
import { education } from '@/constants';

const Education = () => {
  return (
    <div>
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{education.title}</h1>
        <p className="font-light text-sm text-gray-1 max-w-[830px]">
          {education.description}
        </p>
      </div>

      <UpdateEducation />
    </div>
  );
};
export default Education;
