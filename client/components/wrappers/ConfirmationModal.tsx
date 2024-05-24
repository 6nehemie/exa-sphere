'use client';

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
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const ConfirmationModal = ({
  children,
  confirmAction,
  cancelLabel,
  confirmLabel,
  cancelStyle,
  confirmStyle,
  description,
  title,
  zIndex,
}: {
  children: ReactNode;
  confirmAction: () => void;
  cancelLabel: string;
  confirmLabel: string;
  title: string;
  description: string;
  cancelStyle?: string;
  confirmStyle?: string;
  zIndex?: number;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>

      <AlertDialogContent
        className={cn('', {
          [`z-${zIndex}`]: zIndex,
        })}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            className={cn('', {
              [`${cancelStyle}`]: cancelStyle,
            })}
          >
            {cancelLabel}
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={confirmAction}
            className={cn('', {
              [`${confirmStyle}`]: confirmStyle,
            })}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ConfirmationModal;
