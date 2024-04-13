import UpdatePassword from '@/components/sections/UpdatePassword';
import { Separator } from '@/components/ui/separator';
import { settingsSecurity } from '@/constants';
import isOauth from '@/utils/functions/isOauth';
import { redirect } from 'next/navigation';

const SecuritySettings = async () => {
  if (await isOauth()) redirect('/settings');

  return (
    <section className="space-y-7">
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{settingsSecurity.title}</h1>
        <p className="font-light text-sm text-gray-1">
          {settingsSecurity.description}
        </p>
      </div>

      <Separator />

      <UpdatePassword />
    </section>
  );
};
export default SecuritySettings;
