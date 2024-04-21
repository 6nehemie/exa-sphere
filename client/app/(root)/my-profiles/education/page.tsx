import UpdateEducation from '@/components/sections/UpdateEducation';
import { education } from '@/constants';
import { Education as EducationType, IEducationAction } from '@/types';
import getEducationsAction from '@/utils/actions/education/getEducationsAction';

const Education = async () => {
  const educationsList = (await getEducationsAction()) as EducationType[];

  return (
    <div>
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{education.title}</h1>
        <p className="font-light text-sm text-gray-1 max-w-[830px]">
          {education.description}
        </p>
      </div>

      <UpdateEducation educationsList={educationsList} />
    </div>
  );
};
export default Education;
