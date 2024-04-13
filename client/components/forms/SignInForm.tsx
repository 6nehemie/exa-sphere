'use client';

import { login } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AuthBtn from '../buttons/AuthBtn';

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const SignInForm = () => {
  const router = useRouter();
  const session = useSession();
  // console.log(session);

  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'naomi.liu@one.com',
      password: 'testtest',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (response && response.error) throw new Error(response.error);

      setIsLoading(false);
      router.push('/my-profiles');
    } catch (error: any) {
      console.error(error);

      form.setError('email', { message: 'Invalid Email or Password.' });
      form.setError('password', { message: 'Invalid Email or Password.' });

      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="space-y-2 mb-7 text-center">
          <h1 className="text-xl">{login.title}</h1>
          <p className="font-light text-gray-1 text-sm">{login.description}</p>
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <AuthBtn label={login.btn} isLoading={isLoading} />
        </div>
      </form>
    </Form>
  );
};
export default SignInForm;
