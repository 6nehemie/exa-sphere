'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';

const EducationCard = ({
  control,
  form,
  index,
}: {
  control?: any;
  form?: any;
  index?: number;
}) => {
  const errorMsg = '';
  // form.formState.errors[`experience${experienceNum}`]?.message || '';

  return (
    <div className="border border-dashed border-gray-2 p-5 rounded-xl space-y-4">
      {errorMsg && <p className="text-red-500 font-light">{errorMsg}</p>}
      <div className="md:grid grid-cols-2 max-md:space-y-4 gap-x-5">
        <FormField
          control={control}
          name={`education[${index}].degree`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Degree *</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="e.g. Computer Science" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`education[${index}].institution`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Institution *</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="e.g. Stanford University" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`education[${index}].graduationYear`}
          render={({ field }) => (
            <FormItem className="md:mt-4">
              <FormLabel className="font-light">Graduation Year *</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="e.g. 2018" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name={`education[${index}].description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">Description (optional)</FormLabel>
            <FormControl>
              <Textarea placeholder="Type your description here." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
export default EducationCard;
