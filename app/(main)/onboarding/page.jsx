
export const dynamic = "force-dynamic"; // Disable caching
import React from 'react'
import OnboardingForm from './_components/onboarding-form';
import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import { redirect } from 'next/navigation';


const OnboardingPage = async() => {
    // check if user is already onBoarding
    const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect('/dashboard');
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
