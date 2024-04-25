'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { FormLabel } from '@/components/ui/form';

const ExperienceDate = ({
  label,
  dateName,
  form,
  index,
}: {
  label: string;
  dateName: string;
  form: any;
  index?: number;
}) => {
  const [date, setDate] = React.useState<Date>(
    form.getValues(`experiences[${index}].${dateName}`) as any
  );

  form.setValue(`experiences[${index}].${dateName}`, date || undefined);

  const errorMsg =
    form.formState.errors[`experiences[${index}]`]?.[`${dateName}`]?.message ||
    '';

  return (
    <>
      <div className="space-y-2">
        <FormLabel
          className={cn('font-light', {
            'text-red-500': errorMsg,
          })}
        >
          {label}
        </FormLabel>

        <Popover>
          <PopoverTrigger asChild className="block">
            <Button
              variant={'outline'}
              className={cn(
                'w-full flex justify-start text-left font-normal bg-gray-3 hover:bg-gray-2 text-white hover:text-gray-1 border-gray-2 hover:border-gray-1',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0 mx-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {errorMsg && (
          <p className="text-sm font-light text-red-500">{errorMsg}</p>
        )}
      </div>
    </>
  );
};

export default ExperienceDate;
