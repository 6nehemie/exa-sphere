import { redirect } from 'next/navigation';

const page = () => {
  redirect('/my-profiles');
  return <div>page</div>;
};
export default page;
