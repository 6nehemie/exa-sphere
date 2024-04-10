'use client';

import { IUser } from '@/types';
import { useState } from 'react';
import UpdateAddressForm from '../forms/UpdateAddressForm';
import SettingsPreview from '../previews/SettingsPreview';

const UpdateAddress = ({ user }: { user: IUser }) => {
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
              {address.id && (
                <div key={address.id} className="space-y-1">
                  <h3>{address.title}</h3>
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

          {isEditing && <UpdateAddressForm user={user} />}
        </>
      }
    />
  );
};
export default UpdateAddress;
