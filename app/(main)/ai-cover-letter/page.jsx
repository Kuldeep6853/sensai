import React from 'react'
import CoverLetterList from './_components/cover-letter-list'
import { getCoverLetters } from '@/actions/cover-letter';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const CoverLetterPage = async() => {
  const coverLetters = await getCoverLetters();
  return (
    <div className='px-4'>
      <div className="flex flex-col px-4 md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>
        <Link href="/ai-cover-letter/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}

export default CoverLetterPage
