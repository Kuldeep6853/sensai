import { SignUp } from '@clerk/nextjs';

const page = () => {
  return (
    <div className="flex items-center justify-center p-40">
      <SignUp />
    </div>
  );
};

export default page;
