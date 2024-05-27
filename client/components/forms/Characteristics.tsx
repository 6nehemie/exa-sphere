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
import ProfileFormWrapper from '../wrappers/ProfileFormWrapper';
import { Textarea } from '../ui/textarea';

const Characteristics = ({ control }: { control: any }) => {
  return (
    <ProfileFormWrapper title="Characteristics or Strengths">
      <FormField
        control={control}
        name="characteristics"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">
              Characteristics or Strengths{' '}
              <span className="text-gray-exa-2">(required, max 8)</span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Please enter your characteristics or strengths separated by commas. For example: 'Teamwork, Problem-solving, Leadership'."
                {...field}
              />
            </FormControl>
            {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />
    </ProfileFormWrapper>
  );
};
export default Characteristics;
