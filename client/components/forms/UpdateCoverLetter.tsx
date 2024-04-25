'use client';

import { Generate } from '@/types';

const UpdateCoverLetter = ({ generate }: { generate: Generate }) => {
  return (
    <div>
      <p
        className="font-light text-gray-1"
        dangerouslySetInnerHTML={{
          __html: generate.coverLetter.replace(/\n/g, '<br>'),
        }}
      ></p>
    </div>
  );
};
export default UpdateCoverLetter;
