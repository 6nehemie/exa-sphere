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
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import generateSchema from '@/utils/zod/generateSchema';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { generate } from '@/constants';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Profile } from '@/types';
import postGenerateAction from '@/utils/actions/generate/postGenerateAction';

const GenerateForm = ({ profiles }: { profiles: Profile[] }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof generateSchema>>({
    resolver: zodResolver(generateSchema),
    defaultValues: {
      jobTitle: '',
      company: '',
      location: '',
      jobType: '',
      experienceLevel: '',
      profileId: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof generateSchema>) {
    setIsLoading(true);

    const response = await postGenerateAction(values);

    if (response && response.error) {
      toast({
        title: 'Error',
        description: 'An error occurred while saving your education details.',
      });

      setIsLoading(false);
      return console.error(response.error);
    }

    setIsLoading(false);

    toast({
      title: 'Education Saved',
      description: 'Your education details have been saved successfully.',
    });

    router.push(`/generate/${response.id}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className=" space-y-4">
          <div className="space-y-2 mb-12">
            <h1 className="text-2xl font-light">{generate.title}</h1>
            <p className="font-light text-sm text-gray-1">
              {generate.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name={`jobTitle`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light">Job Title *</FormLabel>
                  <FormControl>
                    <div>
                      <Input {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`company`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light">Company *</FormLabel>
                  <FormControl>
                    <div>
                      <Input {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name={`location`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light">Location *</FormLabel>
                  <FormControl>
                    <div>
                      <Input {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`jobType`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light">Job Type *</FormLabel>
                  <FormControl>
                    <div>
                      <Input {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name={`experienceLevel`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light">Experience Level</FormLabel>
                  <FormControl>
                    <div>
                      <Input {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`profileId`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light">Select Profile *</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) =>
                        form.setValue('profileId', value)
                      }
                    >
                      <SelectTrigger className="w-full bg-transparent border-gray-2 text-sm font-light">
                        <SelectValue placeholder="No Profile Selected" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-3 border-gray-2 text-white">
                        <SelectGroup>
                          <SelectLabel>Profiles</SelectLabel>
                          {profiles.map((profile) => (
                            <SelectItem
                              key={profile.id}
                              value={`${profile.id}`}
                              className="text-sm font-light"
                            >
                              <SelectLabel className="font-light text-sm px-0 text-start">
                                {profile.title}
                              </SelectLabel>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name={`description`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-light">Job Description *</FormLabel>
                <FormControl>
                  <div>
                    <Textarea
                      rows={12}
                      placeholder="Type your message here."
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end w-full mt-12">
            <Button
              type="submit"
              disabled={isLoading}
              className="rounded-sm h-10 bg-white hover:bg-gray-1 text-gray-3 font-light"
            >
              <Loader2
                className={cn('mr-2 h-4 w-4 animate-spin font-light', {
                  hidden: !isLoading,
                })}
              />
              <span>{isLoading ? 'saving...' : 'Generate Cover Letter'}</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default GenerateForm;
