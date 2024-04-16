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
import ExperienceDate from './ExperienceDate';

const ExperienceCard = ({
  control,
  experienceNum,
  form,
}: {
  control: any;
  experienceNum: number;
  form: any;
}) => {
  return (
    <div className="border border-dashed border-gray-2 p-5 rounded-xl space-y-4">
      <div className="md:grid grid-cols-2 max-md:space-y-4 gap-x-5">
        <FormField
          control={control}
          name={`experience${experienceNum}.jobTitle`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Job Title *</FormLabel>
              <FormControl>
                <div>
                  <Input placeholder="e.g. Project Manager" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`experience${experienceNum}.company`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light">Company Name *</FormLabel>
              <FormControl>
                <Input placeholder="e.g. ABC Company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* //? Dates */}
      <div className="max-md:space-y-2 md:grid grid-cols-2 gap-x-5">
        <ExperienceDate
          form={form}
          dateName="startDate"
          label="Start Date *"
          experienceNum={experienceNum}
        />

        <ExperienceDate
          form={form}
          dateName="endDate"
          label="End Date (optional)"
          experienceNum={experienceNum}
        />
      </div>

      <FormField
        control={control}
        name={`experience${experienceNum}.location`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-light">Location *</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Zurich, Switzerland" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`experience${experienceNum}.responsibilities`}
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
        name={`experience${experienceNum}.achievements`}
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
    </div>
  );
};
export default ExperienceCard;
