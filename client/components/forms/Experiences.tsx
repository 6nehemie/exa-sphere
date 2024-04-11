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
import ProfileFormWrapper from '../wrappers/ProfileFormWrapper';
import EndDate from './EndDate';
import StartDate from './StartDate';

const Experiences = ({ control }: { control: any }) => {
  // const handleStartDate = (event: ChangeEvent<HTMLInputElement>) => {
  //   startDateRef.current.value = event.target.value;
  // };

  console.log(control);
  return (
    <ProfileFormWrapper title="Experiences">
      <h3 className="font-light">Experience 1 *</h3>
      <div className="md:grid grid-cols-2 max-md:space-y-4 gap-x-5">
        <FormField
          control={control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Job Title *</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Project Manager" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Company Name *</FormLabel>
              <FormControl>
                <Input placeholder="e.g. ABC Company" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-5">
        <StartDate control={control} />
        <EndDate control={control} />
      </div>

      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">Location *</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Zurich, Switzerland" {...field} />
            </FormControl>
            {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="responsibilities"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">Responsibilities *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="e.g., Develop new features, Conduct market research, Manage project timelines"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Enter the main responsibilities associated with the job role.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="achievements"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">Achievements</FormLabel>
            <FormControl>
              <Textarea
                placeholder="e.g., Increased sales by 20%, Received Employee of the Month award, Successfully led a team project"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Enter any notable achievements or accomplishments related to your
              previous roles.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </ProfileFormWrapper>
  );
};
export default Experiences;
