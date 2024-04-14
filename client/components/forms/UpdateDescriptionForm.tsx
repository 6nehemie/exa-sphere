'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { User } from '@/types';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import updateDescriptionAction from '@/utils/actions/user/updateDescriptionAction';
import { useAppDispatch } from '@/lib/hooks';
import { updateUser } from '@/lib/features/user/userSlice';

const formSchema = z.object({
  description: z.string().max(250),
});

const UpdateDescriptionForm = ({
  user,
  closeForm,
}: {
  user: User;
  closeForm: () => void;
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: user.description || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await updateDescriptionAction(values);

    if (response && response.error) {
      setIsLoading(false);
      return console.error(response.error);
    }

    dispatch(updateUser(response));
    closeForm();
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormDescription>
                A short description about yourself. Max 250 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
export default UpdateDescriptionForm;
