'use client';

import { Generate } from '@/types';
import { Copy } from 'lucide-react';
import { useToast } from '../ui/use-toast';

const UpdateCoverLetter = ({ generate }: { generate: Generate }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    const text = generate.coverLetter;
    navigator.clipboard
      .writeText(text)
      .then(() =>
        toast({
          description: 'Cover letter copied to clipboard.',
        })
      )
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="self-end bg-gray-exa-4 rounded-2xl p-5 px-6 w-max ml-10 font-normal text-gray-exa-1 text-sm">
        <p className="space-x-2">
          <span className="text-white">Company name:</span>
          <span className="font-light">{generate.company}</span>
        </p>

        <p className="space-x-2">
          <span className="text-white">Job Title:</span>
          <span className="font-light">{generate.jobTitle}</span>
        </p>

        <p className="space-x-2">
          <span className="text-white">Location:</span>
          <span className="font-light">{generate.location}</span>
        </p>
      </div>

      <div className="flex flex-col bg-gray-exa-3 rounded-2xl p-5 pt-3 px-6 mr-20 transition-colors duration-200">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 p-2.5 text-sm rounded-full text-right text-gray-exa-2 hover:text-white self-end"
        >
          <Copy size={16} />
          <span>Copy</span>
        </button>
        <p
          className="text-gray-exa-1"
          dangerouslySetInnerHTML={{
            __html: generate.coverLetter.replace(/\n/g, '<br>'),
          }}
        ></p>
      </div>
    </div>
  );
};
export default UpdateCoverLetter;
