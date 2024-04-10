'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { IUser } from '@/types';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z
  .object({
    countryCode: z.string().min(2).max(3).refine(validator.isNumeric, {
      message: 'Invalid',
    }),
    number: z.string().refine(validator.isMobilePhone || validator.isNumeric, {
      message: 'Invalid number',
    }),
  })
  .refine((data) => validator.isMobilePhone(data.countryCode + data.number), {
    message: 'Invalid number',
  });

const UpdateNumberForm = ({ user }: { user: IUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: user.phoneNumber.countryCode,
      number: user.phoneNumber.number,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    //? don't forget to remove spaces from the number
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-light">Code</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute text-sm top-[11px] left-2.5">
                      +
                    </span>
                    <Input placeholder="41" {...field} className="w-20 pl-6" />
                  </div>
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-light">Number</FormLabel>
                <FormControl>
                  <Input placeholder="Number" type="string" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-white hover:bg-gray-1 text-gray-3 h-9"
        >
          <Loader2
            className={cn('mr-2 h-4 w-4 animate-spin', {
              hidden: !isLoading,
            })}
          />
          <span>{isLoading ? 'updating...' : 'Submit'}</span>
        </Button>
      </form>
    </Form>
  );
};
export default UpdateNumberForm;
