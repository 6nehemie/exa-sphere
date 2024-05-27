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
import { cn } from '@/lib/utils';
import { User } from '@/types';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import updateEmailAction from '@/utils/actions/user/updateEmailAction';
import { useToast } from '../ui/use-toast';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

const UpdateEmailForm = ({
  user,
  closeForm,
}: {
  user: User;
  closeForm: () => void;
}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user.email,
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await updateEmailAction(values);

    if (response && response.error) {
      setIsLoading(false);
      form.setError('email', {
        type: 'manual',
        message: response.error,
      });
      return console.error(response.error);
    }

    closeForm();
    toast({
      description: 'Your email has been updated, you have been logged out.',
    });
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-gray-exa-1 hover:bg-gray-exa-2 text-black h-9 rounded-full"
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
export default UpdateEmailForm;
