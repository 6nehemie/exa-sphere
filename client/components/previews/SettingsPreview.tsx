import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ISettingsPreview {
  title: string;
  content?: ReactNode;
  btnLabel: string;
  btnAction?: () => void;
  titleStyle?: string;
  btnStyle?: string;
  isEditing?: boolean;
}

const SettingsPreview: React.FC<ISettingsPreview> = ({
  title,
  content,
  btnLabel,
  btnAction,
  titleStyle,
  btnStyle,
  isEditing,
}) => {
  return (
    <div className="grid md:grid-cols-9 max-md:grid-cols-2 gap-10 md:gap-5 justify-between items-center">
      {/* //? title */}
      <h3
        className={cn(
          'max:md:row-start-1 max-md:row-end-2 max-md:col-start-1 max-md:col-end-2 col-span-2 text-gray-1 font-light w-max h-max self-start',
          {
            [`${titleStyle}`]: titleStyle,
          }
        )}
      >
        {title}
      </h3>

      <div className="max-md:col-start-1 max-md:col-end-3 md:col-start-3 md:col-end-8 h-max">
        {/* //? content */}
        {content}
      </div>

      {/* //? Btn */}
      <button
        onClick={btnAction}
        className={cn(
          'btn max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2 md:col-start-8 md:col-end-10 text-sm text-gray-1 font-light w-max justify-self-end self-start',
          {
            [`${btnStyle}`]: btnStyle,
          }
        )}
      >
        {!isEditing ? `${btnLabel}` : 'Cancel'}
      </button>
    </div>
  );
};
export default SettingsPreview;
