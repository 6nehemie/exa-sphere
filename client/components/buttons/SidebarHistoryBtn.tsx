'use client';

import { cn } from '@/lib/utils';
import { Generate } from '@/types';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import deleteGenerateChatAction from '@/utils/actions/generate/deleteGenerateChatAction';

const SidebarHistoryBtn = ({
  onClick,
  generatedItem,
}: {
  onClick: () => void;
  generatedItem: Generate;
}) => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleDelete = async () => {
    await deleteGenerateChatAction(generatedItem.id);

    router.refresh();
  };

  return (
    <div
      className={cn(
        'group flex justify-between w-full bg-inherit hover:bg-gray-exa-3 transition-colors duration-100 p-0 pr-1 h-auto rounded-2xl',
        {
          'bg-gray-exa-3': generatedItem.id === +params.id,
        }
      )}
    >
      <Link
        onClick={onClick}
        href={`/generate/${generatedItem.id}`}
        className={`${cn(
          'flex items-center justify-start w-full text-left overflow-x-hidden text-sm space-y-1 px-3 py-2'
        )}`}
      >
        <div className="lg:max-w-[186px] overflow-hidden whitespace-nowrap">
          <div className="text-gray-exa-1">
            <span>{generatedItem.company}</span>
            {' - '}
            <span className="font-light">{generatedItem.jobTitle}</span>
          </div>
        </div>
      </Link>

      <AlertDialog>
        <AlertDialogTrigger>
          <div
            onClick={() => console.log('delete', generatedItem.id)}
            className={cn(
              'max-lg:hidden p-2 opacity-0 group-hover:opacity-100 hover:bg-gray-exa-4 rounded-full transition-colors duration-150'
            )}
          >
            <Trash size={15} strokeWidth={1.5} className="text-gray-exa-1" />
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Chat?</AlertDialogTitle>

            <AlertDialogDescription>
              You will no longer see this chat in Exasphere.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-exa-4 border-none font-light hover:bg-gray-highlight-1 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 font-light hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
export default SidebarHistoryBtn;
