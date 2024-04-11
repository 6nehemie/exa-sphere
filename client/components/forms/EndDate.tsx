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

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const EndDate = ({ control }: { control: any }) => {
  const [date, setDate] = React.useState<Date>();

  return (
    <FormField
      control={control}
      name="endDate"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-light">End Date (optional)</FormLabel>
          <FormControl>
            <div>
              <Input
                defaultValue={String(date?.toDateString())}
                //   type="date"
                placeholder=""
                {...field}
                className="hidden"
              />

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
            </div>
          </FormControl>
          {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EndDate;
