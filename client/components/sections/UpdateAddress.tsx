'use client';

import { IUser } from '@/types';
import { useState } from 'react';
import UpdateAddressForm from '../forms/UpdateAddressForm';
import SettingsPreview from '../previews/SettingsPreview';
import { useAppSelector } from '@/lib/hooks';

const UpdateAddress = () => {
  const user = useAppSelector((state) => state.user);
  const address = user.address;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Address"
      titleStyle="self-start"
      btnLabel="Update address"
      btnStyle="self-start"
      isEditing={isEditing}
      btnAction={() => setIsEditing((prev) => !prev)}
      content={
        <>
          {!isEditing && (
            <div className="space-y-6">
              {address && (
                <div className="space-y-1">
                  {/* <h3>{address.title}</h3> */}
                  <p className="text-sm font-light">
                    {address.street}, {address.zip} {address.city}
                  </p>
                  <p className="text-sm font-light">
                    {address.state}, {address.country}
                  </p>
                </div>
              )}
            </div>
          )}

          {isEditing && (
            <UpdateAddressForm
              address={address}
              closeForm={() => setIsEditing(false)}
            />
          )}
        </>
      }
    />
  );
};
export default UpdateAddress;
