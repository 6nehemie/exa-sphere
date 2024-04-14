'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { updateUser } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Address } from '@/types';
import updateAddressAction from '@/utils/actions/user/updateAddressAction';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';

const formSchema = z.object({
  street: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  zip: z.string().min(1, { message: 'Zip is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
});

const UpdateAddressForm = ({
  address,
  closeForm,
}: {
  address: Address | null;
  closeForm: () => void;
}) => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      street: address?.street || '',
      city: address?.city || '',
      zip: address?.zip || '',
      state: address?.state || '',
      country: address?.country || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await updateAddressAction(values);

    if (response && response.error) {
      setIsLoading(false);
      return console.error(response.error);
    }

    dispatch(updateUser(response));
    closeForm();
    setIsLoading(false);
    toast({
      description: 'Your address has been updated.',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex max-lg:flex-col w-full gap-x-5 gap-y-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-light">Street</FormLabel>
                <FormControl>
                  <Input placeholder="Street w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="max-w-[140px] w-full">
                <FormLabel className="font-light">Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="Zip Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="max-lg:space-y-4 lg:grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-light">City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-light">State</FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-light">Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" {...field} />
                </FormControl>
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
export default UpdateAddressForm;
