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
  form,
  index,
}: {
  control: any;
  form: any;
  index?: number;
}) => {
  // const errorMsg =
  //   form.formState.errors[`experiences[${index}]`]?.message || '';

  //? Format date input
  const formatDate = (input: HTMLInputElement) => {
    let value = input.value.replace(/\D/g, '').substring(0, 8);
    let day = value.substring(0, 2);
    let month = value.substring(2, 4);
    let year = value.substring(4, 8);

    if (value.length > 4) {
      input.value = `${day}/${month}/${year}`;
    } else if (value.length > 2) {
      input.value = `${day}/${month}`;
    } else {
      input.value = `${day}`;
    }
  };

  return (
    <div className="border border-dashed border-gray-2 p-5 rounded-xl space-y-4">
      {/* {errorMsg && <p className="text-red-500 font-light">{errorMsg}</p>} */}
      <div className="md:grid grid-cols-2 max-md:space-y-4 gap-x-5">
        <FormField
          control={control}
          name={`experiences[${index}].jobTitle`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">
                Job Title <span className="text-gray-exa-2">(required)</span>
              </FormLabel>
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
          name={`experiences[${index}].company`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">
                Company Name <span className="text-gray-exa-2">(required)</span>
              </FormLabel>
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
        {/* <ExperienceDate
          form={form}
          dateName="startDate"
          label="Start Date *"
          index={index}
        /> */}

        {/* <ExperienceDate
          form={form}
          index={index}
          dateName="endDate"
          label="End Date (optional)"
        /> */}

        <FormField
          control={control}
          name={`experiences[${index}].startDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">
                Start Date <span className="text-gray-exa-2">(required)</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="DD-MM-YYYY"
                  maxLength={10}
                  {...field}
                  onInput={(e) => formatDate(e.target as HTMLInputElement)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`experiences[${index}].endDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">
                End Date <span className="text-gray-exa-2">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="DD-MM-YYYY"
                  maxLength={10}
                  {...field}
                  onInput={(e) => formatDate(e.target as HTMLInputElement)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name={`experiences[${index}].location`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">
              Location <span className="text-gray-exa-2">(required)</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g. Zurich, Switzerland" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`experiences[${index}].responsibilities`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">
              Responsibilities{' '}
              <span className="text-gray-exa-2">(required)</span>
            </FormLabel>
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
        name={`experiences[${index}].achievements`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">
              Achievements <span className="text-gray-exa-2">(Optional)</span>
            </FormLabel>
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
