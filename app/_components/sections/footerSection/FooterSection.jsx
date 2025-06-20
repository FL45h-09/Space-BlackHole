import React from 'react';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <div className='py-4 text-center'>
        <div className="container">
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">🪐👨‍🚀 Online Space is an open-source project by <Link href="https://github.com/FL45h-09" className="underline hover:text-indigo-400 transition-colors">Vishal Ravanank</Link> — explore, fork, and contribute.</p>
        </div>
    </div>
  )
}
