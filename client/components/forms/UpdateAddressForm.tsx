'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import AddItem from '../buttons/AddItem';

const UpdateAddressForm = ({ user }: { user: IUser }) => {
  return (
    <SettingsPreview
      title="Addresses"
      titleStyle="self-start"
      btnLabel="Update addresses"
      btnAction={() => {}}
      btnStyle="self-start"
      content={
        <>
          <div className="space-y-6">
            {user.addresses.map((address) => {
              return (
                <div key={address.id} className="space-y-1">
                  <h3>{address.title}</h3>
                  <p className="text-sm font-light">
                    {address.address}, {address.zip} {address.city}
                  </p>
                  <p className="text-sm font-light">
                    {address.state}, {address.country}
                  </p>
                </div>
              );
            })}

            <div className="mt-14">
              <AddItem label="Add Address" />
            </div>
          </div>
        </>
      }
    />
  );
};
export default UpdateAddressForm;
