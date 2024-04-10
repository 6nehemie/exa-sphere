'use client';

import SettingsPreview from '../previews/SettingsPreview';

const UpdatePasswordForm = () => {
  return (
    <SettingsPreview
      title="Password"
      titleStyle="self-start"
      btnLabel="update password"
      btnAction={() => {}}
      content={
        <>
          <p className="font-light text-sm">•••••••••••</p>
        </>
      }
    />
  );
};
export default UpdatePasswordForm;
