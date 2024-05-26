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
import { Input } from '@/components/ui/input';
import ProfileFormWrapper from '../wrappers/ProfileFormWrapper';
import { Textarea } from '../ui/textarea';

const Skills = ({ control }: { control: any }) => {
  return (
    <ProfileFormWrapper title="Skills">
      <FormField
        control={control}
        name="skills"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">
              Skills <span className="text-gray-exa-2">(required, max 10)</span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Please enter your skills separated by commas. For example: 'JavaScript, HTML, CSS'."
                {...field}
              />
            </FormControl>
            <FormDescription>
              This will help tailor your cover letters to specific job
              requirements and showcase your qualifications effectively.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </ProfileFormWrapper>
  );
};
export default Skills;
