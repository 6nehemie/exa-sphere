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

const ProfileDetails = ({ control }: { control: any }) => {
  return (
    <ProfileFormWrapper>
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">Profile Title *</FormLabel>
            <FormControl>
              <Input
                placeholder="Profile Title * (e.g., 'Software Engineer', 'Marketing Specialist')"
                {...field}
              />
            </FormControl>
            <FormDescription>
              This will help you select a profile that you&apos;ve saved
              previously
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">
              Profile Description (Optional)
            </FormLabel>
            <FormControl>
              <Textarea placeholder="" {...field} />
            </FormControl>
            <FormDescription>
              Provide a brief description for your profile to help you
              distinguish it from others. This description can include details
              about your skills, experiences, or any other relevant information.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </ProfileFormWrapper>
  );
};
export default ProfileDetails;
