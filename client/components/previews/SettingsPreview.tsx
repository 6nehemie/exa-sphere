import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ISettingsPreview {
  title: string;
  content?: ReactNode;
  btnLabel: string;
  btnAction?: () => void;
  titleStyle?: string;
  btnStyle?: string;
}

const SettingsPreview: React.FC<ISettingsPreview> = ({
  title,
  content,
  btnLabel,
  btnAction,
  titleStyle,
  btnStyle,
}) => {
  return (
    <div className="grid grid-cols-9 gap-5 justify-between items-center">
      {/* //? title */}
      <h3
        className={cn('col-span-2 text-gray-1 font-light w-max', {
          [`${titleStyle}`]: titleStyle,
        })}
      >
        {title}
      </h3>

      <div className="col-start-3 col-end-8">
        {/* //? content */}
        {content}
      </div>

      {/* //? Btn */}
      <button
        onClick={btnAction}
        className={cn(
          'col-start-8 col-end-10 text-sm text-gray-1 font-light btn w-max justify-self-end',
          {
            [`${btnStyle}`]: btnStyle,
          }
        )}
      >
        {btnLabel}
      </button>
    </div>
  );
};
export default SettingsPreview;
